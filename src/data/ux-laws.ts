import {
  AestheticUsabilityIcon,
  DohertyThresholdIcon,
  FittsLawIcon,
  HicksLawIcon,
  JakobsLawIcon,
  LawOfCommonRegionIcon,
  LawOfProximityIcon,
  ParkinsonLawIcon,
  PeakEndRuleIcon,
  ValidationIcon,
  DivergenceConvergenceIcon,
  TechnicalDebtIcon,
  CustomerRetentionIcon,
  FeedbackLoopsIcon,
  BrooksLawIcon,
  IronTriangleIcon,
  EarlyTestingIcon,
} from "@/components/icons";

export const uxLaws = [
  {
    id: "peak-end-rule",
    title: "Peak-End Rule",
    description: "Users' recollection of their experience is heavily influenced by the most intense point and the end of the experience, which should be considered when evaluating feedback.",
    bgColor: "bg-red-900",
    category: "discovery",
    icon: PeakEndRuleIcon,
  },
  {
    id: "law-of-validation",
    title: "Law of Validation",
    description: "Assumptions must be validated with real user data to avoid building the wrong product.",
    bgColor: "bg-indigo-900",
    category: "discovery",
    icon: ValidationIcon,
  },
  {
    id: "law-of-divergence-and-convergence",
    title: "Law of Divergence and Convergence",
    description: "Effective discovery involves exploring a wide range of ideas (divergence) and then selecting the most promising ones (convergence).",
    bgColor: "bg-pink-900",
    category: "discovery",
    icon: DivergenceConvergenceIcon,
  },
  {
    id: "law-of-technical-debt",
    title: "Law of Technical Debt",
    description: "Unaddressed technical debt accumulates interest, making future changes more costly and time-consuming.",
    bgColor: "bg-teal-900",
    category: "operations",
    icon: TechnicalDebtIcon,
  },
  {
    id: "law-of-customer-retention",
    title: "Law of Customer Retention",
    description: "Retaining existing customers is more cost-effective than acquiring new ones, so operations should focus on customer satisfaction and loyalty.",
    bgColor: "bg-cyan-900",
    category: "operations",
    icon: CustomerRetentionIcon,
  },
  {
    id: "law-of-feedback-loops",
    title: "Law of Feedback Loops",
    description: "Short feedback loops enable faster learning and improvement in product operations.",
    bgColor: "bg-lime-900",
    category: "operations",
    icon: FeedbackLoopsIcon,
  },
  {
    id: "brooks-law",
    title: "Brooks's Law",
    description: "Adding more resources to a late project will delay it further due to increased communication overhead.",
    bgColor: "bg-amber-900",
    category: "delivery",
    icon: BrooksLawIcon,
  },
  {
    id: "iron-triangle-law",
    title: "Iron Triangle Law",
    description: "In product delivery, you can fix two of the three constraints—scope, time, and cost—but the third must be flexible.",
    bgColor: "bg-fuchsia-900",
    category: "delivery",
    icon: IronTriangleIcon,
  },
  {
    id: "law-of-early-testing",
    title: "Law of Early Testing",
    description: "Defects found early in the development process are cheaper to fix than those found later.",
    bgColor: "bg-emerald-900",
    category: "delivery",
    icon: EarlyTestingIcon,
  },
  {
    id: "aesthetic-usability-effect",
    title: "Aesthetic-Usability Effect",
    description:
      "Users often perceive aesthetically pleasing design as design that's more usable.",
    bgColor: "bg-blue-900",
    category: "ux",
    icon: AestheticUsabilityIcon,
  },
  {
    id: "doherty-threshold",
    title: "Doherty Threshold",
    description:
      "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
    bgColor: "bg-purple-900",
    category: "ux",
    icon: DohertyThresholdIcon,
  },
  {
    id: "fitts-law",
    title: "Fitt's Law",
    description:
      "The time to acquire a target is a function of the distance to and size of the target.",
    bgColor: "bg-green-900",
    category: "ux",
    icon: FittsLawIcon,
  },
  {
    id: "hicks-law",
    title: "Hick's Law",
    description:
      "The time it takes to make a decision increases with the number and complexity of choices.",
    bgColor: "bg-blue-800",
    category: "ux",
    icon: HicksLawIcon,
  },
  {
    id: "jakobs-law",
    title: "Jakob's Law",
    description:
      "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
    bgColor: "bg-yellow-800",
    category: "ux",
    icon: JakobsLawIcon,
  },
  {
    id: "law-of-common-region",
    title: "Law of Common Region",
    description:
      "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
    bgColor: "bg-green-800",
    category: "ux",
    icon: LawOfCommonRegionIcon,
  },
  {
    id: "law-of-proximity",
    title: "Law of Proximity",
    description:
      "Objects that are near, or proximate to each other, tend to be grouped together.",
    bgColor: "bg-orange-700",
    category: "ux",
    icon: LawOfProximityIcon,
  },
  {
    id: "parkinsons-law",
    title: "Parkinson's Law",
    description:
      "Any task will inflate until all of the available time is spent.",
    bgColor: "bg-yellow-900",
    category: "delivery",
    icon: ParkinsonLawIcon,
  },
];

export const getFilteredLaws = (category: string) => {
  if (category === "all") {
    return uxLaws;
  }
  return uxLaws.filter((law) => law.category === category);
};
