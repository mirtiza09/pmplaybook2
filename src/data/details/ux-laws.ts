import type { ContentDetail } from "./types";

export const uxLawDetails: Record<string, ContentDetail> = {
  "peak-end-rule": {
    keyPoints: [
      "People judge an experience by its most intense moment and its ending.",
      "Duration barely registers in memory, a bias known as duration neglect.",
      "Satisfaction surveys capture the remembered experience, not the one actually lived.",
      "A strong ending can soften a flawed middle, but rarely erases it.",
    ],
    details: [
      "The finding comes from Daniel Kahneman and colleagues. In a 1993 study, people held a hand in painfully cold water, and most chose to repeat a longer trial whose final 30 seconds were slightly less cold, even though it contained strictly more pain. A later colonoscopy trial found the same pattern: a gentler ending left patients remembering the procedure as less unpleasant.",
      "For product teams, the catch is in evaluation. Kahneman separates the experiencing self from the remembering self, and feedback only ever reaches you from the second. A support score sent right after a resolved ticket measures that final exchange, not the three weeks of friction before it. Interviews, NPS, and app reviews all inherit the same distortion.",
      "It also tells you where polish pays off. You cannot make every screen memorable, so pick the moments that carry the memory: the first time value lands, the worst failure state, and the last step of a flow. An error recovered gracefully can become a peak. A cancellation flow full of obstacles becomes the ending your customer retells.",
    ],
    applications: [
      { title: "Survey timing", body: "Send CSAT at a consistent point and compare like with like. A survey fired seconds after checkout and one fired after delivery are measuring two different memories." },
      { title: "Completion moments", body: "Mailchimp's mascot offers a high-five after a campaign is sent, turning a nervous, irreversible click into a small peak at the moment memory is forming." },
      { title: "Incident recovery", body: "A clear status page, an honest post-mortem, and a proactive credit can reshape how customers remember an outage. The ending stays in your control after the failure." },
      { title: "Offboarding", body: "A respectful cancellation with data export is the last memory a departing user carries, and it decides whether they come back or warn others." },
      { title: "The IKEA exit", body: "IKEA's long, effortful store route ends with cheap hot dogs and ice cream past the tills, an often-cited example of placing a small pleasure at the end.", realWorld: true },
    ],
  },

  "law-of-validation": {
    keyPoints: [
      "This is a working rule, not a formal law: treat beliefs as hypotheses.",
      "Test the assumption that would kill the idea, not the easiest one.",
      "Behavior is evidence; compliments and stated intent are comparatively weak signals.",
      "Most ideas fail to move their target metric, even at sophisticated companies.",
      "Validation answers one specific question and never proves the whole product.",
    ],
    details: [
      "Unlike the psychology laws on this site, this is a practitioner's rule drawn from lean startup and experimentation practice. Its evidence is sobering. Ronny Kohavi's experiments at Microsoft found only about a third of tested ideas improved the metric they targeted; another third were flat and a third made things worse. Smart, informed teams had believed in all of them.",
      "The common failure is validating the wrong thing. Coca-Cola ran close to 200,000 taste tests before launching New Coke in 1985, and the new formula won them. What the tests never measured was attachment to the original, and the old recipe was back within three months. A rigorous answer to the wrong question is worse than none, because it creates false confidence.",
      "So rank assumptions by how fatal they are and how little you know, using Marty Cagan's four risks as a checklist: value, usability, feasibility, and viability. Then choose the cheapest test capable of changing your mind. Write down the result that would kill the idea before you see any data, or you will rationalize whatever comes back.",
    ],
    applications: [
      { title: "Demand before code", body: "Dropbox tested demand with a short demo video before its sync product was widely available, and its beta waitlist reportedly jumped from about 5,000 to 75,000 overnight." },
      { title: "Concierge tests", body: "Zappos began by photographing shoes in local stores and buying them at retail when orders arrived, proving people would buy shoes online before it held any inventory." },
      { title: "Fake-door tests", body: "Add the entry point for an unbuilt feature and measure clicks. Tell people honestly what happened, and remember that a click is far cheaper than a purchase." },
      { title: "Product-market fit survey", body: "Superhuman used Sean Ellis's question, how would you feel if you could no longer use this, and steered its roadmap toward 40% answering very disappointed." },
      { title: "Clinical trials", body: "Drug development staggers safety, dosing, and efficacy questions into phases, so each stage buys just enough evidence to justify the next, far larger bet.", realWorld: true },
    ],
  },

  "law-of-divergence-and-convergence": {
    keyPoints: [
      "Generating options and judging options are separate modes that interfere with each other.",
      "Groups usually fail by converging too early, then defending the first idea.",
      "The uncomfortable stretch between the two modes is where real alignment forms.",
      "People generate more distinct ideas alone than in a live group brainstorm.",
      "Convergence needs an owner, criteria, and a deadline, or debate never ends.",
    ],
    details: [
      "Psychologist J.P. Guilford distinguished divergent from convergent thinking in the 1950s: one widens the set of possibilities, the other narrows it to an answer. Both are necessary, and they sabotage each other when run at once. Critique in a generating session shuts down unusual ideas. Speculation in a deciding session reopens questions that were meant to be settled.",
      "Classic brainstorming gets this only half right. Research dating back to 1958 shows that people who work alone and then pool ideas outperform the same number brainstorming aloud, because only one person can speak at a time and everyone anchors on whoever goes first. So diverge silently, then use the group for what it does well: combining, challenging, and choosing.",
      "Sam Kaner's facilitation model names the hard part the groan zone: the stretch between having many options and agreeing on one, when people misunderstand each other and the meeting feels broken. Teams often escape it by adopting the loudest or most senior view. Treat that discomfort as the work itself, and say out loud which mode the group is in.",
    ],
    applications: [
      { title: "Design sprints", body: "The Google Ventures sprint has each person sketch alone, including rapid Crazy 8s, then narrows through silent dot voting and a single named Decider." },
      { title: "Async RFCs", body: "Open a document to gather alternatives with a fixed comment window, then close it with a written decision. The deadline stops an RFC becoming a permanent debate." },
      { title: "Roadmap planning", body: "Collect opportunities for a week without debating them, then score against agreed criteria in a separate session, so ideas are not killed by whoever is in the room." },
      { title: "Working with AI models", body: "Ask for several genuinely different approaches before asking for an implementation. Going straight to the answer converges on the first plausible idea." },
      { title: "Differential diagnosis", body: "Doctors list every plausible cause before ruling any out. Premature closure, settling on the first diagnosis that fits, is a recognized source of medical error.", realWorld: true },
    ],
  },

  "law-of-technical-debt": {
    keyPoints: [
      "Debt is a deliberate trade, not a synonym for sloppy code.",
      "Interest is only charged on code you keep changing; dormant debt costs little.",
      "Cunningham's metaphor concerned shipping before your understanding of the problem matured.",
      "Debt hides inside delivery slowdowns, so express its interest in business terms.",
      "Small rational deferrals can compound into failures that threaten the company.",
    ],
    details: [
      "Ward Cunningham coined the metaphor in 1992 to explain refactoring to a finance client. His point was specific: ship with your current understanding, learn, then rework the code to reflect what you learned. He later objected to its use as an excuse for poor code. Martin Fowler's quadrant sharpens this, separating prudent from reckless debt and deliberate from accidental.",
      "The interest analogy is more precise than most teams use it. A messy module nobody touches charges nothing, while a slightly awkward abstraction in the checkout path charges every sprint. Cleanup should therefore follow change frequency rather than ugliness. Repository history combined with defect data usually reveals a handful of files absorbing most of the cost.",
      "The tail risk is real. Knight Capital lost over $460 million in about 45 minutes in 2012 after a deployment missed one server and reactivated dormant code. Southwest's 2022 holiday meltdown canceled nearly 17,000 flights, with aging crew-scheduling software at its center. Neither began with a dramatic decision. Both grew from sensible deferrals that compounded out of sight.",
    ],
    applications: [
      { title: "Planned feature freezes", body: "LinkedIn halted new features for about two months in 2011, in Operation InVersion, to rebuild its infrastructure and deployment. It bought a far faster release process." },
      { title: "Capacity allocation", body: "Reserve a fixed share of every cycle for maintenance instead of negotiating each item. Google's SRE model caps toil at 50% of an engineer's time for similar reasons." },
      { title: "Hotspot analysis", body: "Cross change frequency from git with incident and bug counts. A file high on both is where repayment earns the best return." },
      { title: "Debt register", body: "When you take a shortcut on purpose, record the trigger for repaying it, such as before we pass 10,000 tenants. Unrecorded debt quietly turns deliberate into accidental." },
      { title: "Aircraft maintenance", body: "Airlines do not negotiate inspections against passenger demand; flight hours trigger them automatically. That is what scheduled repayment looks like when failure is unaffordable.", realWorld: true },
    ],
  },

  "law-of-customer-retention": {
    keyPoints: [
      "The popular 5% retention, 25-95% profit figure is illustrative, not universal.",
      "Retention compounds because each retained cohort stacks on those before it.",
      "A retention curve that flattens signals fit; one reaching zero does not.",
      "Retention is an outcome of delivered value, not of a retention program.",
      "Expansion revenue can make existing customers outgrow new customer acquisition.",
    ],
    details: [
      "The idea traces to Frederick Reichheld and W. Earl Sasser's 1990 Harvard Business Review article, which showed modest cuts in defection producing outsized profit gains in banking, insurance, and auto service. It is a fine directional argument but a weak law: the quoted range varies by retelling, and critics such as Byron Sharp note it assumed retention improvements came free.",
      "The stronger argument is structural. Acquisition is paid for once, while a retained customer keeps earning, refers others, and usually gets cheaper to serve. Retention also sets a ceiling on growth: because losses are a percentage of your base and sign-ups are not, the two eventually meet and growth stalls. Improving retention raises that ceiling for every future cohort.",
      "Read retention by cohort and by shape rather than as one percentage. If the curve flattens, you have found people who keep getting value, and the job becomes finding more of them. If it decays toward zero, you have a product problem that acquisition will only make more expensive. Then look for the early behavior that separates the two groups.",
    ],
    applications: [
      { title: "Activation thresholds", body: "Stewart Butterfield said Slack teams that had exchanged around 2,000 messages almost always stayed, giving onboarding a concrete target instead of a vague aspiration." },
      { title: "Net revenue retention", body: "Snowflake reported 158% net revenue retention at its 2020 IPO. Usage-based pricing meant its existing customers alone could grow revenue sharply." },
      { title: "Cohort diagnosis", body: "Split retention by acquisition channel before changing the product. A channel delivering poor-fit customers can look exactly like a product retention crisis." },
      { title: "Trust over easy revenue", body: "Netflix began canceling long-inactive subscriptions in 2020. It gave up payments from under 0.5% of members to avoid charging people for nothing." },
      { title: "Costco memberships", body: "Costco renews around 90% of its US and Canadian members, and fees make up much of its profit, which ties its incentives to keeping shoppers happy.", realWorld: true },
    ],
  },

  "law-of-feedback-loops": {
    keyPoints: [
      "Learning speed is set by the gap between action and consequence.",
      "Expert intuition only forms where feedback is prompt, regular, and clear.",
      "A fast loop carrying a noisy signal teaches the wrong lesson quickly.",
      "Delivery speed and stability rise together when teams work in small batches.",
      "A loop only closes when someone changes behavior because of the result.",
    ],
    details: [
      "Daniel Kahneman and Gary Klein, who disagreed about much, agreed on when intuition can be trusted: in environments with regular patterns and prompt, clear feedback. Anesthesiologists get that, while stock pickers do not. Product strategy sits closer to stock picking, since a decision can take a year to show results amid market noise. Shortening the loop is how judgment gets built at all.",
      "The DORA research behind the book Accelerate found that top software teams deploy more often, recover faster, and have lower change failure rates. Speed and stability rise together because small batches are easier to reason about and cheaper to reverse. Long release trains do the opposite, bundling so many changes that no outcome can be traced to a cause.",
      "Speed alone is not enough. Ask what each loop actually measures, how long it takes to report, and who changes course as a result. Many teams have excellent CI and a two-quarter gap between shipping a feature and learning whether anyone used it. That second loop, from release to customer outcome, is the one most product organizations leave open.",
    ],
    applications: [
      { title: "Progressive delivery", body: "Release behind a flag to 1% of users, watch guardrail metrics, then ramp up. Each launch becomes a fast, reversible experiment." },
      { title: "Experimentation at scale", body: "Booking.com runs over 1,000 concurrent experiments, so teams learn from live behavior rather than waiting for a release review to argue about it." },
      { title: "CI pipeline speed", body: "A five-minute and a 40-minute pipeline differ in kind. Developers stay in context with the first, and switch tasks during the second, delaying every fix." },
      { title: "Post-launch reviews", body: "Book a review 30 days after launch at the same time you set the launch date, with the target metric agreed in advance. Otherwise the loop stays open." },
      { title: "The andon cord", body: "Toyota lets any line worker stop production on spotting a defect, so the problem is examined where and when it happened, not at final inspection.", realWorld: true },
    ],
  },

  "brooks-law": {
    keyPoints: [
      "New people temporarily subtract capacity, because existing experts must train them.",
      "Communication paths grow quadratically with team size, as n(n-1)/2.",
      "The law applies to interdependent work, not to easily partitioned tasks.",
      "Brooks himself called the law an outrageous oversimplification, though a useful one.",
      "Reducing dependencies usually beats adding people when a project runs late.",
    ],
    details: [
      "Fred Brooks wrote the law in The Mythical Man-Month in 1975, after managing IBM's OS/360. Two costs drive it. Newcomers take time to become productive and consume the time of those already delivering. Then coordination grows: five people have 10 communication paths, while 15 people have 105. His famous line: childbearing takes nine months, however many women are assigned.",
      "The law is often quoted too broadly. Brooks applied it to tasks with complex interrelationships, and cheerfully described it as an outrageous oversimplification. Work that can be partitioned, like data labeling, translation, or integrations against a stable API, scales far better. Steve McConnell argued in 1999 that careful project control can limit the damage.",
      "The useful question is not whether to add people but what the organization looks like afterward. Amazon's two-pizza teams and API-first architecture reduced the need to coordinate rather than improving coordination itself. If a late project is genuinely stuck, removing scope, removing dependencies, or moving someone off the critical path usually helps more than adding anyone to it.",
    ],
    applications: [
      { title: "Rescue decisions", body: "Before adding engineers, map what only one person can do and what can be done independently. If the remaining work cannot be divided, more people will slow it." },
      { title: "Two-pizza teams", body: "Amazon kept teams small enough for two pizzas to feed them and connected them through APIs, so most work needs no cross-team conversation." },
      { title: "Hiring ramps", body: "Stagger hires and count onboarding as a real capacity cost. A plan adding 10 engineers in a quarter also quietly removes your seniors' attention." },
      { title: "Open-source scaling", body: "Linux reached thousands of contributors because modular design and a maintainer hierarchy limit who must talk to whom. Architecture changes the law's constant." },
      { title: "Restaurant kitchens", body: "Extra cooks on a small line during a rush slow plates down until each has a separate station. Too many cooks is the same law.", realWorld: true },
    ],
  },

  "iron-triangle-law": {
    keyPoints: [
      "Fix any two of scope, time, and cost; the third must move.",
      "Quality is the hidden fourth variable absorbing whatever pressure gets denied.",
      "Agile inverts the default by fixing time and cost, varying scope.",
      "External deadlines are real constraints; internally invented ones are negotiable choices.",
    ],
    details: [
      "Martin Barnes drew the triangle in 1969 for a course on project cost and time control, and it became standard project management language. Its value is as a negotiating tool. When a stakeholder adds scope without moving the date or budget, the triangle names what is actually being asked for, and someone has to say out loud which constraint gives.",
      "In practice the fourth variable is quality. When scope, date, and budget are all locked, the slack comes from testing, security, or maintainability, and nobody has to approve that trade. Healthcare.gov launched in 2013 with a statutory date and full scope, and only a handful enrolled on day one. Cyberpunk 2077 shipped so broken that Sony pulled it from its store.",
      "Waterfall fixed scope and let time and cost float. Agile and Shape Up flip that: the team and calendar stay fixed, and scope is cut to fit. This only works if scope is negotiated as outcomes. Must ship login is rigid, whereas returning users can get in securely leaves room for a magic link instead of a full password system.",
    ],
    applications: [
      { title: "Scope negotiation", body: "When a request lands mid-cycle, ask what comes out to make room. Making every addition a visible swap is the simplest use of the model." },
      { title: "Fixed-date launches", body: "Conferences and regulatory deadlines make time immovable, so agree a ranked list of cut lines before the pressure arrives, not during the final week." },
      { title: "Vendor contracts", body: "Fixed-price, fixed-scope deals push risk into quality, the one thing they leave unmeasured. Put acceptance criteria in the contract or expect the vendor to spend it." },
      { title: "Sydney Opera House", body: "Budgeted at A$7 million over four years, it took 14 years and A$102 million. Scope and quality held while everything else moved, and it became a World Heritage site.", realWorld: true },
    ],
  },

  "law-of-early-testing": {
    keyPoints: [
      "Defects get costlier as more work is built on top of them.",
      "The famous 100x cost figure has weak evidence and varies by system.",
      "The cheapest defects to catch are wrong requirements and wrong assumptions.",
      "Early testing means faster feedback, not writing more test documents.",
      "Shifting left complements production monitoring; it does not replace it.",
    ],
    details: [
      "This is one of the seven principles of software testing taught by ISTQB, and it draws on Barry Boehm's work showing defect costs rising through a project's lifecycle. The mechanism is intuitive. A flawed assumption is easy to fix in a conversation, harder in a design, harder again in code, and expensive once customers, data, and other systems depend on it.",
      "The numbers deserve skepticism. Laurent Bossavit traced the widely shared chart crediting an IBM Systems Sciences Institute study and found course notes, not research. Boehm and Victor Basili reported about 100:1 for large systems but closer to 5:1 for small, noncritical ones. Modern deployment narrows the gap, so the slope depends on how easily you can ship a fix.",
      "The principle survives in a different shape. Cost rises most for decisions that become hard to reverse: data models, public APIs, security, and compliance. Those deserve early scrutiny, while a copy change can safely wait for production data. Spend testing effort in proportion to irreversibility, and remember that the earliest test of all is checking the requirement with a user.",
    ],
    applications: [
      { title: "Design reviews", body: "Review schemas and threat models before building. A data model fixed in review costs a meeting; the same fix after launch costs a migration." },
      { title: "Contract tests", body: "Verify API contracts in CI so integration failures surface in minutes. Google's testing guidance favors many small tests over a few large end-to-end ones." },
      { title: "Prototype testing", body: "Put a clickable prototype in front of five users before sprint planning. It catches wrong mental models while the fix is still redrawing a screen." },
      { title: "Type checks and linters", body: "Editors that flag errors as you type are the cheapest form of shifting left, catching whole classes of bugs before a commit exists." },
      { title: "Mars Climate Orbiter", body: "NASA lost the $125 million spacecraft in 1999 because one team's software output imperial units and another expected metric. A ground interface check would have caught it.", realWorld: true },
    ],
  },

  "aesthetic-usability-effect": {
    keyPoints: [
      "Attractive interfaces are rated easier to use, even before anyone uses them.",
      "Beauty buys tolerance for small problems, not immunity from serious ones.",
      "The effect can mask real issues during usability tests, so watch behavior.",
      "Visual polish works as a trust signal during the first impression.",
    ],
    details: [
      "Masaaki Kurosu and Kaori Kashimura of Hitachi's Design Center tested ATM layouts in 1995 and found perceived ease of use tracked visual appeal more closely than actual ease of use. Noam Tractinsky and colleagues later found the same link in Israel, including after people had used a system, in a paper titled What Is Beautiful Is Usable. Perception is not performance.",
      "The danger runs in a direction teams rarely consider. Because polished prototypes earn forgiveness, usability test participants may blame themselves and report that everything was fine. Nielsen Norman Group warns this can hide real problems. Treat praise as a sentiment measure and rely on task completion, errors, and hesitation for evidence of usability.",
      "The effect matters most at first contact, when users cannot yet judge capability. In Stanford research on web credibility, nearly half of consumers' comments about trustworthiness referred to visual design. Polish therefore works as a proxy for competence in payments, health, and other high-stakes categories. Beauty earns a second look; function decides whether people stay.",
    ],
    applications: [
      { title: "Trust-sensitive flows", body: "Payment and onboarding screens deserve your highest visual care. A rough card form reads as a fraud risk even when it is technically secure." },
      { title: "Testing low fidelity first", body: "Use wireframes when you want critique of structure, since people feel free to criticize what looks unfinished and tend to protect what looks done." },
      { title: "Category differentiation", body: "Linear won attention in a crowded issue-tracking market partly through speed and visual craft, making older rivals feel dated before any feature comparison began." },
      { title: "Reading redesign metrics", body: "A reskin can lift satisfaction with no change in task success. Track both, or a coat of paint will be reported as a usability win." },
      { title: "Plated food", body: "In a 2014 study, diners rated the same salad as tastier and worth more when it was arranged like a Kandinsky painting.", realWorld: true },
    ],
  },

  "doherty-threshold": {
    keyPoints: [
      "Below roughly 400ms, people stay in flow and stop consciously waiting.",
      "The threshold is a practical rule of thumb, not a biological constant.",
      "Perceived speed can be engineered separately from actual speed.",
      "Instant is not always best: visible effort can increase trust in results.",
    ],
    details: [
      "Walter Doherty and Arvind Thadhani published their IBM research in 1982, when two seconds was the accepted standard for system response. They showed productivity climbing as response times fell below a second, challenging the idea that faster was wasted. The 400ms figure is the usual summary of that work, though Kent Beck and others treat it as a practical marker, not a cognitive limit.",
      "Speed is a product feature with measurable consequences. Google's 2009 experiments showed delays of 100 to 400ms cut searches per user by 0.2 to 0.6%, and the effect lingered after the delay was removed. Superhuman made a 100ms target for every action part of its positioning. Google's own Interaction to Next Paint standard treats 200ms as good responsiveness.",
      "Perception offers a second lever. Optimistic UI, skeleton screens, and doing work before it is requested all shorten the felt wait without touching the server. The opposite also holds: Ryan Buell and Michael Norton's labor illusion research found people value a service more when they can see work happening. Streaming AI output shows both ideas, making a slow answer feel alive.",
    ],
    applications: [
      { title: "Optimistic actions", body: "Like buttons and message sends update instantly and reconcile with the server afterward. Failure is rare enough that the interface can assume success." },
      { title: "Working ahead of the user", body: "Instagram began uploading photos in the background before people pressed Share, so posting felt immediate because the real work was already finished." },
      { title: "Local-first software", body: "Linear keeps a local copy of workspace data and syncs in the background, making navigation and edits feel effectively instant." },
      { title: "Streaming AI responses", body: "Streaming tokens cuts time to first feedback even when full generation takes many seconds, keeping people engaged through a long wait." },
      { title: "Houston baggage claim", body: "Facing complaints about waits, Houston's airport moved arrival gates further from the carousels. People walked longer, stood idle less, and complaints fell sharply.", realWorld: true },
    ],
  },

  "fitts-law": {
    keyPoints: [
      "Pointing time depends on the distance to a target and its size.",
      "Screen edges and corners behave like infinitely deep, fast targets.",
      "On touch screens, thumb reach and finger width replace mouse precision.",
      "The law can be inverted to protect people from dangerous actions.",
    ],
    details: [
      "Paul Fitts published the law in 1954 after measuring how fast people could tap between two metal strips. Movement time grows with the logarithm of distance divided by width, so doubling both a target's distance and its size leaves pointing time unchanged. The logarithm also means returns diminish quickly: enlarging a tiny button helps far more than enlarging an already comfortable one.",
      "Some of the best applications exploit geometry rather than size. A cursor stops at the screen edge, so the Mac menu bar has effectively infinite depth and can be hit with one fast flick. Context menus work for the opposite reason, appearing where the pointer already is and reducing distance to nearly zero. Layout is therefore a speed decision, not only a visual one.",
      "Mobile changes the inputs. Steven Hoober's 2013 observations of 1,333 people found 49% held phones one-handed, and he later warned against treating his thumb zones as rigid rules. Accessibility standards set the lower bound: WCAG 2.2 requires pointer targets of at least 24 by 24 CSS pixels at level AA, with some exceptions. Target size is about motor access, not merely styling.",
    ],
    applications: [
      { title: "Primary actions", body: "Make the next step the largest nearby target and place it where attention just ended. A button after the last field beats one in a distant header." },
      { title: "Mobile navigation", body: "Bottom tab bars and sheets moved controls into thumb reach as phones grew, leaving the top-left hamburger menu among the hardest spots to reach." },
      { title: "Protective friction", body: "Keep Delete account away from common actions and modest in size. Apply the law in reverse when a mistake is expensive." },
      { title: "Full-row hit areas", body: "Make an entire list row clickable rather than just its label. The design looks identical, and the target becomes many times larger." },
      { title: "Car cockpits", body: "Finding a touchscreen icon at speed is a pointing task under vibration. Euro NCAP's 2026 protocol awards points for physical indicator, hazard, wiper, horn, and SOS controls.", realWorld: true },
    ],
  },

  "hicks-law": {
    keyPoints: [
      "Decision time grows logarithmically with the number of options, not proportionally.",
      "It applies to equally likely, unfamiliar choices; practiced experts largely bypass it.",
      "Organizing choices into groups can work better than removing them.",
      "The famous jam study's choice overload effect has proved surprisingly unreliable.",
    ],
    details: [
      "William Edmund Hick and Ray Hyman showed in 1952 and 1953 that reaction time rises with the information in a choice, at roughly log2(n+1). The logarithm is the part people forget. Moving from 2 to 4 options costs more than moving from 20 to 22, and a well-sorted long list scans efficiently because people discard whole categories rather than check each item.",
      "The law is often confused with choice overload. In the famous jam study, Sheena Iyengar and Mark Lepper found shoppers were more likely to buy from 6 jams than from 24, yet a 2010 meta-analysis of 50 experiments by Benjamin Scheibehenne and colleagues found a mean effect of virtually zero. Whether more choice hurts depends on expertise, clear preferences, and how comparable the options are.",
      "So the design question is rarely how few options to offer. It is how much effort deciding takes. Recommended plans, sensible defaults, progressive disclosure, and good grouping cut that effort while preserving range. Frequent users behave differently from newcomers, since shortcuts and muscle memory remove the decision entirely. A dense professional tool can be exactly right for its audience.",
    ],
    applications: [
      { title: "Pricing pages", body: "Highlighting one recommended plan turns a comparison of every feature into a quick decision to confirm or adjust." },
      { title: "Command palettes", body: "VS Code and Linear expose hundreds of actions through one search box. The command count grows while the decision stays a single typed intent." },
      { title: "Streaming discovery", body: "Netflix researchers reported that members lose interest after about 60 to 90 seconds of choosing, which is why ranking matters more than catalog size." },
      { title: "Smart defaults", body: "Preselect the most common configuration during setup, so most people make one decision and experts can still change everything later." },
      { title: "Aldi's short range", body: "Aldi stocks a couple of thousand products against a typical supermarket's tens of thousands. Shoppers decide quickly and the chain gains buying power per item.", realWorld: true },
    ],
  },

  "jakobs-law": {
    keyPoints: [
      "People arrive with expectations formed elsewhere, and familiar patterns cost nothing to learn.",
      "Every deviation must repay its learning cost with a clearly felt benefit.",
      "Redesigning a habit punishes your most loyal users first.",
      "Adopting a category's conventions can be a wedge against the incumbent.",
    ],
    details: [
      "Jakob Nielsen stated the idea in 2000: users spend most of their time on other sites, so those sites define what they expect from yours. Conventions such as a logo linking home or a cart at the top right are shared infrastructure. Everyone benefits, because nobody pays the learning cost twice, and your product is one small part of someone's day.",
      "This is not an argument against innovation. It is a pricing model for it. Every departure from convention charges users attention, and you must return more value than you charge. TikTok's full-screen feed broke norms and paid for it with relevance. Snapchat's 2018 redesign moved muscle memory around with no obvious benefit, and over a million people signed a petition against it.",
      "Familiarity also works as a competitive weapon. A challenger that copies the incumbent's shortcuts and file formats erases the switching cost it would otherwise face. Cursor forked VS Code, so developers kept their extensions and keybindings on day one. Copy a category's grammar, then differentiate on the one thing that matters.",
    ],
    applications: [
      { title: "Switching from a rival", body: "Figma imported Sketch files and kept familiar design-tool conventions, which lowered the cost of leaving the incumbent before its multiplayer advantage even mattered." },
      { title: "Checkout flows", body: "Use standard layouts here. Nobody wants to explore during payment, so novelty in a checkout is a straight tax on revenue." },
      { title: "Redesign rollouts", body: "Offer an opt-in period and measure existing users' task time. Reddit kept old.reddit.com available after its 2018 redesign for exactly this reason." },
      { title: "Platform conventions", body: "Follow iOS and Android patterns in each app rather than shipping one design. Back gestures and share sheets are expectations the operating system set." },
      { title: "Gear selectors", body: "Fiat Chrysler recalled over a million vehicles in 2016 after a novel electronic shifter left drivers unsure whether the car was in park.", realWorld: true },
    ],
  },

  "law-of-common-region": {
    keyPoints: [
      "A shared boundary groups items more strongly than nearness or similarity alone.",
      "A border, background, or shadow can override conflicting spacing cues.",
      "Every container adds visual weight, so enclose only what needs grouping.",
      "Nested containers quickly become noise; prefer a single level of enclosure.",
    ],
    details: [
      "Stephen Palmer described common region in 1992 as an addition to the Gestalt principles. In his experiments, elements sharing an enclosure were grouped together even when items outside it were closer or more alike. The eye treats a boundary as a strong, low-effort signal that things belong together, which is why a simple background change can restructure an entire page.",
      "That makes enclosure a powerful but expensive tool. Cards, panels, and tinted sections are strong signals, so too many of them flatten hierarchy: when everything sits in a box, no box stands out. Cards nested inside cards add lines without adding information. Before drawing a border, test whether spacing alone carries the grouping, and keep enclosure for items that must read as one unit.",
      "Common region also does semantic work. A card implies everything inside shares a fate: one click target, one owner, one state. If a card holds a link, a status, and a destructive button with different scopes, the boundary is making a false promise. Use regions to express the actual data model, so what looks together also behaves together.",
    ],
    applications: [
      { title: "Settings screens", body: "iOS Settings uses inset grouped lists to separate related toggles, so a long page can be scanned block by block rather than line by line." },
      { title: "Kanban columns", body: "Tinted lanes make cards read as belonging to a state, even as the number of cards in each column varies wildly." },
      { title: "Pricing tiers", body: "An enclosing column ties a price to its features, and a highlighted region marks the recommended plan with no extra copy." },
      { title: "Dashboard filters", body: "Enclose charts that answer one question inside a region with a shared title and date filter, so people can see exactly what the filter controls." },
      { title: "Boarding passes", body: "Ruled boxes separate gate, seat, and time so a traveler can find each fact at a glance while walking through an airport.", realWorld: true },
    ],
  },

  "law-of-proximity": {
    keyPoints: [
      "Distance is information: closer elements are read as related.",
      "Whitespace can replace most of the lines and dividers in a layout.",
      "A label must sit closer to its own field than to neighbors.",
      "Ambiguous spacing makes users work out relationships the design should state.",
    ],
    details: [
      "Proximity is one of the Gestalt grouping principles set out by Max Wertheimer in the 1920s. The visual system reads spacing before it reads words, so a page communicates its structure before anyone understands its content. That makes spacing a form of information architecture. Evenly distributed elements tell users that nothing is related, however clear the copy happens to be.",
      "The rule that follows is simple: space within a group should be smaller than space between groups. Refactoring UI calls the failure ambiguous spacing, as when a form label floats midway between two inputs. Spacing scales help by making relationships systematic. A 4 or 8 point system is not mere tidiness; it creates distinct, repeatable levels of relatedness.",
      "Proximity also creates false relationships. Place a destructive button beside Save and you imply they are siblings. The stakes can be high: researchers estimated that Palm Beach County's 2000 butterfly ballot led more than 2,000 Democratic voters to choose Pat Buchanan by mistake, because its staggered layout paired names and punch holes ambiguously. Bush's Florida margin was smaller.",
    ],
    applications: [
      { title: "Forms", body: "Keep each label tight to its input with larger gaps between fields, and use a larger gap again between sections such as billing and shipping." },
      { title: "Search results", body: "Google keeps a result's title, URL, and snippet close with a wider gap between results, so a page of text parses with no dividers." },
      { title: "Inline validation", body: "Show an error directly beside its field. A summary at the top of the page makes people map each message back themselves." },
      { title: "Dangerous actions", body: "Separate Delete from Save with space or a different section. Adjacency invites misclicks and implies the two actions carry equal weight." },
      { title: "Stove controls", body: "Don Norman's classic example: knobs laid out like the burners need no labels, while a straight row forces people to read or guess.", realWorld: true },
    ],
  },

  "parkinsons-law": {
    keyPoints: [
      "Work expands to fill available time when nothing external constrains it.",
      "The original essay satirized bureaucratic growth rather than offering a productivity tip.",
      "Shorter deadlines raise output only when the work can actually fit.",
      "Fix the time and flex the scope instead of padding the estimate.",
    ],
    details: [
      "C. Northcote Parkinson opened a satirical Economist essay in 1955 with the line that became the law. His real target was bureaucracy: Britain's Admiralty, he noted, gained officials while its ships and sailors shrank. Officials, he argued, multiply subordinates and then make work for each other. That organizational version is at least as useful to product leaders as the personal productivity one.",
      "The effect has empirical support. In a 1967 study, James Bryan and Edwin Locke found that people given more time than necessary worked more slowly on the same task. Eliyahu Goldratt named a related failure, student syndrome, where people spend the buffer in an estimate by starting late. Padding an estimate therefore rarely adds safety; it tends to just move the start date.",
      "The countermeasure is a constraint that shapes the work, not mere pressure. A time box forces a decision about what matters, while an arbitrary deadline without authority over scope only produces overtime and shortcuts. The law has engineering cousins too: software grows to fill its memory, and data grows to fill its storage. Hard budgets are how a team resists expansion.",
    ],
    applications: [
      { title: "Time-boxed cycles", body: "Shape Up sets an appetite of at most six weeks and cuts scope to fit. A team can reshape the project, but it cannot extend it." },
      { title: "Performance budgets", body: "Set a ceiling on JavaScript bundle size and enforce it in CI. Without a hard limit, page weight grows until users feel it." },
      { title: "One-day prototypes", body: "A prototype built in a day often answers the same question as a three-week spec, because there is no time to polish unvalidated details." },
      { title: "Approving headcount", body: "Ask what specifically stops working if a role stays unfilled. Parkinson's point was that organizations generate work for the people they already have." },
      { title: "Student deadlines", body: "Dan Ariely and Klaus Wertenbroch found students given evenly spaced external deadlines outperformed those free to set their own or facing one final date.", realWorld: true },
    ],
  },
};
