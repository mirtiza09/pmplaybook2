import type { ContentDetail } from "./types";

export const mentalModelDetails: Record<string, ContentDetail> = {
  "map-territory": {
    keyPoints: [
      "Every model, metric, and document is a simplification of reality.",
      "A map is useful precisely because it leaves things out.",
      "The danger starts when teams manage the map instead of the territory.",
      "When anecdotes contradict dashboards, suspect the measurement before dismissing the customer.",
    ],
    details: [
      "Alfred Korzybski made the point in 1931: the map is not the territory it represents. Compression is the reason maps are useful, since a 1:1 map would be as hard to read as the world itself. Personas, roadmaps, funnels, and PRDs all work by omission, and the skill lies in remembering what was left out and for whose benefit.",
      "Product teams are surrounded by maps mistaken for reality. A green dashboard only measures what someone chose to instrument. Jeff Bezos has said that when anecdotes and data disagree, the anecdotes are usually right, and the problem is how you are measuring. He tells of dialing Amazon's support line mid-meeting to test a metric that looked fine.",
      "Maps also age. A persona written two years ago, an architecture diagram nobody updated, and last spring's competitor analysis keep their authority long after they stop matching the world. Ask who drew this map, when, and for what purpose. Then go and look at the ground itself, because a confident map is most dangerous where it is most out of date.",
    ],
    applications: [
      { title: "Metric audits", body: "For each KPI, write down what it would miss. A healthy activation rate can hide people who signed up and never understood the product." },
      { title: "Instrumentation gaps", body: "Ad blockers, unlogged flows, and bots all shape analytics. Know which users your data cannot see before you trust a funnel." },
      { title: "Persona refresh", body: "Attach a date and the evidence behind each persona, and retire any you cannot support with recent research." },
      { title: "AI evaluations", body: "A benchmark score is a map of model quality. Test on your own real tasks before trusting it." },
      { title: "The London Tube map", body: "Harry Beck's 1933 diagram distorts geography for clarity. It works so well that tourists ride between stations that are a short walk apart.", realWorld: true },
    ],
  },

  "circle-competence": {
    keyPoints: [
      "Knowing the boundary of your knowledge matters more than its size.",
      "Risk rises fastest just outside your circle, where confidence outlasts knowledge.",
      "A circle grows through deliberate practice, not through reading about a subject.",
      "Recognizing what you don't know tells you whom to hire or ask.",
    ],
    details: [
      "Warren Buffett framed the idea in his 1996 shareholder letter: what counts is not how large your circle is, but how well its boundaries are defined. He and Charlie Munger avoided much of the technology sector for decades on this basis, accepting missed gains as the price of avoiding errors they could not evaluate. Discipline about the edge was the point.",
      "The hard part is that competence feels the same inside and outside the circle. Success in one domain produces confidence that travels, while knowledge does not. Amazon's operational excellence did not save the Fire Phone, which led to a $170 million write-down in 2014. Google's search dominance did not translate into social networking with Google+, which closed to consumers in 2019.",
      "For a PM, the model decides when to lead and when to defer. You cannot be expert in pricing, security, machine learning, and law, yet you are accountable for decisions touching all of them. Say clearly what you do not know, find who does, and ask questions that test their reasoning. Growth means moving the boundary on purpose, with feedback.",
    ],
    applications: [
      { title: "Build versus buy", body: "Build what sits inside your core advantage. Companies buy Stripe not because payments are impossible, but because they sit far outside their circle." },
      { title: "Technical decisions", body: "Own the trade-offs and let engineers own the architecture, while asking enough questions to spot a mismatch between the two." },
      { title: "Market expansion", body: "Score a new segment on how well you understand its buyers, regulation, and workflows. Low scores call for a partner or a hire, not a launch date." },
      { title: "AI outside your field", body: "AI makes it easy to produce confident output in an unfamiliar domain. Have someone who can judge the work check it." },
      { title: "Pilot type ratings", body: "A licensed pilot still needs a specific rating for each large aircraft type. Aviation writes the circle of competence into law.", realWorld: true },
    ],
  },

  "first-principles": {
    keyPoints: [
      "Reduce a problem to what you know is true, then rebuild.",
      "Most reasoning is by analogy, which is efficient but inherits others' assumptions.",
      "First-principles thinking is expensive, so save it for decisions that matter.",
      "Before removing a convention, learn why it existed: Chesterton's fence.",
    ],
    details: [
      "Aristotle described a first principle as the first basis from which a thing is known. In modern use, it means separating facts from the assumptions stacked on them. Elon Musk's often-repeated example is batteries: rather than accepting that packs cost $600 per kilowatt-hour, he reasoned from commodity prices that the materials cost about $80. The gap was convention and process, not physics.",
      "Reasoning by analogy is not a flaw. It is how nearly all decisions get made, because rebuilding everything from scratch is unaffordable, and copying what works is usually right. The method earns its cost when an inherited assumption is outdated, which often follows a technology shift. Snowflake separated storage from compute because the cloud removed the constraint that had tied them together.",
      "Two tools help. Socratic questioning and Toyota's five whys expose which beliefs are facts and which are habits. G.K. Chesterton supplies the counterweight: if you find a fence across a road, do not remove it until you know why it was built. Many conventions exist for reasons invisible from a clean sheet, including legal rules and hard-won failures.",
    ],
    applications: [
      { title: "Rethinking pricing", body: "Ask what customers actually value rather than benchmarking rivals. Per-seat pricing is an assumption, and usage-based pricing came from questioning it." },
      { title: "Browser-first design", body: "Figma asked why design tools had to be desktop apps and built a renderer for the browser. Real-time collaboration followed from that choice." },
      { title: "Payments as code", body: "Stripe's founders questioned why accepting payments needed weeks of bank paperwork, and reduced the start of it to a few lines of code." },
      { title: "Process reviews", body: "List each approval step and ask what would actually break without it. Some steps are safeguards; others are fossils." },
      { title: "Reusable rockets", body: "SpaceX asked why rockets were thrown away after one flight, when fuel is a small share of launch cost. Landing boosters changed launch economics.", realWorld: true },
    ],
  },

  "relativity": {
    keyPoints: [
      "No observer has a privileged view; every judgment depends on a reference frame.",
      "Users judge value against anchors and alternatives, not in absolute terms.",
      "Builders cannot easily unsee what they know, which distorts their judgment.",
      "Changing the comparison can change perceived value without changing the product.",
    ],
    details: [
      "Galileo showed that motion depends on the observer, since a sailor below deck cannot tell whether a smooth ship is moving. Einstein extended the idea in 1905: time and simultaneity also depend on the frame of reference. As a mental model, the lesson is that no observer sees everything, and that a contradictory report may be accurate from where someone stands.",
      "The human version is well documented. Using footage from the 1992 Olympics, Victoria Medvec, Scott Madey, and Thomas Gilovich found bronze medalists often looked happier than silver medalists, apparently because silver compares upward to gold and bronze downward to no medal. Follow-up work is mixed, but the principle stands: outcomes are felt relative to a reference point.",
      "The most costly frame problem is your own. In Elizabeth Newton's 1990 study, people tapped out famous songs and predicted listeners would name half of them; listeners got 2.5%. The tappers could hear the tune in their heads. Product teams carry the same curse of knowledge, seeing their interface with a full map of the product that no new user has.",
    ],
    applications: [
      { title: "Pricing tiers", body: "A high-priced enterprise plan makes the middle one look reasonable, even if few buy it. Customers evaluate tiers against each other." },
      { title: "Positioning", body: "A tool priced against a salary looks cheap, and the same tool priced against other software looks expensive. Positioning picks the frame." },
      { title: "Hallway usability", body: "Watch someone new use the product without help. It is the fastest way to escape your own frame." },
      { title: "Latency expectations", body: "Two seconds is fast for a complex AI answer and slow for a search box. The category sets how speed feels." },
      { title: "The bread maker", body: "Adding a $429 model beside a $275 one reportedly made the cheaper bread maker sell far better at Williams-Sonoma, because it suddenly looked sensible.", realWorld: true },
    ],
  },

  "reciprocity": {
    keyPoints: [
      "People feel obliged to return favors, even small, uninvited ones.",
      "Giving first works best when the gift is genuine and unconditional.",
      "Negative reciprocity is equally strong: people punish unfairness at their own cost.",
      "Inside organizations, favors are the currency of influence without authority.",
    ],
    details: [
      "Biologist Robert Trivers explained reciprocal altruism in 1971: helping others can evolve when favors are likely to be returned. Robert Axelrod's tournaments showed the strength of tit for tat, which starts by cooperating and then mirrors the other player. Robert Cialdini made reciprocity a central principle of influence, showing how strongly small, unrequested gifts create a sense of obligation.",
      "Its commercial form is familiar. David Strohmetz and colleagues found that a small piece of candy with the bill raised restaurant tips, and that the effect varied with how it was offered. Personal, unexpected gifts work better than generic ones. Free products belong in the same category, since usefulness before any request builds goodwill that a gate could never create.",
      "The reverse force deserves equal attention. In ultimatum game experiments, people reject offers they see as unfair, giving up money to punish the proposer. Communities behave likewise: when Unity and Reddit changed terms for those who built on them, the reaction was fierce because contributors felt a bargain had been broken. Reciprocity is a relationship, and it can break in an afternoon.",
    ],
    applications: [
      { title: "Free tools", body: "HubSpot's free website grader and CRM gave marketers value before any sales conversation, earning attention and trust in return." },
      { title: "Generous free tiers", body: "Let users succeed before asking for payment. A gate at the moment of first value feels like a hostage situation, not an exchange." },
      { title: "Open-source stewardship", body: "Relicensing after growing on community work invites retaliation. Elastic's and Redis's changes led to the forks OpenSearch and Valkey." },
      { title: "Internal influence", body: "Allan Cohen and David Bradford describe influence as trading currencies. Help another team hit its goal, and later requests get easier." },
      { title: "Charity mailings", body: "Cialdini reports that a veterans' charity nearly doubled its donation response, from 18% to 35%, by enclosing free address labels.", realWorld: true },
    ],
  },

  "thermodynamics": {
    keyPoints: [
      "Order decays by default; keeping a system organized costs continuous energy.",
      "Software grows more complex unless work is done to reduce it.",
      "Complexity is conserved: removing it from users moves it elsewhere.",
      "Processes, documents, and data all drift toward disorder without active maintenance.",
    ],
    details: [
      "The second law of thermodynamics says that in a closed system, entropy tends to increase. Hot coffee cools, and a tidy room does not stay tidy. Order is possible only by importing energy from outside. As a mental model, this reverses the usual question: instead of asking why things fall apart, ask what effort is keeping each system in working order.",
      "Software follows the same pattern. Meir Lehman's laws of software evolution, developed in the 1970s, state that a system in use must keep changing or become less useful, and that its complexity will increase unless work is done to reduce it. Code, design systems, analytics taxonomies, and help docs all drift. Nobody decides this; it is simply what happens without maintenance.",
      "The first law offers a second insight. Energy is conserved, and Larry Tesler made a similar claim about software: every application has an irreducible amount of complexity, and the only question is who handles it. Simplifying an interface usually moves work to engineers, defaults, or automation. That is often a great trade, since one team can absorb complexity for millions of users.",
    ],
    applications: [
      { title: "Taxonomy governance", body: "Give each analytics event an owner and retire unused ones on a schedule. Otherwise names drift until nobody trusts the data." },
      { title: "Design systems", body: "Budget time to audit drift between design files, code, and the live product. A design system with no maintainers decays into a suggestion." },
      { title: "Absorbing complexity", body: "Stripe absorbs tax, fraud, and banking rules behind an API, taking on complexity so that its customers do not have to." },
      { title: "Chaos engineering", body: "Netflix's Chaos Monkey deliberately terminates production instances, injecting energy to find weaknesses before natural disorder does." },
      { title: "Gardens", body: "A garden left alone for a season fills with weeds. Its order is a continuing cost, not a one-time achievement.", realWorld: true },
    ],
  },

  "feedback-loops": {
    keyPoints: [
      "Reinforcing loops amplify change; balancing loops push systems toward a target.",
      "Delays between action and response cause overshoot and oscillation.",
      "Most surprising system behavior comes from structure, not from individual events.",
      "Recommendation systems shape the behavior they later measure as preference.",
    ],
    details: [
      "Systems thinking, developed by Jay Forrester at MIT and explained by Donella Meadows in Thinking in Systems, describes two basic structures. Reinforcing loops amplify: more users attract more content, which attracts more users, and bank runs work the same way in reverse. Balancing loops seek a goal, like a thermostat. Nearly all interesting behavior arises from how these loops interact.",
      "Delay is the ingredient that fools people. MIT's Beer Game has players manage a simple supply chain, and they routinely create wild swings in inventory because orders take weeks to arrive. Teams do the same: they hire after a support backlog peaks, and the new staff arrive once it has fallen. Reacting harder to delayed signals makes oscillation worse, not better.",
      "Product systems contain loops teams often fail to draw. Google's research on ad load found that showing fewer, better ads improved long-term user behavior and led to a 50% cut in mobile ad load, a result short-term tests would have missed. Recommendation systems are also self-reinforcing: what gets shown gets clicked, and those clicks then justify showing more of it.",
    ],
    applications: [
      { title: "Recommendation bias", body: "Reserve some exposure for exploration, since a model trained on its own output will keep narrowing what users see." },
      { title: "Alert fatigue", body: "Noisy alerts train engineers to ignore pages, which lets real incidents through, which prompts more alerts. Cutting alerts breaks the loop." },
      { title: "Support staffing", body: "Forecast load from sign-ups rather than reacting to the queue, shortening the delay that causes feast and famine." },
      { title: "Network effects", body: "Early growth in a marketplace can feel effortless, then stall when the balancing loop of saturation takes over. Plot both." },
      { title: "Bank runs", body: "In 2023, Silicon Valley Bank customers tried to withdraw $42 billion in a single day, as each withdrawal gave others a reason to leave.", realWorld: true },
    ],
  },

  "bottlenecks": {
    keyPoints: [
      "A system's output is limited by its single tightest constraint.",
      "Improving anything other than the constraint produces an illusion of progress.",
      "Once one constraint is fixed, another appears somewhere else.",
      "Cheaper code shifts the bottleneck toward review, testing, and product judgment.",
    ],
    details: [
      "Eliyahu Goldratt set out the Theory of Constraints in his 1984 business novel The Goal. Any system has a constraint that governs its throughput, so an hour lost there is lost from the whole system, while an hour saved elsewhere is worth little. His five focusing steps are to identify the constraint, exploit it, subordinate everything else to it, elevate it, and repeat.",
      "The counterintuitive step is subordination. If non-bottleneck stations run at full speed, they simply build inventory in front of the constraint, and local efficiency makes the system worse. In software, developers writing more code than can be reviewed or released are producing a queue, not value. A team at 100% utilization is usually a team with terrible cycle times.",
      "Constraints also move. Tesla's Model 3 ramp showed this painfully: Elon Musk admitted in 2018 that excessive automation had been a mistake, as the machinery itself became the limit. AI coding tools are shifting the constraint now. When writing code gets cheap, the limit moves to review, verification, and deciding what to build, and further investment in generation yields little.",
    ],
    applications: [
      { title: "Value stream mapping", body: "Time each stage from idea to production. Long waits usually sit in review or approval, not in coding." },
      { title: "AI-assisted delivery", body: "If AI doubles pull requests while review capacity stays flat, lead time rises. Invest in review tools and automated checks first." },
      { title: "Marketplace supply", body: "Two-sided platforms usually have one side constraining growth at any moment. Find it, and point acquisition there." },
      { title: "Funnel analysis", body: "Fix the step with the largest absolute loss, not the one with the most obvious ideas." },
      { title: "Herbie", body: "In The Goal, a scout hike can only move at the pace of its slowest child, Herbie. Putting him at the front is the theory in one image.", realWorld: true },
    ],
  },

  "churn": {
    keyPoints: [
      "Every product has a leaky bucket, and churn sets its maximum size.",
      "Small monthly churn compounds: 3% a month loses about 31% yearly.",
      "Customer lifetime is roughly the inverse of your churn rate.",
      "Failed payments can account for a large share of lost subscribers.",
      "Making cancellation hard adds legal and reputational risk without fixing causes.",
    ],
    details: [
      "The math of churn is unforgiving. If you add 1,000 customers a month and lose 5% of your base monthly, you plateau at 20,000 customers no matter how long you wait. Expected lifetime is about one divided by the churn rate, so cutting monthly churn from 5% to 2.5% doubles the lifetime of every customer. Few single changes offer that return.",
      "Aggregate churn hides several problems. Logo churn counts customers, revenue churn weights them by spend, and expansion can push net revenue churn negative. Voluntary churn is a product or value signal. Involuntary churn comes from expired or declined cards, and vendors commonly estimate it at 20 to 40% of subscription losses. It needs retries and reminders, not features.",
      "Cohorts reveal what averages hide, since early churn usually means a failed promise while late churn suggests changing needs. Resist buying retention with obstruction. The FTC's case against Amazon over Prime enrollment and cancellation ended in a $2.5 billion settlement in 2025, and obstruction never fixes the underlying cause. An exit survey teaches more than a maze does.",
    ],
    applications: [
      { title: "Dunning flows", body: "Retry failed cards at smart intervals, update expired details automatically, and send clear reminders. It recovers revenue with no persuasion at all." },
      { title: "Predicting risk", body: "Model churn from leading signals like falling logins or a departed admin, so customer success can act before renewal." },
      { title: "Cancellation insight", body: "Ask one question at exit and offer a pause. A pause can save customers whose need is seasonal rather than gone." },
      { title: "Cohort reviews", body: "Compare retention by sign-up month after each major release, to see whether product changes actually bent the curve." },
      { title: "Mobile carriers", body: "Telecoms were among the first to model churn at scale, because a lost subscriber is easy to count and costly to replace.", realWorld: true },
    ],
  },

  "sampling": {
    keyPoints: [
      "Who you ask matters more than how many you ask.",
      "Survivorship bias hides the people who already left your product.",
      "Five-user testing finds usability problems; it cannot estimate market preferences.",
      "Analytics are also a sample, missing blocked, unlogged, and unconsenting users.",
    ],
    details: [
      "The Literary Digest polled about 2.4 million people in 1936 and predicted Alf Landon would beat Franklin Roosevelt in a landslide. George Gallup used a far smaller, better-designed sample and called it correctly. The magazine had drawn heavily on lists such as car and telephone owners, and non-response compounded the problem. A huge biased sample simply gives a precise wrong answer.",
      "Survivorship is the form that catches product teams. During World War II, statistician Abraham Wald reasoned that returning bombers showed where planes could be hit and survive, so the armor belonged where those planes had no holes. Current-user surveys repeat the mistake by excluding everyone your product already failed. Feature requests skew toward your loudest survivors.",
      "Match the sample to the question. Jakob Nielsen's finding that five users uncover most usability issues applies to discovering problems in a fairly uniform group, not to measuring how common they are or what the market wants. Large analytics data sets have gaps of their own, including ad blockers and consent refusal. Before trusting a number, ask who could not have appeared in it.",
    ],
    applications: [
      { title: "Churned-user interviews", body: "Talk to those who left. They are harder to reach, and they can tell you what current users cannot." },
      { title: "Sample ratio checks", body: "If a test intended as 50/50 comes out 52/48 on heavy traffic, something is broken. Treat the result as invalid, however good it looks." },
      { title: "Stratified recruiting", body: "Recruit deliberately across plan tiers and usage levels, or the easiest people to schedule will define your roadmap." },
      { title: "Review bias", body: "App store ratings over-represent the delighted and the furious. Read them to find problems, not to gauge average satisfaction." },
      { title: "Who enrolls in trials", body: "Drug trials historically under-enrolled women and older adults, limiting how far results applied. NIH-funded research now has inclusion requirements.", realWorld: true },
    ],
  },

  "randomness": {
    keyPoints: [
      "Small samples produce extreme results far more often than intuition expects.",
      "Humans see patterns in noise, and luck gets mistaken for skill.",
      "True randomness looks streaky, which is why people call it broken.",
      "Randomized assignment turns chance into the strongest causal tool available.",
    ],
    details: [
      "People are poor intuitive statisticians. Kahneman and Tversky's belief in the law of small numbers describes expecting small samples to mirror the whole population. In one classic example, US counties with the lowest kidney cancer rates were mostly small and rural, and so were those with the highest. Nothing about rural life explains both. Small populations simply vary more.",
      "Product metrics behave the same way. A 15% jump in daily sign-ups may be noise, and a launch can look like a triumph or a disaster by chance alone, especially at low traffic. Teams write confident narratives for such wiggles. A/A tests, where both groups get the same experience, show how much movement occurs with no change at all.",
      "Perception can also clash with true randomness. Spotify received complaints that shuffle played several songs by one artist in a row, even though it used a genuinely random algorithm. In 2014 it described changing the method to spread artists out, because streaks in random sequences feel like errors. Sometimes the right product decision is to make chance feel fair rather than be pure.",
    ],
    applications: [
      { title: "A/A tests", body: "Run a test with identical variants to confirm your experimentation platform reports the expected rate of false positives." },
      { title: "Control charts", body: "Plot a metric with its normal variation band and only investigate points outside it, which stops you chasing ordinary noise." },
      { title: "Retry jitter", body: "AWS engineers recommend adding randomness to exponential backoff, since clients retrying in sync can hammer a recovering service." },
      { title: "Copying winners", body: "Before imitating a successful launch, ask how many similar launches failed. Survivors may simply have been lucky." },
      { title: "Monte Carlo, 1913", body: "Black came up 26 times in a row on a roulette wheel, and gamblers lost heavily betting that the streak had to end.", realWorld: true },
    ],
  },

  "regression-to-mean": {
    keyPoints: [
      "Extreme results usually contain luck, which does not repeat on remeasurement.",
      "Any intervention aimed at your worst performers will appear to work.",
      "Winning A/B tests tend to overstate their true effect.",
      "A control group is the only reliable defense against this illusion.",
    ],
    details: [
      "Francis Galton noticed in the 1880s that very tall parents tended to have children shorter than themselves, and very short parents taller ones. Nothing was pulling people toward the average. Any measurement combines a stable component and a chance one, and an extreme result probably had unusually strong chance in it. The next measurement simply draws new luck.",
      "Kahneman tells of Israeli flight instructors who believed punishment worked better than praise: pilots improved after criticism for bad landings and declined after praise for good ones. Both were just regression. The instructors were drawing a management lesson from noise. Organizations repeat this constantly with reorganizations and consultants brought in at a low point.",
      "The effect appears all over product work. A cohort selected for low engagement will often rebound without help, so a win-back campaign looks better than it is. Launch spikes fade. Experiment winners shrink after rollout, since those that cleared significance were often lucky as well as good. Whenever you select by extreme value, expect reversion and measure against a holdout.",
    ],
    applications: [
      { title: "Holdout groups", body: "Keep a random slice of at-risk users out of any retention campaign. Without it, natural rebound gets credited to your emails." },
      { title: "Winner's curse", body: "Discount the measured lift of a shipped test before forecasting, especially for low-powered experiments and surprising wins." },
      { title: "Incident reviews", body: "Metrics tend to recover after a bad week whatever you do. Judge process changes over many weeks, not by the first rebound." },
      { title: "Performance reviews", body: "A record quarter followed by an ordinary one does not mean a team declined. Look at trends over several periods." },
      { title: "The cover jinx", body: "Athletes reach the Sports Illustrated cover after an exceptional run, so a dip afterward is expected, with or without a curse.", realWorld: true },
    ],
  },

  "multiply-by-zero": {
    keyPoints: [
      "In multiplicative systems, one zero cancels everything else you did well.",
      "Strength elsewhere cannot compensate for a missing critical requirement.",
      "Reliability multiplies across dependencies, so chains are weaker than any link.",
      "Find and remove zeros before polishing your strongest factors.",
    ],
    details: [
      "Additive thinking says strength in one area offsets weakness in another. Multiplicative systems do not work that way. If a product's success is roughly value times reliability times trust, then a zero in any term sends the total to zero. In these systems, the biggest available gain usually comes from fixing your worst factor rather than improving your best one.",
      "Security and reliability show it most clearly. Equifax's 2017 breach exposed data on about 147 million people through an unpatched web framework. CrowdStrike's faulty July 2024 update crashed about 8.5 million Windows devices worldwide from a single content file. Years of excellent work elsewhere did not offset these failures. In a chain, the weakest component sets the outcome.",
      "The same math applies to availability and funnels. Ten services at 99.9% each, in series, give about 99% overall, or around 3.6 days of downtime a year rather than 9 hours. A five-step funnel at 80% per step converts 33%. It pays to hunt for your zeros on purpose: the segment, dependency, or requirement where one failure makes everything else irrelevant.",
    ],
    applications: [
      { title: "Accessibility", body: "If a screen reader cannot get past your login, every feature behind it is worth zero to that user." },
      { title: "Single points of failure", body: "Review which one vendor, credential, or person could stop the whole service. Redundancy should target the zeros first." },
      { title: "Launch readiness", body: "Treat security, privacy, and data integrity as gates rather than scored items. A high average cannot excuse failing one." },
      { title: "End-to-end checkout", body: "A flawless app is worthless if a payment provider fails in your largest market. Test the whole chain, not each piece." },
      { title: "Boeing 737 MAX", body: "MCAS acted on input from a single angle-of-attack sensor, a failure path that contributed to two crashes and 346 deaths.", realWorld: true },
    ],
  },

  "scarcity": {
    keyPoints: [
      "Scarcity forces trade-offs, which is why every choice has an opportunity cost.",
      "People value things more when supply seems limited or falling.",
      "Attention is the scarcest resource in most modern products.",
      "Fake scarcity works briefly, then destroys the trust that made it work.",
    ],
    details: [
      "Economics begins here. Lionel Robbins defined the field in 1932 as studying how scarce means are allocated among competing ends. For a product team, the scarce means are engineering time, user attention, and organizational focus. Every yes has an opportunity cost, the value of the best alternative you gave up, and that cost stays invisible unless you deliberately name it.",
      "Psychology adds a second effect. In a 1975 study by Stephen Worchel and colleagues, people rated cookies as more desirable when the supply was small, and especially when it had just dropped. Cialdini built this into his principles of persuasion. Herbert Simon made the point for the information age: a wealth of information creates a poverty of attention.",
      "Use real scarcity honestly. Gmail's invitation-only launch in 2004 reflected genuine capacity limits, and invitations became status symbols. Invented countdown timers and low-stock warnings are different. Britain's competition regulator secured commitments from hotel booking sites in 2019 to stop pressure selling, including misleading claims about availability.",
    ],
    applications: [
      { title: "Roadmap opportunity cost", body: "When approving an item, write down what will not happen as a result. That makes the real price of a yes visible." },
      { title: "Waitlists", body: "A waitlist is honest when capacity is truly limited, as with an invite-only beta, and it creates a queue of motivated testers." },
      { title: "Usage limits", body: "AI products with real GPU costs use credits and rate limits, turning hardware scarcity into a visible part of the product." },
      { title: "Protecting attention", body: "Treat notifications as a budget. Each low-value ping spends attention your important messages will need." },
      { title: "Limited drops", body: "Supreme releases small weekly runs of clothing, so people queue and resell. Because the supply limit is real, the strategy holds up.", realWorld: true },
    ],
  },

  "supply-demand": {
    keyPoints: [
      "Price is a signal that coordinates buyers and sellers without central control.",
      "Digital goods have near-zero marginal cost, so scarcity moves to attention.",
      "Marketplaces live or die by balancing both sides in real time.",
      "Cheaper inputs can increase total usage, an effect called Jevons paradox.",
    ],
    details: [
      "Alfred Marshall's 1890 Principles of Economics popularized the crossing curves still taught today: quantity demanded falls as price rises, quantity supplied rises, and markets move toward where they meet. The deeper insight came from Friedrich Hayek, who described prices as a system for transmitting information. Nobody needs to know why a resource became scarce for buyers and suppliers to respond.",
      "Uber's surge pricing is the textbook digital case. A study by Peter Cohen, Steven Levitt, and colleagues used surge variation to estimate that UberX generated about $6.8 billion of US consumer surplus in 2015. When surge briefly failed in New York on New Year's Eve 2014, Uber economists reported that ride completion collapsed, showing what happens when prices stop clearing a market.",
      "Software changes the inputs. Copying code or video costs almost nothing, so supply is effectively unlimited and attention becomes the binding limit. AI brings real marginal costs back, and as tokens get cheaper, total consumption may grow: William Jevons observed in 1865 that more efficient coal use increased coal demand. Efficiency can expand a market instead of shrinking it.",
    ],
    applications: [
      { title: "Spot capacity", body: "AWS Spot Instances sell spare compute at steep discounts, using price to fill capacity that would otherwise sit idle." },
      { title: "Willingness to pay", body: "Estimate price with Van Westendorp surveys and real tests, rather than deriving it from your costs." },
      { title: "Creator marketplaces", body: "When a platform has too many creators and too little audience, adding more supply only lowers everyone's earnings." },
      { title: "Internal budgets", body: "Giving teams a compute or token budget creates an internal price, revealing which uses are actually worth their cost." },
      { title: "Concert tickets", body: "Tickets priced below market get resold at a premium, so scalpers capture the gap. That is why dynamic pricing exists, however unpopular.", realWorld: true },
    ],
  },

  "optimization": {
    keyPoints: [
      "Improving a part can worsen the whole when the goal is wrong.",
      "Hill climbing finds local peaks and can miss higher ground entirely.",
      "Efficiency removes slack, and slack is often what provides resilience.",
      "Effort should flow to wherever the marginal return is highest.",
    ],
    details: [
      "Optimization means maximizing an objective under constraints, and each word matters. Choose the wrong objective and you get efficient failure. Herbert Simon pointed out that real decision makers rarely optimize; they satisfice, stopping at good enough because information and time are limited. Deciding what is good enough is often more valuable than squeezing the last 2% from one number.",
      "A/B testing is hill climbing: small steps that each go up. It is a great way to reach the top of the current hill and a poor way to discover a higher one. Google famously tested 41 shades of blue for links, a rational step within its design, but no test of blue would find a new product. Large jumps require judgment, and often a temporary dip.",
      "Optimization also trades robustness for efficiency. After the 2011 Japanese earthquake exposed its supply chain, Toyota kept larger stocks of key chips, which helped it handle the 2021 shortage better than many rivals. Donald Knuth's warning about premature optimization applies widely: make it work first, then tune only the part that actually limits the system.",
    ],
    applications: [
      { title: "Performance work", body: "Profile before tuning. Amdahl's law says speeding up a part used 5% of the time can never help overall by more than 5%." },
      { title: "Local maxima", body: "If your tests keep yielding tiny wins, schedule a bold concept test to learn whether a higher hill exists." },
      { title: "Keeping slack", body: "Leave 10 to 20% of capacity unplanned. Teams at full utilization have no room to absorb incidents or opportunities." },
      { title: "Cloud headroom", body: "Overprovisioning wastes money, while running at the limit risks outages. Set headroom from the cost of failure, not from the bill alone." },
      { title: "Cheetahs", body: "Cheetahs are superbly optimized for speed, and the price is fragility: low genetic diversity, and kills often lost to stronger predators.", realWorld: true },
    ],
  },

  "seeing-the-front": {
    keyPoints: [
      "Reports compress reality, and every layer of hierarchy removes some detail.",
      "Leaders who observe directly notice what no dashboard was built to catch.",
      "Go and see is a discipline, not an occasional executive visit.",
      "Direct observation complements data; one vivid anecdote should not replace it.",
    ],
    details: [
      "Military history rewards commanders who went forward to see conditions for themselves. Rommel was known for leading close to the front, trading personal risk for unfiltered information. Toyota built the same idea into production as genchi genbutsu, go and see for yourself, and Taiichi Ohno reportedly made new managers stand in a chalk circle to watch a process for hours.",
      "Product organizations recreate the problem of distance through layers. Customer pain is summarized by support, condensed into a metric, then rolled into a slide. At each stage, the inconvenient details get removed. By the time a VP sees it, the slide is tidy and the customer's actual experience has vanished. Direct contact restores the texture that abstraction took out.",
      "The model has limits. A single visit can produce a vivid anecdote that outweighs better evidence, and executive tours get stage-managed, just as generals were shown the best-prepared units. Make observation regular, unannounced where possible, and pair it with data. The point is calibration: your dashboards mean more once you have seen what a bad number looks like in person.",
    ],
    applications: [
      { title: "Support rotations", body: "Zapier has everyone take turns on customer support, so engineers and designers meet real problems directly." },
      { title: "Dogfooding", body: "A 1988 Microsoft memo pushed teams to use their own products, an always-on form of going to the front." },
      { title: "Session replays", body: "Watch ten real sessions before a planning meeting. It often changes priorities more than a funnel report does." },
      { title: "Hands-on onboarding", body: "Stripe's founders would install their product on a new user's laptop on the spot, learning exactly where integration hurt." },
      { title: "Sam Walton's store visits", body: "Walmart's founder spent much of his time visiting stores, his own and rivals', and piloted his own plane to reach them.", realWorld: true },
    ],
  },

  "asymmetric-warfare": {
    keyPoints: [
      "Weaker players win by refusing to fight on the stronger side's terms.",
      "An incumbent's strengths also create obligations it cannot easily abandon.",
      "Speed, focus, and a different business model can offset scale.",
      "Asymmetric advantages are temporary, because incumbents eventually adapt.",
    ],
    details: [
      "Ivan Arreguín-Toft studied asymmetric conflicts from 1800 onward and found that the stronger side usually won, yet when the weaker side used an opposite strategy, its win rate rose to almost two-thirds. Malcolm Gladwell brought the finding to a popular audience. The lesson is not that underdogs win, but that they win by changing the form of the contest.",
      "Incumbents are constrained by what made them strong. Clayton Christensen's The Innovator's Dilemma explains why: rational managers protect high-margin customers, leaving small or low-end markets to challengers. A dominant firm has an installed base and a margin structure to defend. A challenger can attack exactly where responding would hurt the incumbent's own business.",
      "Good asymmetric moves target an obligation. Google gave Android away, because its revenue came from search, undercutting rivals who charged for operating systems. Dollar Shave Club skipped the retail shelf battle with a low-budget viral video and direct shipping, and Unilever bought it for a reported $1 billion in 2016. Its advantage was not a better blade, but a different front.",
    ],
    applications: [
      { title: "Free against paid", body: "Making a rival's profit center free, as Google Docs did with office software, forces it to choose between revenue and market share." },
      { title: "Browser-native challengers", body: "Figma attacked installed desktop tools from the browser, where an incumbent's file-based business was slow to follow." },
      { title: "Serving small customers", body: "Start with customers too small for an enterprise vendor's sales force. By the time they matter, you may already own the segment." },
      { title: "Open-weight models", body: "Meta's Llama releases pressure closed AI vendors by commoditizing their core product, which costs Meta little because its revenue comes from ads." },
      { title: "The Hejaz railway", body: "T.E. Lawrence's Arab forces avoided fortified Ottoman garrisons and raided the railway instead, turning a long supply line into a liability.", realWorld: true },
    ],
  },

  "two-front-war": {
    keyPoints: [
      "Splitting finite resources across fronts weakens both, even when each seems winnable.",
      "Close one front through peace, partnership, or withdrawal before opening another.",
      "A platform migration plus a big launch is a classic internal two-front war.",
      "Two-sided marketplaces often solve the problem by winning one side first.",
    ],
    details: [
      "Germany's strategists dreaded fighting France and Russia at once, and the Schlieffen Plan was designed to defeat France before Russia fully mobilized. It failed, as did the attempt to avoid the problem through a pact with Stalin in the next war. Bismarck's earlier diplomacy had the opposite aim: treaties to ensure that Germany would never face the two together.",
      "Companies face the same arithmetic. Attention, capital, and senior judgment are finite, and each new front takes from the others at a rate nobody budgets for. When Steve Jobs returned to Apple in 1997, he cut the product line sharply and settled long-running disputes with Microsoft, which invested $150 million. Closing that front gave a struggling company room to fight the one that mattered.",
      "Withdrawal can be a strategic win. Uber sold its China business to Didi in 2016 in return for a stake, ending a costly war so it could concentrate elsewhere. Internally, watch for the hidden second front: a platform rewrite, a new pricing model, and a market launch all planned for one quarter. Sequence them, and make sure someone is allowed to say not yet.",
    ],
    applications: [
      { title: "Sequencing migrations", body: "Avoid running a re-platform and a major launch at once. Freeze one, or give each its own isolated team." },
      { title: "Chicken-and-egg markets", body: "OpenTable first signed restaurants with reservation software useful on its own, then attracted diners once there were tables to book." },
      { title: "Competitive focus", body: "Pick one primary rival per segment. Matching every competitor's roadmap creates many fronts and no advantage." },
      { title: "Startup focus", body: "Entering enterprise and consumer markets together means two sales motions and two roadmaps. Few early teams can sustain that." },
    ],
  },

  "trust": {
    keyPoints: [
      "Trust lowers transaction costs, replacing verification, contracts, and monitoring.",
      "It is built slowly through repeated behavior and lost quickly.",
      "Platforms can manufacture trust between strangers with reputation systems.",
      "AI products need calibrated trust, not the maximum amount of trust.",
    ],
    details: [
      "Kenneth Arrow observed in 1972 that virtually every commercial transaction contains an element of trust. Where it is absent, costs rise: lawyers, audits, escrow, and inspection all substitute for it. George Akerlof's market for lemons showed how markets can collapse when buyers cannot tell good from bad. Trust is economic infrastructure, though no balance sheet shows it.",
      "Online platforms turned this into a design problem. Airbnb persuaded strangers to sleep in each other's homes with profiles, reviews, and host guarantees. Inside teams, Google's Project Aristotle found that psychological safety, a concept from Amy Edmondson, was the strongest predictor of team effectiveness. Visible mechanisms make it safer to take a small risk on someone.",
      "Trust is asymmetric: it accumulates through many small kept promises and can vanish in a day. How a company fails matters, as GitLab showed in 2017 by livestreaming its recovery after accidentally deleting production data. AI adds a further dimension. John Lee and Katrina See argue automation needs calibrated trust, so people rely on it when it is right and doubt it when it is not.",
    ],
    applications: [
      { title: "Blameless post-mortems", body: "Google's SRE practice reviews incidents without blame, so people report problems early rather than hiding them." },
      { title: "Public incident reports", body: "Cloudflare publishes detailed outage write-ups quickly, trading short-term embarrassment for long-term credibility." },
      { title: "AI confidence cues", body: "Show sources and uncertainty so people can check an answer. A product that sounds sure when wrong burns trust fast." },
      { title: "Data permissions", body: "Ask for access at the moment it is clearly needed, and explain why. Broad requests at sign-up teach people to assume the worst." },
      { title: "Diamond dealers", body: "New York's diamond trade has long closed large deals on a handshake, because in a tight community a reputation is worth more than any sale.", realWorld: true },
    ],
  },

  "bias-from-incentives": {
    keyPoints: [
      "People respond to what is rewarded, not to what is stated.",
      "Incentives change beliefs as well as actions, often without conscious dishonesty.",
      "Any proxy you reward will eventually be gamed.",
      "Check second-order effects before launching a bounty, quota, or commission.",
    ],
    details: [
      "Charlie Munger called incentives among the most powerful forces in human behavior, and he liked the FedEx story. The company could not get night-shift planes loaded on time until it paid workers per shift rather than per hour. Once people could go home when done, the problem disappeared. Exhortation had failed, and a change to the structure of pay solved it in one move.",
      "The deeper problem is that incentives bend honest judgment. Upton Sinclair observed that it is difficult to get someone to understand something when their salary depends on not understanding it. People rarely feel corrupted; they just find the convenient argument more convincing. A PM rewarded for launches will sincerely believe the launch is ready.",
      "Rewards also get gamed. French authorities in 1902 Hanoi paid a bounty for rat tails, and officials soon found tailless rats still breeding and reports of rat farming. Wells Fargo's cross-selling goals produced millions of unauthorized accounts and a $3 billion settlement in 2020. Goodhart's Law states the rule: when a measure becomes a target, it ceases to be a good measure.",
    ],
    applications: [
      { title: "Sales commissions", body: "Paying on signed contracts alone invites bad-fit deals. Tie a portion to retention or activation, so sales feels the cost." },
      { title: "Promotion systems", body: "If promotion rewards launching new things, maintenance gets neglected. Critics have linked Google's many short-lived products to exactly this dynamic." },
      { title: "Support metrics", body: "Measuring agents by tickets closed rewards fast closure, not solved problems. Pair it with reopen rate." },
      { title: "Reading vendor data", body: "Ask who paid for a study and what they sell. It does not make the study false, but it tells you where to look." },
      { title: "Surgeon scorecards", body: "When New York published cardiac surgery mortality rates, research found signs that some hospitals avoided the sickest patients to protect their numbers.", realWorld: true },
    ],
  },

  "pavlovian-association": {
    keyPoints: [
      "Repeated pairing makes a neutral signal predict a reward or threat.",
      "One bad experience can create a lasting aversion to a product.",
      "Signals lose meaning when they stop predicting anything useful.",
      "Variable rewards sustain habits, which raises real questions of design ethics.",
    ],
    details: [
      "Ivan Pavlov, who won a Nobel Prize in 1904 for research on digestion, noticed dogs salivating before food arrived. They had learned that certain signals predicted a meal. Later work by Wolfram Schultz showed that dopamine neurons respond to the prediction of reward, not only the reward itself. A notification sound can therefore trigger something before you have read a word.",
      "Associations can form fast. John Garcia showed in the 1950s that rats developed a lasting aversion to a taste after a single episode of illness. One failed payment or lost document can attach a similar feeling to a product. Repeated pairing works on the positive side too, which is why a chime, color, or confirmation can carry emotion out of proportion to its design.",
      "The association weakens when a signal stops predicting anything. Psychologists call this extinction, and alert fatigue is its everyday form: hospital staff exposed to constant monitor alarms learn to tune them out. Variable reward schedules, studied by B.F. Skinner, sustain behavior in a way fixed ones do not. That power is a reason for restraint, since a feed built on it can serve compulsion.",
    ],
    applications: [
      { title: "Sound branding", body: "Slack's knock and Netflix's ta-dum are brief signals with strong associations, recognized even when they play in someone else's video." },
      { title: "Notification hygiene", body: "Send only what a user would want to be interrupted for. Each irrelevant ping weakens the link between your badge and value." },
      { title: "First-run experience", body: "Avoid an error or a paywall at first contact. Early experiences attach to the brand and are slow to unlearn." },
      { title: "Success states", body: "A quick, consistent confirmation after an important action teaches people that the product is dependable." },
      { title: "The Intel sound logo", body: "Intel's five-note jingle closes partner ads, so a chip brand nobody sees borrows the appeal of whatever came just before it.", realWorld: true },
    ],
  },

  "envy-jealousy": {
    keyPoints: [
      "Envy wants what others have; jealousy fears losing what you have.",
      "People judge their position relative to peers more than in absolute terms.",
      "Visible comparison motivates some people and demoralizes those near the bottom.",
      "Social products must design for comparison, because it happens anyway.",
    ],
    details: [
      "Charlie Munger joked that it is not greed that drives the world, but envy. Leon Festinger's 1954 social comparison theory explains why: people evaluate themselves by looking at others. The two emotions differ. Envy is about wanting what someone else has, while jealousy is a fear of losing something to a rival. Products trigger the two in different ways.",
      "The workplace evidence is striking. David Card and colleagues randomly gave University of California employees access to a website listing colleagues' salaries. Those paid below the median for their unit reported lower satisfaction and more job searching, while those above it reported no gain. Transparency produced losers without producing winners.",
      "Comparison can also be used well. Opower's home energy reports, showing how people compared with neighbors, cut consumption by about 2%, and adding a smiley face for efficient households stopped them drifting upward. Instagram tested hiding like counts to ease comparison, found mixed effects, and made it optional in 2021. Social design is a matter of choosing who compares with whom.",
    ],
    applications: [
      { title: "Leaderboards", body: "Compare people with a small peer group. Duolingo's leagues keep rank within reach, while a global table would discourage nearly everyone." },
      { title: "Status signals", body: "Follower counts and profile rankings trade on comparison. Use them with care, since status loops can also drive anxiety and churn." },
      { title: "Internal recognition", body: "Public praise for one team can demoralize others. Recognize behaviors that people can copy rather than ranking teams." },
      { title: "Creator metrics", body: "Public counts help audiences but can make people reluctant to post. Consider showing some counts only to the creator." },
      { title: "Relative income", body: "In a 1998 survey by Sara Solnick and David Hemenway, about half of respondents preferred $50,000 with others on $25,000 to $100,000 with others on $200,000.", realWorld: true },
    ],
  },
};
