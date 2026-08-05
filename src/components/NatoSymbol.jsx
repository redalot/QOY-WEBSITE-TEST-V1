// APP-6 style unit symbols. Friendly ground units use a rectangular frame;
// the fill marks the branch (crossed diagonals = infantry, single diagonal =
// reconnaissance) and the marks above the frame give the echelon.

const ECHELON_LABEL = {
  team: 'Team',
  section: 'Section',
  platoon: 'Troop',
};

const BRANCH_LABEL = {
  infantry: 'Infantry',
  recon: 'Reconnaissance',
};

const Echelon = ({ echelon, color }) => {
  // A fireteam carries the team marker: a single open oval.
  if (echelon === 'team') {
    return <ellipse cx="36" cy="8" rx="5" ry="3.5" stroke={color} strokeWidth="2" fill="none" />;
  }

  const count = echelon === 'platoon' ? 3 : 2;
  const spacing = 10;
  const startX = 36 - ((count - 1) * spacing) / 2;

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <circle key={i} cx={startX + i * spacing} cy="8" r="2.6" fill={color} />
      ))}
    </>
  );
};

const NatoSymbol = ({
  branch = 'infantry',
  echelon = 'section',
  color = 'currentColor',
  className = '',
}) => {
  const label = `${BRANCH_LABEL[branch] ?? branch} ${ECHELON_LABEL[echelon] ?? echelon} symbol`;

  return (
    <svg
      viewBox="0 0 72 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
    >
      <Echelon echelon={echelon} color={color} />
      <rect x="6" y="17" width="60" height="34" stroke={color} strokeWidth="2.5" />
      {branch === 'infantry' ? (
        <>
          <path d="M6 17 L66 51" stroke={color} strokeWidth="2" />
          <path d="M6 51 L66 17" stroke={color} strokeWidth="2" />
        </>
      ) : (
        <path d="M6 51 L66 17" stroke={color} strokeWidth="2" />
      )}
    </svg>
  );
};

export default NatoSymbol;
