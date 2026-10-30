import type { ContentDetail } from "./types";

export const frameworkDetails: Record<string, ContentDetail> = {
  "power-interest-grid": {
    keyPoints: [
      "Position on the grid sets engagement intensity, not a stakeholder's real importance.",
      "High-interest, low-power groups are often your best source of early warning.",
      "Positions shift, so redraw the grid whenever the project changes phase.",
      "Eden and Ackermann's version asks how to move people, not just manage them.",
    ],
    details: [
      "The grid is usually credited to Aubrey Mendelow, whose work dates from 1981 and was popularized in the early 1990s. It sorts stakeholders on two axes and prescribes a stance for each quadrant: manage closely, keep satisfied, keep informed, or monitor. Its real use is rationing attention, since a product manager cannot run a deep relationship with everyone who has an opinion.",
      "The common version stops at classification, which is its weakness. Colin Eden and Fran Ackermann relabeled the quadrants players, subjects, context setters, and crowd, and changed the question from who to manage to how to shift them. Subjects can be organized into players. Context setters can be given a reason to care. The map becomes a plan for moving people, not a static picture.",
      "Treat low power as a temporary condition. When Unity announced a per-install fee in 2023, individual game developers looked like subjects, yet their collective backlash forced a public reversal within about ten days. Interest is also easy to misread: a quiet executive may simply not know your project threatens their budget. Check the map against real events, not just the org chart.",
    ],
    applications: [
      { title: "Launch communications", body: "Give legal and finance brief, decision-ready updates, and give support and sales early detail, since each quadrant needs a different dose of information." },
      { title: "Platform changes", body: "Reddit's 2023 API pricing turned moderators and app developers, apparently low-power groups, into a coordinated protest that darkened thousands of subreddits." },
      { title: "Executive mapping", body: "Find the one sponsor who could kill the project but has not noticed it yet. A short early briefing is far cheaper than a late veto." },
      { title: "API retirement", body: "Map integrators by revenue and dependence, then give the top partners direct migration help and the long tail excellent documentation." },
      { title: "Public infrastructure", body: "Residents along a proposed rail line have high interest and little formal power until they organize, at which point they can delay a project for years.", realWorld: true },
    ],
  },

  "raci-matrix": {
    keyPoints: [
      "Exactly one person is Accountable for each decision or task.",
      "Responsible people do the work; the Accountable person answers for the outcome.",
      "A row full of Cs is a diagnosis of slow decisions.",
      "The matrix is most valuable as the conversation that exposes disagreement.",
      "Apply it to ambiguous, recurring handoffs rather than to every task.",
    ],
    details: [
      "RACI emerged from mid-twentieth-century management practice and spread through project management. Each row is a task or decision, each column a role, and every cell is marked Responsible, Accountable, Consulted, or Informed. The central rule is exactly one A per row. Two accountable people means nobody is, because each can reasonably assume the other will make the call.",
      "Read the finished matrix like a diagnostic. A person with many As may be a bottleneck. A row with no R will not get done. A row with six Cs is a decision that will take weeks, because each consultation is a two-way conversation and a potential veto. Moving someone from Consulted to Informed is often the cheapest speedup an organization can make.",
      "The common failure is treating it as documentation. A matrix filled in by one manager and filed away changes nothing, while one built together surfaces disagreements about ownership that have caused friction for months. Keep it to the few ambiguous, high-stakes activities where handoffs actually fail. Intuit's DACI and Bain's RAPID are variants tuned specifically for decisions.",
    ],
    applications: [
      { title: "Launch checklists", body: "For each launch gate, name one accountable owner across product, engineering, marketing, and support, so nothing falls into a shared assumption." },
      { title: "Incident response", body: "Predefine who leads, who communicates, and who fixes. PagerDuty's public incident guide separates the Incident Commander from subject experts for this reason." },
      { title: "Directly Responsible Individuals", body: "Apple and GitLab name a DRI for each outcome. It keeps RACI's most important rule and drops almost everything else." },
      { title: "Cross-functional pricing", body: "When pricing spans product, finance, and sales, the matrix states who decides and who merely advises before the argument starts." },
      { title: "Surgical checklists", body: "The WHO Surgical Safety Checklist names who confirms each step aloud. A 2009 study across eight hospitals linked it to large falls in complications and deaths.", realWorld: true },
    ],
  },

  "influence-impact-grid": {
    keyPoints: [
      "Influence asks who can affect you; impact asks who you affect.",
      "High-impact, low-influence groups carry the largest unseen adoption and ethical risks.",
      "Influence is often informal and rarely matches the organization chart.",
      "Use it when a change reshapes people's work, not just their interests.",
    ],
    details: [
      "Project management guidance lists this grid alongside power-interest as a classification model. The axes look similar, but the distinction matters. Power-interest measures what a stakeholder wants and can do. Influence-impact adds the direction of the effect: how much your project will change this person's work or life, whether or not they have noticed or care yet.",
      "That change exposes a blind spot. Groups with high impact and low influence have little voice in planning and absorb most of the consequences: support agents handling a new workflow, warehouse staff using a redesigned scanner, customers whose data is repurposed. They rarely block a launch, which is why they get ignored, and then quietly decide its success through adoption or workarounds.",
      "The reverse quadrant deserves care too. High influence with low impact describes the senior executive or respected architect who has no stake in the outcome but can sway opinion with one comment. They need a short briefing, not deep engagement. Influence is also social as much as formal, so a veteran engineer may shape a decision more than their title suggests.",
    ],
    applications: [
      { title: "Internal tools", body: "Before replacing a CRM, shadow the sales operations staff who will use it daily. They hold little influence, take all the impact, and determine adoption." },
      { title: "Platform policy", body: "Apple's App Tracking Transparency shows the asymmetry: advertisers faced huge impact with no say, and Meta estimated a $10 billion revenue hit for 2022." },
      { title: "Automation rollouts", body: "When AI takes over part of a support queue, agents are the high-impact group. Design with them, or they will route around the tool." },
      { title: "Pricing changes", body: "Long-tail customers have little individual influence, yet a change can hit them hardest. Segment by impact and give them notice and a migration path." },
      { title: "The Cross Bronx Expressway", body: "Robert Moses drove the highway through East Tremont, displacing residents who had little say. It remains the textbook case of high impact with low influence.", realWorld: true },
    ],
  },

  "stakeholder-onion-diagram": {
    keyPoints: [
      "Layers describe relationship to the system, not how important someone is.",
      "Mapping roles rather than people reveals who everyone forgot to ask.",
      "The outer layers hide regulators, negative stakeholders, and hostile actors.",
      "The core is the product itself, surrounded by those who operate it.",
    ],
    details: [
      "The onion model is associated with requirements researcher Ian Alexander, who published a stakeholder taxonomy in the mid-2000s. It places the product at the center and rings outward through the system that operates it, the containing business that benefits from it, and the wider environment. It answers a different question from a two-by-two grid: who exists at all, and how are they connected?",
      "Its best feature is forcing a search for roles. Teams list users and buyers readily, then forget the people who install, maintain, and support the product, or who consume its output without touching it. Alexander's wider ring goes further, including regulators, financial and political beneficiaries, negative stakeholders harmed by the system, and threat agents who actively want it to fail.",
      "Thinking this way changes requirements. A payments product does not just serve a shopper. It serves a fraud analyst, a compliance officer, and a bank partner, and it must defend against an attacker who is, formally, also a stakeholder. If you cannot name who sits on each ring, you have probably found a requirement nobody has written down yet.",
    ],
    applications: [
      { title: "Discovery kickoff", body: "Draw the rings in the first week of a project and ask who is missing from each one. Absent roles usually become late surprises." },
      { title: "Fintech compliance", body: "A sponsor bank and a regulator sit rings away from the user, yet either can halt a launch. Involve them before designing the flow." },
      { title: "Abuse and safety", body: "Treating spammers and fraudsters as stakeholders prompts rate limits, verification, and moderation tools before launch rather than after an incident." },
      { title: "Operations staff", body: "On-call engineers and support agents rarely appear in a PRD. Naming them turns logging, admin tools, and runbooks into real requirements." },
      { title: "Airport terminals", body: "A terminal serves passengers, but airlines, security, baggage staff, retailers, regulators, and neighbors under the flight path all shape what gets built.", realWorld: true },
    ],
  },

  "stakeholder-engagement-matrix": {
    keyPoints: [
      "Compare where each stakeholder is with where you need them.",
      "The gap between current and desired engagement defines the plan.",
      "Not everyone needs to lead; neutral is often the right target.",
      "Moving someone one level at a time beats demanding instant advocacy.",
    ],
    details: [
      "The matrix comes from the Project Management Institute's PMBOK Guide. Each stakeholder is rated on five levels: unaware, resistant, neutral, supportive, and leading. C marks where they are today and D marks where you need them to be. That simple pairing turns a vague feeling about support into a visible set of gaps, which can then be prioritized and assigned.",
      "The important judgment is in the D. Teams instinctively want everyone supportive, which wastes effort. A legal reviewer only needs to be neutral and informed, while a sales leader rolling out a new package may need to lead. Setting targets deliberately means spending relationship capital only where the plan depends on it, and accepting lukewarm support everywhere else.",
      "Gaps also need different tactics. Unaware people need awareness, while resistant people usually have a reason worth hearing: a past failure, a threatened budget, or a real risk you have not seen. Arguing louder rarely works. Ask what would have to be true for them to reach neutral, and treat the answer as input. Resistance is frequently unpriced information.",
    ],
    applications: [
      { title: "Platform migrations", body: "Rate each dependent team on moving to a new service. Moving two resistant teams to neutral is often worth more than a dozen polite endorsements." },
      { title: "Enterprise sales", body: "Account teams map buyers the same way: the economic buyer must lead, legal must be neutral, and any blocker's objection must be understood before procurement." },
      { title: "AI adoption", body: "Track managers' engagement with new AI tooling before rollout. A team lead who stays resistant can quietly cancel a company-wide mandate." },
      { title: "Security reviews", body: "Bring security from unaware to neutral during design, rather than meeting them as resistant in the final week before launch." },
      { title: "Political campaigns", body: "Field teams rate voters from strong opponent to strong supporter, then spend on persuasion or turnout according to the gap instead of trying to convert everyone.", realWorld: true },
    ],
  },

  "product-vision-canvas": {
    keyPoints: [
      "A vision describes the change you want, not the features you'll build.",
      "Vision stays stable for years, while strategy and roadmap keep changing.",
      "A good canvas fits on one page and provokes useful disagreement.",
      "If no decision would change because of it, it is decoration.",
    ],
    details: [
      "One-page vision tools draw on Geoffrey Moore's positioning template from Crossing the Chasm, and are best known through Roman Pichler's Product Vision Board. The canvas asks for a vision statement, target group, needs, the product itself, and business goals. Forcing all of those onto one page exposes gaps, such as a clear product with no clearly defined customer.",
      "The most useful distinction is between levels of change. Vision is the durable destination. Strategy is the current bet for getting there, and the roadmap is what you will do next. Teams often mix them, which produces visions that read as feature lists and go stale after a quarter. A strong vision survives a complete change of solution.",
      "Test a vision by what it rules out. Amazon's Kindle goal of every book ever printed, in any language, available in under 60 seconds set a measurable bar, and it made publisher deals and wireless delivery obvious priorities. Compare that with becoming the leading platform for customers. If a competitor could sign the same sentence, it is not yet doing any strategic work.",
    ],
    applications: [
      { title: "Leadership alignment", body: "Have each leader fill in the canvas separately, then compare the results. The differences are your real strategic disagreements." },
      { title: "Press release first", body: "Amazon writes a future press release and FAQ before building, another way of forcing a vision into language customers would recognize." },
      { title: "Saying no", body: "Use the target group box to reject requests. A strong feature for the wrong audience is a distraction, however good it sounds." },
      { title: "New team onboarding", body: "Give new hires the canvas first. If they can explain why a recent decision followed from it, the vision is working." },
      { title: "The Moon goal", body: "Kennedy's 1961 goal of landing a man on the Moon and returning him safely within the decade told thousands of contractors exactly what mattered.", realWorld: true },
    ],
  },

  "business-model-canvas": {
    keyPoints: [
      "Nine building blocks describe how a business creates, delivers, and captures value.",
      "The relationships between blocks matter more than any single box.",
      "A business model can be the innovation even when the product isn't.",
      "Changing one block, like pricing, usually forces changes in several others.",
    ],
    details: [
      "Alexander Osterwalder developed the canvas from his doctoral research, and Business Model Generation, written with Yves Pigneur, popularized it in 2010. Its nine blocks cover segments, value propositions, channels, relationships, revenue, resources, activities, partnerships, and costs. Unlike a long business plan, it lets a team see and redraw an entire model in one session.",
      "Reading it as nine separate boxes misses the point. The value is in the connections: whether this channel can actually reach this segment, and whether this revenue model covers this cost structure. Inconsistencies appear quickly when the boxes sit side by side. A self-serve channel paired with enterprise buyers who need security reviews will fail regardless of how good the product is.",
      "Business model change can be more powerful than product change. Xerox could not sell its 914 copier at a price customers would accept, so it leased the machines and charged per copy, building a giant company from the same hardware. Adobe's 2013 move from boxed licenses to Creative Cloud changed its revenue, customer relationships, and release cadence all at once.",
    ],
    applications: [
      { title: "Open-core software", body: "MongoDB gives away a database and earns from hosted services. The canvas shows why licensing, channels, and cost structure have to change together." },
      { title: "Two-sided platforms", body: "Draw a separate segment and value proposition for each side. Shopify's merchants and app developers need different things, and its model depends on both." },
      { title: "AI product margins", body: "AI features add real per-use inference costs, so flat-rate plans built for traditional SaaS may break. The canvas exposes that clash between revenue and cost." },
      { title: "Competitive analysis", body: "Fill in a canvas for a rival. It often shows that a cheap competitor earns money elsewhere, which changes how you should respond." },
      { title: "Nespresso", body: "The machine is the entry point, and capsule sales provide recurring revenue, protected by a direct club relationship with each customer.", realWorld: true },
    ],
  },

  "lean-canvas": {
    keyPoints: [
      "Lean Canvas swaps operational boxes for the biggest startup risks.",
      "Start with the problem, because most founders fall for their solution.",
      "An unfair advantage is something competitors cannot easily copy or buy.",
      "Treat every box as an untested hypothesis that you revise often.",
    ],
    details: [
      "Ash Maurya adapted the Business Model Canvas around 2010 for early-stage ventures, later explaining it in Running Lean. He replaced key partners, key activities, key resources, and customer relationships with problem, solution, key metrics, and unfair advantage. The logic is that an unproven startup is not yet optimizing operations. Its main risk is building something nobody needs.",
      "The canvas is meant to be completed quickly, in about 20 minutes, and imperfectly. Blanks are useful because they mark what you do not know. Maurya recommends writing canvases for different customer segments, since each can imply a different problem, channel, and price. One idea often hides several business models, and comparing them beats polishing the first that came to mind.",
      "The hardest box is unfair advantage. Claims like passion, a good team, or first-mover status do not qualify, because each can be copied or bought. Real examples are proprietary data, network effects, regulatory licenses, or insider access to a community. An empty box is acceptable at the start. It simply tells you to find an advantage before a funded rival arrives.",
    ],
    applications: [
      { title: "Riskiest assumption", body: "After filling in the canvas, mark the box most likely to kill the business. That box, not the product backlog, sets next week's work." },
      { title: "Internal ventures", body: "Corporate innovation teams can pitch a new product line on one page instead of 40, which makes it far easier to fund or kill." },
      { title: "Comparing pivots", body: "Draw three possible pivots on the same template. Differences in channel and unfair advantage show which ones are really viable." },
      { title: "Customer interviews", body: "Turn the problem box into interview questions, have real customers rank the top three problems, then rewrite the canvas." },
      { title: "Opening a cafe", body: "Before signing a lease, one page forces answers about customers, channels, costs, and break-even that enthusiasm alone will not provide.", realWorld: true },
    ],
  },

  "swot-analysis": {
    keyPoints: [
      "A SWOT lists factors; it does not decide anything on its own.",
      "One study found companies never used SWOT outputs in later strategy.",
      "Strengths only count relative to competitors and a specific market.",
      "The TOWS matrix turns the four lists into actual strategic options.",
    ],
    details: [
      "SWOT emerged in business policy teaching during the 1960s, often linked to Harvard's Learned, Christensen, Andrews, and Guth, and also credited in some accounts to Albert Humphrey at Stanford Research Institute. Its origin is murky. Its appeal is not: it is quick, requires no data, and gives a group a structure for discussing internal capabilities and external conditions.",
      "Its reputation among strategists is poor for good reasons. Terry Hill and Roy Westbrook's 1997 paper, SWOT Analysis: It's Time for a Product Recall, reviewed 50 companies and found that those using it never carried the output into later strategy work. Lists tend to be long, vague, and unweighted. Good brand awareness goes into one box and the meeting ends.",
      "The remedy is to force connections. Heinz Weihrich's TOWS matrix pairs the lists: which strengths capture which opportunities, and which weaknesses expose you to which threats. Each pairing produces an option you can act on. Be specific and comparative too. A strength every rival shares is table stakes, and one fact can be a strength or a threat depending on your strategy.",
    ],
    applications: [
      { title: "Annual planning", body: "Limit each quadrant to three evidence-backed items, write a TOWS option for each top pairing, and feed those options into the roadmap." },
      { title: "Reading incumbents", body: "A Kodak engineer built a digital camera in 1975, yet film profits made it look like a threat. One fact can sit in two boxes." },
      { title: "Competitive response", body: "Run a SWOT from a rival's point of view. It forces you to see your product as the threat on someone else's chart." },
      { title: "AI strategy", body: "Proprietary data may be a strength, while fast-moving models are both opportunity and threat. Naming both stops AI being treated as a feature request." },
      { title: "Career decisions", body: "Applied to a job move, the TOWS step is what makes it useful: match a specific skill to a specific opening rather than listing virtues.", realWorld: true },
    ],
  },

  "blue-ocean-strategy": {
    keyPoints: [
      "Compete by creating new demand rather than fighting for existing customers.",
      "Value innovation pursues differentiation and low cost at the same time.",
      "The strategy canvas shows where a whole industry competes the same way.",
      "Study noncustomers, because they reveal why the market stays small.",
      "Success stories are selected after the fact, so treat them with caution.",
    ],
    details: [
      "W. Chan Kim and Renée Mauborgne introduced the idea in a 2004 Harvard Business Review article and a 2005 book. Their study of 108 business launches found 86% were line extensions in existing markets, producing 62% of revenue and 39% of profit. The 14% aimed at creating new markets produced 38% of revenue and 61% of profit.",
      "Two tools do the work. The strategy canvas plots how an industry competes across its key factors, and usually shows everyone on the same curve. The four actions framework then asks what to eliminate, reduce, raise, and create. Cirque du Soleil dropped expensive animals and star performers and added theatrical storytelling, drawing adults who had stopped attending circuses altogether.",
      "Treat it as a lens rather than a recipe. The examples are chosen after success, which invites survivorship bias, and uncontested markets do not stay that way for long. The durable insight concerns noncustomers. Asking who refuses your category and why often reveals that the limit on your market is a shared industry assumption, not a lack of demand.",
    ],
    applications: [
      { title: "Design for non-designers", body: "Canva ignored professional tool depth and targeted people who would never have opened Adobe's products, expanding the market rather than splitting it." },
      { title: "No-code automation", body: "Zapier turned integration from an engineering project into something operations staff do themselves, reaching people who would never buy an integration platform." },
      { title: "Feature audits", body: "Run the four actions on your own product. Eliminating something the industry assumes is required is often the fastest route to simplicity." },
      { title: "Gaming's new audience", body: "Nintendo's Wii gave up the graphics race and used motion controls to bring in families and casual players, a textbook shift toward noncustomers." },
      { title: "Yellow Tail wine", body: "Casella Wines stripped out wine jargon and complexity, making a simple, approachable bottle that won over American beer and cocktail drinkers.", realWorld: true },
    ],
  },

  "okrs": {
    keyPoints: [
      "Objectives state the ambition; key results prove whether it happened.",
      "Key results should measure outcomes, not list tasks or project milestones.",
      "Stretch goals work only when missing them is safe.",
      "Separate OKRs from compensation, or people will simply lower their targets.",
      "Every metric target invites gaming, so pair it with a guardrail.",
    ],
    details: [
      "Andy Grove developed OKRs at Intel by adapting Peter Drucker's management by objectives, adding shorter cycles and measurable results. John Doerr, who learned them at Intel, introduced them to Google's founders in 1999 and later popularized them in Measure What Matters. The format is plain: an inspiring objective with a few numbers that would show, without argument, that it was achieved.",
      "The key distinction is between output and outcome. Launch the new onboarding is a task; raise week-one activation from 30% to 40% is a result, and it leaves the team free to find the method. Stretch matters too. Doerr reports Chrome aiming for 50 million weekly users in 2009, reaching 38 million, then hitting its 111 million goal in 2010.",
      "The method's failures are predictable. Cascading every goal down the hierarchy turns it into slow bureaucracy, and tying results to pay teaches people to set easy targets. Worse, a single number can distort behavior: research published as Goals Gone Wild links narrow targets to cheating and risk-taking. Pair each key result with a guardrail, and review progress often enough to change course.",
    ],
    applications: [
      { title: "Team objectives", body: "Give a cross-functional team one objective and let it choose the work. Marty Cagan's empowered-team model depends on exactly this." },
      { title: "Guardrail metrics", body: "If a key result is to increase sign-ups, add one on activation. Otherwise a team can hit the number with low-quality traffic." },
      { title: "YouTube's watch-time goal", body: "YouTube set a goal of one billion daily watch hours, which focused the company and also drew lasting criticism of what maximizing watch time rewards." },
      { title: "Startup focus", body: "A 20-person company rarely needs OKRs at every level. One company objective per quarter with team key results gives focus without the overhead." },
      { title: "Operation Crush", body: "In 1980, Intel rallied its whole company around 2,000 design wins against Motorola. Doerr reports it beat that target, and one win was the IBM PC.", realWorld: true },
    ],
  },

  "rice-scoring": {
    keyPoints: [
      "RICE multiplies Reach, Impact, and Confidence, then divides by Effort.",
      "Reach forces a real estimate of users affected per time period.",
      "Confidence explicitly penalizes exciting ideas that have little supporting evidence.",
      "The score is a conversation starter, not a verdict on priorities.",
      "Compare similar bets; it handles strategic and foundation work poorly.",
    ],
    details: [
      "Sean McBride and the product team at Intercom created RICE to replace debates in which favorite ideas won. Reach counts people or events per period, Impact uses a fixed scale from 0.25 to 3, Confidence is 100%, 80%, or 50%, and Effort is in person-months. An idea reaching 2,000 users, with impact 1, 80% confidence, and 2 months of work, scores 800.",
      "The value lies less in the final number than in the forced estimates. Writing down a reach figure exposes how few people a loud request touches, while the confidence term makes people admit they are guessing. Two PMs who disagree on a score can usually find the exact input where they diverge, turning a matter of opinion into a question research could answer.",
      "Its blind spots are structural. RICE favors small, certain improvements, because large bets carry low confidence and high effort. Infrastructure, compliance, and new market entry often score poorly while being essential. Inputs can also be gamed by anyone with a preference. Use it within a category of comparable work, and set a separate budget for strategic bets before the scoring begins.",
    ],
    applications: [
      { title: "Backlog triage", body: "Score the top 20 candidates in a shared spreadsheet and review the outliers together. The surprises are more useful than the ranking." },
      { title: "Reach from analytics", body: "Pull reach from event data rather than guessing. How many users visited the settings page last quarter is a query, not an opinion." },
      { title: "Capacity buckets", body: "Split the roadmap into growth, quality, and strategic buckets, then use RICE inside each one so long-term work never competes directly with quick wins." },
      { title: "Stakeholder requests", body: "Give sales a RICE template for feature requests. Asking them to estimate reach across accounts often does the prioritizing for you." },
      { title: "City budgets", body: "A council choosing between projects can estimate residents served, size of benefit, certainty, and cost. The same formula applies outside software.", realWorld: true },
    ],
  },

  "moscow-method": {
    keyPoints: [
      "Must means the release fails without it, not that it matters.",
      "Won't-have items are agreed exclusions that protect the timebox from scope creep.",
      "DSDM advises keeping Must Haves to about 60% of effort.",
      "Could-haves form the contingency that lets a fixed deadline hold.",
    ],
    details: [
      "Dai Clegg created MoSCoW at Oracle in 1994 for time-boxed delivery, and it became central to the DSDM agile framework. The capitals spell Must, Should, Could, and Won't, with vowels added for pronunciation. Its original purpose is often lost. It was not a way to rank features by importance, but a way to decide what gets dropped as a fixed deadline approaches.",
      "The definition of Must is strict: without it the release is illegal, unsafe, or not worth shipping, and you would cancel rather than launch. A useful test is to ask what happens if this item is missing, and whether a workaround exists. If one does, even a painful one, the item is a Should. Most Musts fail this test on inspection.",
      "DSDM recommends keeping Must Haves to around 60% of effort, with Could Haves at about 20% as contingency. When stakeholders label everything a Must, that margin vanishes and the deadline stops being credible. The Won't category deserves equal respect: writing down what is excluded from this timebox prevents repeated reargument and shows stakeholders their request was heard.",
    ],
    applications: [
      { title: "MVP definition", body: "List what a first release needs for a payment to complete. Refunds may be a Should and saved cards a Could, which makes launch scope clear." },
      { title: "Compliance deadlines", body: "GDPR or accessibility obligations are true Musts because the alternative is not shipping. Use them to anchor what the category means." },
      { title: "Negotiating with sales", body: "Ask for the business consequence if a feature slips. A deal at risk may justify a Should, but rarely a Must across a whole release." },
      { title: "Release cut lines", body: "Order Coulds by value before the sprint begins. When time runs short, the team can drop them without calling a meeting." },
      { title: "Wedding planning", body: "A venue and an officiant are Musts, a band is a Should, and a photo booth is a Could. Naming them in advance stops budget creep.", realWorld: true },
    ],
  },

  "value-effort-matrix": {
    keyPoints: [
      "Four quadrants separate quick wins, big bets, fill-ins, and time sinks.",
      "Both axes are estimates, and teams systematically underestimate effort.",
      "Ideas drift toward the best quadrant when their owners do the scoring.",
      "A backlog made only of quick wins produces no strategic progress.",
    ],
    details: [
      "This two-by-two has no clear single inventor and appears in quality management and consulting as the action priority matrix. Plot each initiative by expected value and required effort, and you get quick wins to do now, big bets to plan deliberately, fill-ins to take when time allows, and time sinks to avoid. A team can do it on a whiteboard in under an hour.",
      "Its weakness is that both axes are forecasts, and the biases point one way. The planning fallacy, named by Daniel Kahneman and Amos Tversky, means effort is consistently underestimated, and value is usually a hopeful guess. A 2012 McKinsey and Oxford study found large IT projects ran 45% over budget while delivering 56% less value than predicted, which is this matrix's error at scale.",
      "Use relative placement, not false precision. Have people place items silently, then discuss the largest disagreements. Watch the portfolio as well: picking only quick wins feels productive while producing a scattered product and ongoing maintenance for each small addition. Reserve space for at least one big bet, because compounding advantages rarely come from easy work.",
    ],
    applications: [
      { title: "Sprint planning", body: "Pick a few quick wins for momentum alongside one larger item, instead of filling a sprint with whatever happens to be easiest." },
      { title: "Feature deprecation", body: "Plot existing features by usage value and maintenance effort. The time-sink quadrant is a ready-made list of candidates for removal." },
      { title: "UX research readouts", body: "Run it on the issues from a usability study. It turns a long report into a short, agreed action list." },
      { title: "Cross-team calibration", body: "Have engineers place effort and PMs place value separately, then overlay the two. Mismatches reveal hidden complexity." },
      { title: "Home repairs", body: "Fixing a dripping tap is a quick win and a loft conversion is a big bet. The frame works because household effort is easy to see.", realWorld: true },
    ],
  },

  "kano-model": {
    keyPoints: [
      "Satisfaction does not rise evenly with every feature you add.",
      "Must-be features only prevent dissatisfaction; they never create delight.",
      "Today's delighter becomes tomorrow's expectation as the market catches up.",
      "Asking about presence and absence separately reveals each feature's true category.",
    ],
    details: [
      "Noriaki Kano published the model in 1984, challenging the assumption that satisfaction rises in a straight line with quality. He sorted attributes into must-be, which are expected and only noticed when missing; performance, where more is better; and attractive, which delight because nobody expected them. Indifferent and reverse attributes complete the set.",
      "The survey method is the clever part. For each feature, Kano asks two questions: how would you feel if this were present, and how would you feel if it were absent? Combining both answers classifies the feature. That separates it from ordinary feature ranking, where must-haves can look unimportant simply because no customer thinks to request what they already assume.",
      "Its deepest insight is decay. Categories move as markets mature: dark mode delighted users once, and its absence now draws complaints. Free unlimited photo storage went the same way. A roadmap built only on must-bes and performance keeps you level, while only a steady supply of new delighters creates a reason to choose you. Each delight is a wasting asset.",
    ],
    applications: [
      { title: "Feature surveys", body: "Run the paired Kano questions on 10 to 20 candidates with one specific segment, since one group's delighter can be another's indifference." },
      { title: "Protecting the baseline", body: "Fast, reliable login earns no praise, but if it fails, no delighter will save you. Keep must-bes funded even when they look boring." },
      { title: "AI features", body: "Forced AI assistants can land as reverse attributes for some users. Let people opt out, and measure who is annoyed as well as who is impressed." },
      { title: "Competitive tracking", body: "Review categories every year. A rival's launch can turn your differentiator into table stakes overnight." },
      { title: "Hotels", body: "Clean sheets are must-be, faster check-in is performance, and a handwritten note is a delighter. Free Wi-Fi moved from delighter to expectation.", realWorld: true },
    ],
  },

  "ice-scoring": {
    keyPoints: [
      "ICE scores Impact, Confidence, and Ease, usually from 1 to 10.",
      "It is built for speed, so use it on cheap experiments.",
      "Three subjective scores multiply into one precise-looking, fragile number.",
      "Anchor Confidence to evidence, not to how the proposer feels.",
    ],
    details: [
      "Sean Ellis, who coined the term growth hacking, popularized ICE for ranking growth experiments. Each idea gets a score for how much it could move the target metric, how sure you are, and how easy it is to run. The scores are then multiplied or averaged. With no need for reach data or person-month estimates, a team can rank a long list quickly.",
      "That speed fits its original setting. In growth work, experiments are small and cheap, and a wrong ranking costs a week rather than a quarter, so the next result corrects the last guess. Applied to a year's roadmap, the same method is far riskier, because a quick gut-feel number can commit months of work with little feedback until it is too late.",
      "The main flaw is that identical ideas can score differently depending on who rates them and when. Itamar Gilad's Confidence Meter addresses this by tying confidence to evidence, from low scores for opinions and trends, through moderate scores for user interviews, to high scores for test results. An idea backed by an A/B test should outrank one backed by enthusiasm.",
    ],
    applications: [
      { title: "Growth backlog", body: "Score onboarding, email, and pricing page experiments weekly, run the top few, and feed each result back into the next round." },
      { title: "Evidence-based confidence", body: "Require a stated evidence type next to each Confidence score, so it cannot quietly inflate with excitement." },
      { title: "Early-stage teams", body: "Before there is enough traffic for reach estimates, ICE offers a lightweight way to order ideas. RICE can follow once data exists." },
      { title: "Marketing campaigns", body: "Rank channels or content ideas on one scale, so a team of three can commit to a plan in a single meeting." },
    ],
  },

  "jobs-to-be-done": {
    keyPoints: [
      "People hire products to make progress in a particular circumstance.",
      "Circumstance explains behavior better than demographics or product attributes.",
      "Your real competition includes workarounds, non-consumption, and unrelated products.",
      "Switching happens when push and pull outweigh anxiety and habit.",
    ],
    details: [
      "The idea runs from Theodore Levitt's remark that people want a quarter-inch hole, not a drill, through Clayton Christensen's work and Anthony Ulwick's outcome-driven innovation. Christensen's best-known story involves a fast-food chain that found morning commuters hired milkshakes to make a dull drive interesting. The competition was a banana or a bagel.",
      "Practitioners disagree on what a job is. Ulwick treats jobs as stable, functional processes measured with desired outcomes and surveys. Bob Moesta focuses on the story of how a person actually switched, using interviews about a recent purchase. One gives precision for optimizing a known market, and the other gives explanations for why demand appears in the first place.",
      "Moesta's four forces are the most practical piece. Push from the current situation and pull toward a new one must exceed anxiety about the new option and habit around the old. Teams pour effort into pull, in the form of features, while ignoring anxiety and habit. Often a migration tool or a money-back guarantee does more than another capability.",
    ],
    applications: [
      { title: "Switch interviews", body: "Interview people who bought in the last 90 days and reconstruct the timeline from first thought to purchase, while memories are still sharp and specific." },
      { title: "Repositioning", body: "Intercom has published its use of jobs thinking to decide what its messaging products are for, framing them around customer progress rather than rival checklists." },
      { title: "Competitor mapping", body: "List what users did before your product. Slack's real competition was email, meetings, and hallway chats, not only other chat apps." },
      { title: "Tailored onboarding", body: "Ask what someone came to do at sign-up, then shape the first session around that job instead of giving everyone the same tour." },
      { title: "Southern New Hampshire University", body: "SNHU rebuilt its online program around adults hiring a degree to move their lives forward, answering inquiries in minutes rather than weeks.", realWorld: true },
    ],
  },

  "design-thinking": {
    keyPoints: [
      "Design thinking pairs empathy for users with rapid, low-cost experimentation.",
      "The stages loop back on each other; they are not a linear recipe.",
      "It suits ambiguous problems far better than well-understood optimization work.",
      "Workshops without implementation power produce sticky notes, not change.",
    ],
    details: [
      "The intellectual roots run through Herbert Simon's The Sciences of the Artificial and Horst Rittel's wicked problems, with the term itself appearing in Peter Rowe's 1987 book. IDEO and Stanford's d.school turned it into a teachable practice, with five modes: empathize, define, ideate, prototype, and test. Tim Brown's 2008 Harvard Business Review article carried it into the boardroom.",
      "The best case is Doug Dietz at GE Healthcare. After watching a frightened child approach an MRI machine he had designed, he worked with children and museum staff to reframe scans as adventures, with pirate ships and jungle rooms. One children's hospital reported sedation falling from over 80% of patients to around a quarter, though GE cautions that results vary by site.",
      "The critique is also worth hearing. Designer Natasha Jen argued in 2017 that the movement reduced design to sticky notes and a process diagram, stripping away craft and critical evaluation. Workshops can feel like progress while changing nothing. The test is what happens next: whether real users saw a prototype, and whether the team with authority to ship was in the room.",
    ],
    applications: [
      { title: "Airbnb's early listings", body: "The founders flew to New York, met hosts, and found poor photos were holding back bookings. Taking better pictures themselves reportedly doubled weekly revenue." },
      { title: "Prototype before build", body: "Test a clickable prototype with five users within a week, which puts learning ahead of any engineering commitment." },
      { title: "Internal tooling", body: "Sit with support agents for a day and you will redesign the ticket view differently from anything a survey would suggest." },
      { title: "Reframing the brief", body: "Turn add a search filter into how might we help buyers decide faster. The wider statement opens up better solutions." },
      { title: "Keep the Change", body: "IDEO found people rounding up in their checkbooks for convenience. Bank of America turned that into a program saving the change from each debit purchase.", realWorld: true },
    ],
  },

  "double-diamond": {
    keyPoints: [
      "The first diamond finds the right problem; the second the right solution.",
      "Each diamond opens wide before narrowing to a decision.",
      "Most teams skip the first diamond and start from a solution.",
      "The process is iterative: delivery insights can send you back.",
    ],
    details: [
      "The British Design Council introduced the Double Diamond in the mid-2000s after studying how leading companies handled design. Its four phases are Discover, Define, Develop, and Deliver. The shape shows two rounds of divergence and convergence, with a clear problem statement at the waist between them. It gave a shared picture to work previously described in dozens of incompatible ways.",
      "Its most valuable claim is that problem definition is a distinct piece of work. Most product briefs arrive with the first diamond already skipped: build a dashboard is a solution presented as a problem. Going back to Discover can show that people do not want a dashboard at all, just an alert when a number changes. Work at the waist prevents solving the wrong thing well.",
      "The drawing has a known limitation: it looks linear and finished, while real work loops. The Design Council updated it in 2019 into a wider innovation framework, adding principles, methods, and culture around the diamonds. In software, delivery is also a source of discovery, because a live product teaches things no research can. Treat the diamonds as repeating, not as a one-time gate.",
    ],
    applications: [
      { title: "Government services", body: "The UK Government Digital Service runs discovery, alpha, beta, and live phases, requiring teams to understand user needs before building a service." },
      { title: "Problem statement gate", body: "Require a one-page problem definition, reviewed with engineering and design, before any solution sketching starts." },
      { title: "Scoping discovery", body: "Time-box the first diamond to two or three weeks, so that discovery does not drift into open-ended research." },
      { title: "Killing projects early", body: "The waist is a natural stopping point. If discovery shows the problem is small, ending there counts as a success." },
      { title: "A Better A&E", body: "A Design Council project found uncertainty was a key trigger for aggression in emergency departments, and responded with clear process information rather than more security.", realWorld: true },
    ],
  },

  "customer-development": {
    keyPoints: [
      "A startup searches for a business model rather than executing one.",
      "Founders themselves must talk to customers, because the hypotheses live with them.",
      "Ask about past behavior, since opinions about the future are unreliable.",
      "Failing to validate sends you back to discovery, as a pivot.",
    ],
    details: [
      "Steve Blank set out customer development in The Four Steps to the Epiphany in 2005. Its argument is that a startup is not a small version of a large company. A large company executes a known model, while a startup is searching for one, so traditional launch plans are a category error. The four steps are customer discovery, validation, creation, and company building.",
      "The first two steps do the searching. Discovery tests whether the problem exists and the solution matters, and validation tests whether a repeatable sales process exists, often through earlyvangelists who buy before the product is finished. If those tests fail, you return to discovery with a changed hypothesis. Eric Ries's lean startup built on this pivot loop.",
      "The method depends on interview quality, and Rob Fitzpatrick's The Mom Test explains why most fail: people are polite about ideas, so asking whether they would use something yields worthless compliments. Ask instead how they handled the problem last time, what it cost, and what they tried. Evidence comes as commitment: time, introductions, or money. Everything else is conversational noise.",
    ],
    applications: [
      { title: "Follow Me Home", body: "Intuit's Scott Cook built a practice of watching customers use Quicken at home, revealing problems that lab research would have missed." },
      { title: "Pre-sales", body: "Selling before building, with a letter of intent or a paid pilot, tests the hypothesis in a way no survey can." },
      { title: "Founder-led sales", body: "Keep founders selling until the pitch is repeatable. Hiring a sales team earlier hides whether the model works at all." },
      { title: "New markets in big firms", body: "An established company entering a new segment has a startup's problem. Treat it as a search, with its own metrics and tolerance for failure." },
      { title: "Restaurant pop-ups", body: "A chef testing a concept at a market stall before signing a lease is running customer development with real, paying customers.", realWorld: true },
    ],
  },

  "user-story-mapping": {
    keyPoints: [
      "A flat backlog loses the narrative of what users are doing.",
      "The backbone lays out user activities from left to right.",
      "Horizontal slices define releases that each deliver a complete outcome.",
      "The shared conversation is worth more than the resulting map.",
    ],
    details: [
      "Jeff Patton developed story mapping after growing frustrated with flat backlogs, describing it in a 2005 article and a 2014 book. A sorted list, he argued, is like a bag of leaf clippings: every item is real, yet you cannot see the tree. A map restores context by arranging work along the sequence of what a person actually does.",
      "The structure is simple. User activities run left to right in narrative order, forming the backbone, and detailed tasks and options hang below each step, with the most essential at the top. Drawing horizontal lines across the map produces release slices. Each slice must travel the whole journey, even thinly, so the first release lets someone finish the job.",
      "That thin first slice is often called a walking skeleton, a term from Alistair Cockburn. It exposes integration risk early and gives you something real to put in front of users. Teams building feature by feature tend to discover late that nothing works end to end. Mapping also forces a debate about what can be left out without breaking the story.",
    ],
    applications: [
      { title: "MVP scoping", body: "Map a booking flow end to end, then draw a line under the minimum at each step. Manual fulfillment may be fine, but a missing step is not." },
      { title: "Engineer alignment", body: "Build the map with engineers in the room. They spot dependencies and cheaper paths that a written spec would conceal." },
      { title: "Backlog recovery", body: "When a 300-item backlog has become unreadable, mapping it back to a user journey quickly reveals duplicates and gaps." },
      { title: "Onboarding teammates", body: "Keep the map on a shared board. New hires can see the product's story faster than they could by reading tickets." },
      { title: "Planning a trip", body: "Lay out the journey from leaving home to returning. Flights and a bed make a complete trip, while a perfect hotel with no way there does not.", realWorld: true },
    ],
  },

  "scrum": {
    keyPoints: [
      "Scrum is a lightweight framework built on empirical process control.",
      "Sprints limit risk by capping any plan's horizon at one month.",
      "The Product Owner owns value; Developers own how to deliver it.",
      "Most Scrum failures keep the ceremonies and lose inspection and adaptation.",
    ],
    details: [
      "The term comes from Hirotaka Takeuchi and Ikujiro Nonaka's 1986 HBR article, The New New Product Development Game, which compared strong product teams to a rugby scrum. Ken Schwaber and Jeff Sutherland formalized the framework and presented it in 1995. The Scrum Guide remains short, defining three accountabilities, five events, and three artifacts, and leaving the rest to the team.",
      "It rests on empirical process control: transparency, inspection, and adaptation. Complex work cannot be fully planned in advance, so each sprint produces a usable increment and a chance to change course. The 2011 guide replaced commitment with forecast, a small edit that matters, because treating sprint goals as promises pushes teams to pad estimates and hide problems.",
      "The failure mode is ceremony without empiricism. Martin Fowler named one version flaccid Scrum, where teams adopt the process but neglect technical practices and slow down as the code degrades. Another is the sprint as mini-waterfall, with a product owner acting as ticket clerk. If a retrospective never changes anything, or a review has no stakeholders, you are just holding meetings.",
    ],
    applications: [
      { title: "Reviews with customers", body: "Invite real users to the sprint review. Seeing working software is the fastest feedback a stakeholder can give." },
      { title: "Government rescue", body: "After costly failed attempts, the FBI brought its Sentinel case system in-house in 2010 and finished it with a small team working in short agile iterations." },
      { title: "Retrospective actions", body: "Carry one improvement item into the next sprint's backlog. Without that step, retrospectives turn into venting sessions." },
      { title: "Knowing when not to use it", body: "Support and operations work with unpredictable arrivals suits Kanban better. Sprint planning on interrupt-driven work produces fiction." },
      { title: "Family meetings", body: "Author Bruce Feiler described his family meeting weekly to ask what went well, what did not, and what to try next: a retrospective at the kitchen table.", realWorld: true },
    ],
  },

  "kanban": {
    keyPoints: [
      "Limiting work in progress improves flow more than pushing harder.",
      "Little's Law ties cycle time directly to how much is underway.",
      "Kanban starts from your current process and evolves it gradually.",
      "Visualizing work exposes queues, where most elapsed time actually goes.",
    ],
    details: [
      "Kanban began at Toyota, where Taiichi Ohno adapted a supermarket's replenishment logic into a pull system: cards authorized the next piece of work only when capacity existed. David Anderson brought it to software in the mid-2000s. At one Microsoft maintenance team, throughput reportedly more than tripled, from 17 to 56 requests a quarter, while the backlog shrank from 80 to under 10.",
      "The mathematics are plain. Little's Law states that average cycle time equals work in progress divided by throughput, so if throughput holds, doubling WIP doubles how long everything takes. In most teams, work spends far more time waiting than being worked on. Limiting WIP turns that hidden queue into visible pressure, and the slogan follows: stop starting, start finishing.",
      "Unlike Scrum, Kanban prescribes no roles or timeboxes and begins with what you do today. That makes it low-risk to adopt and easy to do badly, since a board with no WIP limits is only a to-do list. The limits are the mechanism, causing the discomfort that reveals a bottleneck. Measure cycle time and throughput, not how busy people look.",
    ],
    applications: [
      { title: "Support and SRE", body: "Unpredictable inbound work suits continuous flow better than sprints, with a WIP limit and an expedited lane for incidents." },
      { title: "Code review queues", body: "Add a Review column with a limit. When it fills, developers review instead of starting something new, which shortens delivery." },
      { title: "Forecasting", body: "Use historical cycle time to give probabilistic dates, such as 85% of items finish within nine days. It is more honest than story points." },
      { title: "Personal Kanban", body: "Cap yourself at three active tasks. Context switching is the same queueing problem at the level of one person." },
      { title: "Imperial Palace gardens", body: "David Anderson describes tokens handed to visitors at Tokyo's East Gardens: when tokens run out, entry pauses. Crowding is limited by a pull system.", realWorld: true },
    ],
  },

  "agile-product-management": {
    keyPoints: [
      "Agile values responding to change, not the absence of a plan.",
      "Product management decides what is valuable; agile delivery alone cannot answer that.",
      "A team shipping quickly can still be a feature factory.",
      "Outcomes, small bets, and continuous discovery define the approach.",
    ],
    details: [
      "The Agile Manifesto was written by 17 software practitioners at Snowbird, Utah, in 2001. It favors individuals and interactions, working software, customer collaboration, and responding to change, while noting that the items it ranks lower still have value. Agile product management extends those ideas beyond delivery into the question of what should be built at all, and why.",
      "The key risk is that agile gets applied only to engineering. John Cutler's term feature factory describes teams that ship constantly, measure output, and never check whether anything worked. Two-week sprints serving a fixed annual roadmap are waterfall with shorter meetings. Real agility requires authority to change the plan when evidence arrives.",
      "In practice, that means funding teams around problems, stating roadmaps as outcomes, and running discovery continuously rather than as a phase. Teresa Torres recommends weekly customer contact by the people building the product. Martin Fowler has warned of an agile industrial complex that imposes process on teams, the reverse of the manifesto's aim. The method should belong to the team.",
    ],
    applications: [
      { title: "Outcome roadmaps", body: "Replace dated feature lists with now, next, and later problem statements. Commit to the outcome and leave the solutions open." },
      { title: "Weekly discovery", body: "A product trio of PM, designer, and engineer interviews one customer each week, so research informs decisions rather than following them." },
      { title: "The Spotify caveat", body: "Spotify's squads and tribes were widely copied, yet people who worked there have said the model was never fully implemented as described. Copy principles, not org charts." },
      { title: "Funding teams", body: "Fund a team for a quarter against a goal rather than a project against a scope. Stopping early then counts as a good outcome." },
      { title: "Mission command", body: "Military commanders state the intent and leave tactics to those on the ground. Stanley McChrystal's Team of Teams describes the same shift.", realWorld: true },
    ],
  },

  "safe": {
    keyPoints: [
      "SAFe coordinates many agile teams through Agile Release Trains of 50-125 people.",
      "PI Planning aligns the whole train every 8 to 12 weeks.",
      "It is comprehensive, widely adopted, and heavily criticized by agile's founders.",
      "Heavy coordination is often a symptom of tangled architecture.",
    ],
    details: [
      "Dean Leffingwell released the Scaled Agile Framework in 2011 to bring agile to organizations with hundreds or thousands of people. Its unit of scale is the Agile Release Train, a long-lived team of teams, typically 50 to 125 people, that plans and delivers on a shared cadence. PI Planning, a two-day event held every 8 to 12 weeks, is its signature ritual.",
      "Its critics are prominent. Scrum co-creator Ken Schwaber dismissed it as unSAFe, arguing that it imposes a heavy, prescriptive structure that keeps the old hierarchy in place. A framework with many roles and layers does sit awkwardly beside a manifesto valuing individuals over process. Supporters reply that it gives large, regulated companies a practical way to begin changing.",
      "The useful way to evaluate it is to ask what the coordination is for. Dependencies between teams create the need for trains and planning events, so reducing dependencies through architecture and ownership can remove much of that need. PI Planning does surface hidden conflicts well, and that benefit can be borrowed alone. Lighter alternatives such as LeSS and Nexus make different trade-offs.",
    ],
    applications: [
      { title: "Regulated enterprises", body: "Banks and insurers with fixed release windows use trains to synchronize dozens of teams and their audit requirements." },
      { title: "Dependency boards", body: "Borrow just the board showing cross-team dependencies in a quarterly planning session, without adopting the rest of the framework." },
      { title: "Confidence votes", body: "End big-room planning with a fist-of-five vote on the plan. It gives leaders an honest signal they would rarely hear otherwise." },
      { title: "Architecture first", body: "Before adding a coordination layer, ask whether splitting a shared service or database would remove the dependency entirely." },
      { title: "Aircraft programs", body: "Building an airliner forces thousands of engineers onto a shared integration cadence, because the parts only fly together. Hardware has this need for real.", realWorld: true },
    ],
  },

  "shape-up": {
    keyPoints: [
      "Appetite fixes how much time a problem is worth, upfront.",
      "Shaped work is rough, solved, and bounded before teams commit.",
      "Six-week cycles end with a circuit breaker, not automatic extensions.",
      "It assumes autonomous, senior teams that can manage their own scope.",
    ],
    details: [
      "Ryan Singer documented Shape Up in 2019, describing how Basecamp builds products. Work runs in six-week cycles followed by two weeks of cool-down. Senior people shape projects first, using breadboards and fat-marker sketches that fix the main elements and leave details open. A betting table then chooses what to fund, and everything else is left out of any permanent backlog.",
      "The key inversion is appetite. Instead of estimating how long a design will take, you decide how much the problem is worth, then shape a solution to fit. Two weeks and six weeks produce different designs for the same need. This treats time as a design constraint from the start, and stops a fixed specification expanding past its real value.",
      "The circuit breaker is the boldest rule: a project unfinished at six weeks does not automatically get more time, which limits losses on a bad bet. Context matters, though. Shape Up was written for a small, profitable company with autonomous, experienced builders. Teams with many dependencies, thin design capacity, or customer commitments must adapt it rather than copy it.",
    ],
    applications: [
      { title: "Escaping estimate debates", body: "Ask whether this is worth two weeks or six, and the conversation shifts from prediction to priority." },
      { title: "Killing the backlog", body: "Let unbet ideas expire. Important problems come back on their own, and the team stops curating hundreds of stale tickets." },
      { title: "Hill charts", body: "Report whether a scope is still being figured out or is in execution. It exposes uncertainty that percent-complete hides." },
      { title: "Cool-down weeks", body: "Use the two weeks between cycles for bugs, exploration, and small fixes, so debt gets handled without a separate process." },
      { title: "Film schedules", body: "A film's budget fixes the shooting days, and directors reshape scenes to fit rather than extending the schedule.", realWorld: true },
    ],
  },

  "aarrr-metrics": {
    keyPoints: [
      "Five stages reveal where a product loses people between arrival and revenue.",
      "Fix the leakiest stage, not the one with the nicest dashboard.",
      "Activation must be defined by experienced value, not account creation.",
      "Many products should prioritize retention first, as the RARRA variant argues.",
    ],
    details: [
      "Dave McClure presented Startup Metrics for Pirates in 2007, named for the sound of its acronym: Acquisition, Activation, Retention, Referral, and Revenue. His target was vanity metrics such as raw page views. Each stage asks a plain question: did they find you, did they experience the value, did they come back, did they tell others, and did they pay?",
      "The model's strength is localizing problems. Doubling top-of-funnel traffic is wasted if 90% leave without activating, and a team can only see this when stages are measured separately. Activation demands real thought, because it should mark the moment someone gets value. Dropbox's classic version was one file in one folder on one device, not completing a sign-up form.",
      "The linear order can mislead. Many modern products put retention first, since acquiring users into a leaky product only burns money, and Thomas Petit and Gabor Papp's RARRA reorders the stages accordingly. Referral and revenue may also arrive before retention, and growth is often a loop rather than a funnel. Use the five stages as a diagnostic checklist, not a strict sequence.",
    ],
    applications: [
      { title: "Defining activation", body: "Compare the first week of retained and churned users. The action that best separates them is a candidate activation event." },
      { title: "Referral design", body: "Dropbox offered extra storage to both sides of an invite, a reward tied to its core value. Sign-ups reportedly rose by 60%." },
      { title: "Funnel reviews", body: "Review one stage per week with a single owner, so the team does more than passively watch five numbers." },
      { title: "Early-stage focus", body: "Before product-market fit, ignore referral and revenue optimization. Retention is the number that says the product works." },
      { title: "Gym memberships", body: "January sign-ups are an acquisition spike. Stefano DellaVigna and Ulrike Malmendier found members often overpay for their attendance, so revenue can mask failed activation.", realWorld: true },
    ],
  },

  "growth-loops": {
    keyPoints: [
      "Loops reinvest each cohort's output to acquire the next cohort.",
      "Funnels describe conversion; loops describe how growth actually compounds.",
      "Durable companies usually have one or two dominant loops, not ten.",
      "Every loop decays through saturation, channel change, or competitive pressure.",
    ],
    details: [
      "Reforge's Brian Balfour, Casey Winters, Kevin Kwok, and Andrew Chen argued in 2018 that funnels were the wrong model for growth. A funnel takes an input and ends in an output, so each new period starts from scratch. A loop feeds output back in as input: a new user creates something, it attracts further users, and the system builds on itself.",
      "Loops come in a few types. Viral loops use invitations or shared content. Content loops use user-generated pages that attract search traffic, as with Pinterest. Paid loops convert revenue into more ads, provided the economics work. Sales loops fund salespeople out of contract revenue. What matters is cycle time and the new input each turn generates, not just a conversion rate.",
      "The practical step is to identify the loop you actually have, rather than the one you wish you had. Most companies at scale grow through a small number of dominant loops, and each eventually weakens as channels saturate or rules change. Apps built on Facebook's platform learned that when its policies shifted. Build a second loop before the first one stalls.",
    ],
    applications: [
      { title: "Template galleries", body: "Notion and Canva let users publish templates that rank in search and bring in new users, who then create more templates." },
      { title: "Product-led invites", body: "Calendly and Figma expose non-users to the product through a shared link, so each use is also distribution." },
      { title: "Integration pages", body: "Zapier generates pages for app-to-app combinations, capturing high-intent search traffic and bringing in users who create more workflows." },
      { title: "Paid reinvestment", body: "If a customer repays acquisition cost in three months, capital can be recycled four times a year. Shortening payback speeds up the loop." },
      { title: "Academic citations", body: "A widely cited paper brings its authors funding, collaborators, and further citations, a loop Robert Merton named the Matthew effect.", realWorld: true },
    ],
  },

  "north-star-metric": {
    keyPoints: [
      "A North Star captures the value customers receive, not company revenue.",
      "It must be a leading indicator of sustained long-term business results.",
      "Input metrics translate it into levers that individual teams can move.",
      "Pair it with counter-metrics, because any single number gets gamed.",
    ],
    details: [
      "The North Star Metric, associated with Sean Ellis and popularized by Amplitude's playbook, is the single measure that best captures the core value a product delivers. Airbnb's nights booked is the standard example: it rises only when guests and hosts both get value, and it predicts revenue. A good one answers a simple question: are more customers getting more of what they came for?",
      "A metric alone changes nothing, so the useful artifact is the tree beneath it. Inputs such as new users, activation rate, and frequency of use give teams levers they can own, with the North Star as the shared scoreboard. Medium's choice of total time reading showed what this means in practice: it rewarded stories worth finishing, unlike page views or sign-ups.",
      "Every north star is also a distortion. YouTube's focus on watch time and Facebook's meaningful social interactions both drove results and drew serious criticism for what they amplified. Goodhart's Law applies at the top of a company as much as anywhere. Pair the metric with counter-metrics for trust, quality, and retention, and revisit it as the product's stage changes.",
    ],
    applications: [
      { title: "Company alignment", body: "A shared measure such as Spotify's time spent listening lets a podcast team and a recommendations team pull toward one outcome." },
      { title: "Choosing a metric", body: "Amplitude's playbook groups products by the game they play: attention, transaction, or productivity. The game suggests what to measure." },
      { title: "Metric trees", body: "Decompose weekly active teams into new, retained, and reactivated teams, then give each branch an owner." },
      { title: "Counter-metrics", body: "A marketplace tracking bookings should also watch cancellations and complaints, so growth cannot come at the cost of trust." },
      { title: "Door-to-balloon time", body: "This single number for heart attack care, tied directly to patient outcomes, led US hospitals to reorganize their emergency cardiac teams around it.", realWorld: true },
    ],
  },

  "cro-framework": {
    keyPoints: [
      "CRO starts with research into why people do not convert.",
      "A valid test needs a hypothesis, adequate sample, and fixed stopping rule.",
      "Peeking at results inflates false positives far beyond the reported rate.",
      "Optimizing one step can simply move the problem further down the funnel.",
      "Dark patterns win short-term conversions and spend long-term trust.",
    ],
    details: [
      "Conversion rate optimization treats a funnel as a system to study, not a page to decorate. Strong programs begin with research: analytics to find where people leave, replays and surveys to understand why, then a hypothesis. Chris Goward's LIFT model offers a checklist of conversion factors: value proposition, relevance, clarity, urgency, anxiety, and distraction.",
      "Large effects are usually structural. Jared Spool describes a retailer that replaced a mandatory Register button with Continue, making accounts optional; purchasing customers rose 45%, and he estimated an extra $300 million in the first year. At Bing, a small change to ad headlines waited months, then lifted revenue 12%, reportedly worth over $100 million a year in the US.",
      "Statistics is where most programs quietly fail. Evan Miller showed that checking a test repeatedly and stopping at significance badly inflates false positives. Low-traffic sites cannot detect small lifts at all, so they should make larger changes or rely on qualitative research. Watch what happens after the click too, since a sign-up lift that lowers activation is a loss presented as a win.",
    ],
    applications: [
      { title: "Guest checkout", body: "Let people buy first and create an account afterward. Forced registration is a persistent source of checkout abandonment." },
      { title: "Campaign pages", body: "Dan Siroker's 2008 Obama campaign test of images and button labels raised sign-ups by 40.6%, and the team extrapolated about $60 million in extra donations." },
      { title: "Sample size discipline", body: "Compute the required sample before launch and commit to a duration in full weeks, avoiding both weekday bias and peeking." },
      { title: "Low-traffic sites", body: "With few conversions a month, use session replays, five-user tests, and bold changes rather than A/B tests that can never reach significance." },
      { title: "Supermarket layouts", body: "Keeping milk at the back and impulse goods by the tills is long-standing conversion optimization, known in retail as store layout.", realWorld: true },
    ],
  },

  "flywheel-model": {
    keyPoints: [
      "Each part of the business feeds the next in a self-reinforcing cycle.",
      "Momentum comes from accumulated pushes, not from one breakthrough moment.",
      "Each arrow should be a causal claim you can actually test.",
      "Friction at any point slows the whole wheel, so remove it.",
    ],
    details: [
      "Jim Collins introduced the flywheel in Good to Great in 2001, describing how great companies build momentum through consistent effort rather than one dramatic stroke. Jeff Bezos sketched Amazon's version the same year: lower prices bring more customers, who attract more sellers, which improves selection and spreads fixed costs, allowing lower prices again. Each step causes the next.",
      "Compared with a funnel, the flywheel treats customers as a source of energy rather than an output. HubSpot replaced its funnel with a flywheel in 2018 for that reason, arguing that satisfied customers now drive referrals and reviews. Compared with a growth loop, it is broader: it connects operations, cost structure, and brand, rather than tracing how one cohort acquires the next.",
      "A good flywheel is specific enough to reject things. Each arrow should be a real causal claim you can test and measure, and the sequence should be particular to your company. Generic diagrams of happy customers creating growth are just slogans. The discipline lies in compounding choices, which is why Collins warns against the doom loop of reacting to each new initiative.",
    ],
    applications: [
      { title: "Marketplace design", body: "Uber's early napkin sketch shows more drivers cutting wait times, which attracts riders, which raises driver earnings and draws more drivers." },
      { title: "Investment decisions", body: "Ask which arrow a proposal strengthens. Prime and Amazon's fulfillment network were justified by the wheel rather than by short-term return." },
      { title: "Developer ecosystems", body: "More developers build apps, which attract more users, which attract more developers. App stores and cloud platforms run on this cycle." },
      { title: "Friction audits", body: "Find where the wheel slows, such as sluggish seller onboarding or poor reviews, then fix the weakest arrow first." },
      { title: "Vanguard", body: "Collins cites Vanguard's wheel: low costs lift investor returns, attracting more assets, which spread costs further and allow lower fees again.", realWorld: true },
    ],
  },
};
