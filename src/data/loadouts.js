// Section composition and equipment loadouts, shared by the Field Manual and
// the ORBAT so a role's kit is defined in exactly one place.

export const rifleSection = {
  image: 'qoy-rifle-section.webp',
  imageAlt: 'Rifle section composition infographic',
  heading: 'Rifle Section Composition',
  note: 'The rifle section is the core combat element of our unit, split into Charlie and Delta fireteams for tactical flexibility.',
  groups: [
    {
      name: 'Charlie Fireteam',
      loadouts: [
        { role: 'Section Commander', weapon: 'L85A2 UGL', secondary: 'NLAW', equipment: 'LR Radio' },
        { role: 'Sharpshooter', weapon: 'L129A1', secondary: 'ILAW' },
        { role: 'Minimi Gunner', weapon: 'L110A1' },
        { role: 'Medic', weapon: 'L85A2', secondary: 'ILAW' },
      ],
    },
    {
      name: 'Delta Fireteam',
      loadouts: [
        { role: 'Fire Team Leader', weapon: 'L85A2', secondary: 'NLAW' },
        { role: 'Rifleman', weapon: 'L85A2', secondary: 'NLAW' },
        { role: 'LSW Gunner', weapon: 'L86A2 LSW', secondary: 'ILAW' },
        { role: 'Medic', weapon: 'L85A2', secondary: 'ILAW' },
      ],
    },
  ],
};

export const fireSupportGroup = {
  image: 'qoy-fire-support-group.webp',
  imageAlt: 'Fire support group composition infographic',
  heading: 'Fire Support Group',
  groups: [
    {
      name: 'Gun Team',
      loadouts: [
        { role: 'Section Commander', weapon: 'L85A2', secondary: 'Javelin Tube / NLAW', equipment: 'LR Radio' },
        { role: 'GPMG Gunner', weapon: 'L7A2 GPMG', equipment: 'Static Tripod' },
        { role: 'GPMG Gunner', weapon: 'L7A2 GPMG', equipment: 'Static Tripod' },
        { role: 'Medic', weapon: 'L85A2', secondary: 'Javelin Tube / ILAW' },
      ],
    },
    {
      name: 'Anti-Tank Team',
      loadouts: [
        { role: 'Fire Team Leader', weapon: 'L85A2', secondary: 'Javelin Tube / NLAW' },
        { role: 'Javelin Gunner', weapon: 'L85A2', secondary: 'Javelin Launcher + CLU' },
        { role: 'MAAWs Gunner', weapon: 'L85A2', secondary: 'MAAWS Mk4' },
        { role: 'Rifleman', weapon: 'L85A2', secondary: 'Javelin Tube / NLAW' },
      ],
    },
  ],
};

export const manualSections = [rifleSection, fireSupportGroup];

// ORBAT position names don't match Field Manual loadout names one-for-one, so
// they're mapped explicitly. Roles whose kit isn't documented in the manual
// (Anti-Tank, Assault Pioneer, Troop Commander) are deliberately left out
// rather than guessed at.
const ROLE_TO_LOADOUT = {
  'Section Commander': 'Section Commander',
  Sharpshooter: 'Sharpshooter',
  Medic: 'Medic',
  Rifleman: 'Rifleman',
  'Rifleman (CLS)': 'Rifleman',
  'Fireteam Leader (2IC)': 'Fire Team Leader',
  'Fireteam Leader (3IC)': 'Fire Team Leader',
  'LMG/LSW': 'LSW Gunner',
  'LMG/GPMG': 'GPMG Gunner',
};

const ALL_LOADOUTS = manualSections.flatMap((s) => s.groups.flatMap((g) => g.loadouts));

/** The documented kit for an ORBAT role, or null if the manual doesn't cover it. */
export const getLoadoutForRole = (role) => {
  const target = ROLE_TO_LOADOUT[role];
  if (!target) return null;
  return ALL_LOADOUTS.find((l) => l.role === target) ?? null;
};
