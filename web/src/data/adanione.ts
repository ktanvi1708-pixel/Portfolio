export const title = 'AdaniOne — UX Research & Usability Study';
export const byline = 'Adani Digital Labs | UX Research Challenge | 2 Weeks | Solo Researcher';

export const insightReportHref = '/work/adanione/adanione-insight-report.pdf';
export const researchBoardHref = 'https://tinyurl.com/uhj75urw';

export const introParagraph =
  "A UX research challenge set by Adani Digital Labs - to evaluate high-impact user journeys for India's largest airport super app. Received senior-level validation that the work showed the thinking of a mid/senior researcher, was genuinely empathetic, and saw the product as a physical/digital ecosystem rather than a screen.";

export const statLine = 'Launched in December 2022. Rated 4.4 on Google Play and has 1M+ downloads.';

export const projectBriefParagraph =
  "AdaniOne is Adani Group's all in one travel and airport super app - unifying flight bookings, airport services, duty-free shopping, F&B pre-ordering, lounges, rewards and payments into a single digital experience.";

export const understandingProductParagraph =
  "Before researching users, I mapped the product completely — its 7 core problem areas, its full feature taxonomy, and critically, what AdaniOne does that no competitor can. Key competitive finding: flight bookings, hotel bookings, and bus/train bookings offer no real uniqueness — MakeMyTrip and Cleartrip already do this. AdaniOne's real differentiation lies in airport-specific operational data across 7 Adani airports, the only full airport services stack in one place, an earn-and-burn loyalty loop tying infrastructure + travel + retail, and deep consistency across multiple Adani-owned airports that nobody else can replicate.";

export const whyDepthParagraph =
  'Rather than covering the entire app at surface level, I made a deliberate decision to go deep on four journeys only: flight booking, payments and refunds, airport F&B ordering, and lounge access. These were selected because they involve money, physical fulfilment, or time-sensitive access — the moments where users have the least margin for error and where a single failure has a disproportionate impact on trust.';

export const pullQuote = 'The biggest challenge was not finding issues — it was deciding what to focus on and what to leave out.';

export const whoAreUsersIntro = 'I identified 5 distinct user archetypes through behavioural and contextual analysis:';

export const researchApproach = [
  {
    title: 'Review Mining',
    text: 'Analysis of Play Store and App Store reviews to surface recurring pain points at scale. Pattern, not anecdote.',
  },
  {
    title: 'Task-Based Usability Testing',
    text: 'Step-by-step execution of real user flows across flight booking, payment interruption, retry and rebooking, refund visibility, and F&B ordering. I tracked not just whether tasks were completed, but how users felt while doing them — pauses, rereads, repeated taps, visible tension during payment steps.',
  },
  {
    title: 'Journey Mapping',
    text: 'Full documentation of happy paths and non-happy paths across all four journeys, mapped to screen level. Blue = happy path. Red = failure/non-ideal path.',
  },
  {
    title: 'Heuristic Evaluation',
    text: "Issues mapped against Nielsen's 10 usability principles, focusing on system status visibility, error prevention and recovery, and cognitive load reduction.",
  },
];

export const whatIFoundIntro = 'What I Found - 4 Journeys:';

export const journeys = [
  {
    title: 'Payments & Refunds',
    text: "Users are not angry about how long refunds take. They are anxious because they don't know what is happening. Unclear timelines, no real-time status, and ambiguity after failed payments create anxiety and repeated support attempts. Users are more concerned about not knowing than about speed itself.",
  },
  {
    title: 'Flight Booking',
    text: "The 'Pending' state after payment interruption is the single most trust-damaging moment in the app. No explanation of seat hold behaviour or timeout logic. Users fear losing seats or price changes during retry. System behaviour appears logical internally but is completely unpredictable to users due to missing communication.",
  },
  {
    title: 'Airport F&B',
    text: 'Items available in the app are frequently unavailable at the counter. Users are asked to order manually on arrival. Digital-physical mismatch breaks trust immediately, regardless of how good the UI looks.',
  },
  {
    title: 'Lounge Access',
    text: 'Forced app dependency during time-sensitive airport moments creates stress rather than convenience. Mandatory app dependency reduces perceived value in premium experiences.',
  },
];

export const centralInsightHeading = 'The Central Insight - Experience Ownership VS System Ownership';

export const centralInsightParagraphsA = [
  "AdaniOne is not a single self-contained product. It is a multi-partner orchestration platform — bringing together airlines, payment gateways, ICICI Bank, Cleartrip, Uber, ONDC, UPI/NPCI, airport vendors, lounge providers, restaurant POS systems, Google Maps, and IRCTC. 12 external systems identified across the core journeys.",
  "From a user's perspective, these dependencies are completely invisible. The app is perceived as a single promise. When anything breaks — regardless of which partner caused it — the blame lands on AdaniOne.",
];

export const ownershipDistinction = [
  { label: 'System ownership:', text: 'Who controls payments, inventory, refunds (May lie with partners)' },
  { label: 'Experience ownership:', text: 'What users see, understand and feel (Always lies with AdaniOne)' },
];

export const ownershipContrast = ['Technical success ≠ Perceived success.', 'Operational recovery ≠ Emotional recovery.'];

export const centralInsightParagraphB =
  'The highest-leverage UX improvements do not require replacing partners or rebuilding systems. They require clear communication of system states, transparent explanation of delays and retries, predictable recovery paths, and ownership of the experience narrative — even when the underlying system is external.';

export const journeyMapsParagraph =
  'Full task-based journey maps produced for flight booking one-way and return, and F&B pre-order at counter and at gate — documenting both happy and non-happy paths to screen level, capturing system behaviour, user expectations, and emotional response at each step.';

export const severityRiskParagraph =
  'This prioritisation reflects severity of impact when failures occur — not frequency of complaint alone. It tells leadership where to act first, not just what is broken.';

export const howImpactIntroParagraph =
  'The research bridges the gap between how the app is built and how users actually experience it, ensuring design decisions are driven by real usability insights rather than assumptions.';

export const reflectionParagraphs = [
  'Throughout the research I kept returning to two questions: where would a breakdown cause the highest loss of trust? and is the system giving the user enough confidence about what is happening?',
  'Beyond task completion, I tracked emotional cues - pauses, repeated taps, out-loud questions, and the relief users expressed only after seeing explicit confirmation. In several cases users completed the task successfully but still felt uncertain. That gap between system success and user confidence is where the real research lives.',
];

export const whatIdDoDifferentlyParagraph =
  'More diverse users including first-time travellers, more open-ended tasks giving goals rather than steps, and more time observing post-booking behaviour around refund confidence.';

export const closingQuote =
  "Users are often willing to forgive things going wrong. But they struggle deeply when they don't understand what is happening.";
