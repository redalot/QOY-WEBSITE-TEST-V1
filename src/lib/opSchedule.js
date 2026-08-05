// Operation schedule maths.
//
// Ops run 20:00 UK time on Tuesdays and Sundays. "UK time" is Europe/London,
// which is GMT in winter and BST in summer, so a fixed offset would drift by an
// hour for half the year. Everything below resolves the London wall clock
// properly and hands back real UTC instants.

export const OP_DAYS = [0, 2]; // Sunday, Tuesday
export const OP_HOUR = 20;
export const OP_END_HOUR = 22;
export const OP_END_MINUTE = 30;
const TZ = 'Europe/London';

const partsFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: TZ,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
});

/** The London wall-clock time at a given instant, as plain numbers. */
function londonParts(date) {
  const parts = Object.fromEntries(
    partsFormatter.formatToParts(date).map(({ type, value }) => [type, value])
  );
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second),
  };
}

/** How far London is from UTC at a given instant, in milliseconds. */
function londonOffset(date) {
  const p = londonParts(date);
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return asUtc - Math.floor(date.getTime() / 1000) * 1000;
}

/**
 * The UTC instant at which London's wall clock reads the given date and time.
 * Converges in two passes, which is enough to land on the right side of a DST
 * boundary.
 */
function londonWallClockToUtc(year, month, day, hour, minute = 0) {
  const naive = Date.UTC(year, month - 1, day, hour, minute);
  let instant = new Date(naive - londonOffset(new Date(naive)));
  instant = new Date(naive - londonOffset(instant));
  return instant;
}

/**
 * The next operation at or after `from`. An op counts as ongoing (rather than
 * past) until its finish time, so the site doesn't skip ahead mid-session.
 */
export function getNextOp(from = new Date()) {
  for (let offset = 0; offset <= 14; offset++) {
    const probe = new Date(from.getTime() + offset * 86400000);
    const { year, month, day } = londonParts(probe);

    const start = londonWallClockToUtc(year, month, day, OP_HOUR);
    const end = londonWallClockToUtc(year, month, day, OP_END_HOUR, OP_END_MINUTE);

    // Weekday has to come from the London date, not the viewer's local one.
    const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
    if (!OP_DAYS.includes(weekday)) continue;

    if (from < end) {
      return { start, end, isLive: from >= start && from < end };
    }
  }
  return null;
}

/** Milliseconds split into whole days/hours/minutes/seconds. */
export function splitDuration(ms) {
  const clamped = Math.max(0, ms);
  const totalSeconds = Math.floor(clamped / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/** The viewer's own timezone abbreviation, e.g. "CEST". */
export function localZoneLabel(date = new Date()) {
  const parts = new Intl.DateTimeFormat(undefined, { timeZoneName: 'short' }).formatToParts(date);
  return parts.find((p) => p.type === 'timeZoneName')?.value ?? '';
}

/** True when the viewer is already on UK time, so we can skip the conversion. */
export function viewerIsUkTime() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone === TZ;
  } catch {
    return false;
  }
}
