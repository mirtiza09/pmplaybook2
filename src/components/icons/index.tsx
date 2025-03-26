
// UX Law Icons
export const AestheticUsabilityIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polygon points="50,15 85,85 15,85" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const DohertyThresholdIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="50" r="10" fill="#f5f5dc" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="#f5f5dc" strokeWidth="2" opacity="0.7" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="#f5f5dc" strokeWidth="2" opacity="0.5" />
  </svg>
);

export const FittsLawIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="50" cy="50" r="5" fill="#f5f5dc" />
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
    <rect x="38" y="38" width="24" height="24" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const JakobsLawIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <rect x="20" y="20" width="60" height="60" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <rect x="30" y="30" width="40" height="40" fill="none" stroke="#f5f5dc" strokeWidth="2" />
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
    <polygon points="20,70 50,20 80,70" fill="#f5f5dc" stroke="#f5f5dc" strokeWidth="1" />
  </svg>
);

// Mental Model Icons
export const GeneralThinkingIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="50" r="20" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="50" y1="20" x2="50" y2="35" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="50" y1="65" x2="50" y2="80" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="20" y1="50" x2="35" y2="50" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="65" y1="50" x2="80" y2="50" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const PhysicsIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="50" r="8" fill="#f5f5dc" />
    <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#f5f5dc" strokeWidth="2" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#f5f5dc" strokeWidth="2" transform="rotate(-45 50 50)" />
  </svg>
);

export const SystemsIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="50" r="15" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="#f5f5dc" strokeWidth="2" strokeDasharray="5,5" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#f5f5dc" strokeWidth="2" strokeDasharray="10,10" />
  </svg>
);

export const NumeracyIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <text x="30" y="60" fill="#f5f5dc" fontSize="35">∑</text>
    <text x="55" y="40" fill="#f5f5dc" fontSize="20">∞</text>
  </svg>
);

export const MicroeconomicsIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <path d="M20 80 Q 50 20 80 80" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <path d="M20 20 Q 50 80 80 20" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const MilitaryIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polygon points="50,20 80,80 20,80" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="50" cy="50" r="10" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const HumanNatureIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="40" r="15" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <path d="M30 70 Q 50 90 70 70" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

// Framework Icons
export const StrategyIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polygon points="50,20 20,50 50,80 80,50" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="50" y1="35" x2="50" y2="65" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="35" y1="50" x2="65" y2="50" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const PrioritizationIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <line x1="25" y1="35" x2="75" y2="35" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="25" y1="50" x2="55" y2="50" stroke="#f5f5dc" strokeWidth="2" opacity="0.7" />
    <line x1="25" y1="65" x2="35" y2="65" stroke="#f5f5dc" strokeWidth="2" opacity="0.4" />
  </svg>
);

export const DiscoveryIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="45" cy="45" r="25" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="65" y1="65" x2="80" y2="80" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const DeliveryIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polyline points="20,50 50,20 80,50" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <polyline points="20,80 50,50 80,80" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const GrowthIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <path d="M20 80 L40 60 L60 70 L80 30" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="80" cy="30" r="5" fill="#f5f5dc" />
  </svg>
);

export const StakeholderIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="35" r="15" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="30" cy="70" r="10" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="70" cy="70" r="10" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="50" y1="50" x2="30" y2="70" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="50" y1="50" x2="70" y2="70" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const PeakEndRuleIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <path d="M20 80 L50 20 L80 80" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="20" y1="80" x2="80" y2="80" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const ValidationIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polyline points="30,50 45,65 70,35" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const DivergenceConvergenceIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <path d="M30 80 L50 20 L70 80" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const TechnicalDebtIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <rect x="30" y="30" width="40" height="40" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="35" y1="50" x2="65" y2="50" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const CustomerRetentionIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="40" r="15" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <path d="M35 70 Q50 85 65 70" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const FeedbackLoopsIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <path d="M70 50 A20 20 0 1 1 50 30" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <polyline points="50,20 50,30 60,30" stroke="#f5f5dc" strokeWidth="2" fill="none" />
  </svg>
);

export const BrooksLawIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="50" r="10" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="75" cy="50" r="8" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <circle cx="25" cy="50" r="8" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <line x1="50" y1="35" x2="50" y2="65" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const IronTriangleIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <polygon points="50,20 20,80 80,80" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);

export const EarlyTestingIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <circle cx="50" cy="50" r="30" fill="none" stroke="#f5f5dc" strokeWidth="2" />
    <polyline points="50,35 50,50 65,65" fill="none" stroke="#f5f5dc" strokeWidth="2" />
  </svg>
);
