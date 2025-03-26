export const AestheticUsabilityIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polygon
      points="50,15 85,85 15,85"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
  </svg>
);

export const DohertyThresholdIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle
      cx="50"
      cy="50"
      r="10"
      fill="#f5f5dc"
    />
    <circle
      cx="50"
      cy="50"
      r="25"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
      opacity="0.7"
    />
    <circle
      cx="50"
      cy="50"
      r="40"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
      opacity="0.5"
    />
  </svg>
);

export const FittsLawIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="50"
      r="35"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="50"
      r="25"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="50"
      r="15"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="50"
      r="5"
      fill="#f5f5dc"
    />
  </svg>
);

export const HicksLawIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <g fill="#f5f5dc">
      {Array.from({ length: 5 }).map((_, rowIndex) =>
        Array.from({ length: 5 }).map((_, colIndex) => (
          <circle
            key={`${rowIndex}-${colIndex}`}
            cx={20 + colIndex * 15}
            cy={20 + rowIndex * 15}
            r="3"
            opacity={rowIndex % 2 === 0 ? "1" : "0.5"}
          />
        ))
      )}
    </g>
    <rect
      x="38"
      y="38"
      width="24"
      height="24"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
  </svg>
);

export const JakobsLawIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <rect
      x="20"
      y="20"
      width="60"
      height="60"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
    <rect
      x="30"
      y="30"
      width="40"
      height="40"
      fill="none"
      stroke="#f5f5dc"
      strokeWidth="2"
    />
  </svg>
);

export const LawOfCommonRegionIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="30" cy="30" r="5" fill="#f5f5dc" />
    <circle cx="50" cy="30" r="5" fill="#f5f5dc" />
    <circle cx="70" cy="30" r="5" fill="#f5f5dc" />
    <circle cx="50" cy="70" r="5" fill="#f5f5dc" />
    <circle cx="30" cy="50" r="20" fill="none" stroke="#f5f5dc" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

export const LawOfProximityIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <g fill="#f5f5dc">
      {[
        [20, 20], [40, 20], [60, 20],
        [20, 40], [40, 40], [60, 40],
        [20, 60], [40, 60], [60, 60],
        [20, 80], [40, 80], [60, 80]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" />
      ))}
      {[
        [80, 20], [80, 40], [80, 60], [80, 80]
      ].map(([cx, cy], i) => (
        <circle key={i + 12} cx={cx} cy={cy} r="5" opacity="0.5" />
      ))}
    </g>
  </svg>
);

export const ParkinsonLawIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polygon
      points="20,70 50,20 80,70"
      fill="#f5f5dc"
      stroke="#f5f5dc"
      strokeWidth="1"
    />
  </svg>
);
