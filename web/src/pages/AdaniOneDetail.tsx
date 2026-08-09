import { Link } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import {
  title,
  byline,
  insightReportHref,
  researchBoardHref,
  introParagraph,
  statLine,
  projectBriefParagraph,
  understandingProductParagraph,
  whyDepthParagraph,
  pullQuote,
  whoAreUsersIntro,
  researchApproach,
  whatIFoundIntro,
  journeys,
  centralInsightHeading,
  centralInsightParagraphsA,
  ownershipDistinction,
  ownershipContrast,
  centralInsightParagraphB,
  journeyMapsParagraph,
  severityRiskParagraph,
  howImpactIntroParagraph,
  reflectionParagraphs,
  whatIdDoDifferentlyParagraph,
  closingQuote,
} from '../data/adanione';

const PURPLE = '#6D49A1';
const PURPLE_MUTED = '#6C67A0';

const heading = 'font-semibold text-2xl m-0 mb-4';
const body = 'text-lg leading-[1.75] text-muted max-w-[720px] mx-auto';
const buttonPrimary =
  'inline-block font-semibold text-sm text-white py-[15px] px-[30px] rounded-md no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';
const buttonSecondary = buttonPrimary;

function SubItems({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-[900px] mx-auto">
      {items.map((item) => (
        <div key={item.title}>
          <h3 className="font-semibold text-base text-ink m-0 mb-2">{item.title}</h3>
          <p className="text-base leading-relaxed text-muted m-0">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function AdaniOneDetail({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}) {
  return (
    <>
      <DetailNav theme={theme} onToggleTheme={onToggleTheme} />

      <div className="max-w-[1200px] mx-auto px-12 flex flex-col gap-20 pt-16 pb-20 text-center">
        <Reveal>
          <h1 className="font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] m-0 mb-3">{title}</h1>
          <p className="text-sm text-muted m-0 mb-6">{byline}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href={insightReportHref} target="_blank" rel="noreferrer" className={buttonPrimary} style={{ backgroundColor: PURPLE }}>
              Insight Report Pdf
            </a>
            <a
              href={researchBoardHref}
              target="_blank"
              rel="noreferrer"
              className={buttonSecondary}
              style={{ backgroundColor: PURPLE_MUTED }}
            >
              Full Research Board
            </a>
          </div>
          <p className="text-lg leading-[1.75] max-w-[720px] mx-auto" style={{ color: PURPLE }}>
            {introParagraph}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 items-start mt-10 text-left max-w-[1000px] mx-auto">
            <img
              src="/work/adanione/hero.webp"
              alt="Split hero image: an Adani airport terminal building with a distinctive wave-shaped gold facade on the left, and the Adani OneApp splash screen on a phone showing the adani logo over a purple gradient wave on the right."
              className="w-full h-auto block"
            />
            <img
              src="/work/adanione/features-sidebar.webp"
              alt="Features list: Travel Bookings (booking tickets and hotels); F&B (pre-order food and beverages at Adani-managed airports); Financial Services (apply/manage Adani One ICICI Bank Credit Cards, forex, pay bills); Shopping and Payments (pre-order duty free online, scan to complete payments, Adani Reward Program); Connectivity (free unlimited WiFi); Airport Services (Pranaam meet and greet, porter service, airport lounge); Travel and airport essentials (flight tracker, airport maps and navigation, special assistance)."
              className="w-full h-auto block"
            />
          </div>
          <p className="text-sm text-muted mt-4">{statLine}</p>
        </Reveal>

        <Reveal>
          <h2 className={heading} style={{ color: PURPLE }}>
            The Project Brief:
          </h2>
          <p className={body}>{projectBriefParagraph}</p>
        </Reveal>

        <Reveal>
          <h2 className={heading} style={{ color: PURPLE }}>
            Understanding the Product First:
          </h2>
          <p className={body}>{understandingProductParagraph}</p>
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/research-objective.webp"
            alt="Research Objective: what is AdaniOne solving as an app (7 major problems including airport confusion, fragmented services, scattered travel ecosystem), what is not unique and highly competitive (flight, hotel, bus/train bookings), user needs listing across six categories, and what is already solved vs unique to Adani One across five value propositions."
            className="w-full h-auto block mx-auto max-w-[900px]"
          />
        </Reveal>

        <Reveal>
          <h2 className={heading} style={{ color: PURPLE }}>
            Why Depth Over Breadth:
          </h2>
          <p className={body}>{whyDepthParagraph}</p>
          <p className="text-base leading-relaxed font-medium mt-6 max-w-[720px] mx-auto" style={{ color: PURPLE }}>
            "{pullQuote}"
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-10">
          <p className={body}>{whoAreUsersIntro}</p>
          <img
            src="/work/adanione/personas.webp"
            alt="User Personas and Archetypes: five persona cards — Busy Business Travellers (Rohan Mehta), Deal-Seeker Duty-Free Shoppers (Arjun Khurana), Rail-to-Air Connectors / Multi-modal Planners (Pooja Iyer), Occasional Family Fliers (Neha Patel), and Rewards-Maximizers / Payments-first Users (Vikram Sinha) — each with name, role, age, location, quote, behavioural considerations, frustrations, goals and tasks."
            className="w-full h-auto block mx-auto max-w-[900px]"
          />
        </Reveal>

        <Reveal className="flex flex-col gap-10">
          <h2 className={heading} style={{ color: PURPLE }}>
            Research Approach:
          </h2>
          <SubItems items={researchApproach} />
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/reviews.webp"
            alt="Reviews: 4.4 star rating from 25.8K reviews. A list of largely negative Play Store reviews describing refund process complaints, missing customer support, missing email verification, and payment failures."
            className="w-full h-auto block mx-auto max-w-[900px]"
          />
        </Reveal>

        <Reveal className="flex flex-col items-center gap-8">
          <img
            src="/work/adanione/thought-process.webp"
            alt="Thought Process and Dump: a whiteboard of annotated app screenshots and sticky notes exploring refund flow, third-party integration, coupon logic, and plan comparisons, connected with arrows."
            className="w-full h-auto block mx-auto max-w-[900px]"
          />
          <a href={researchBoardHref} target="_blank" rel="noreferrer" className={buttonPrimary} style={{ backgroundColor: PURPLE }}>
            View Full Research Board
          </a>
        </Reveal>

        <Reveal className="flex flex-col gap-10">
          <h2 className={heading} style={{ color: PURPLE }}>
            {whatIFoundIntro}
          </h2>
          <SubItems items={journeys} />
        </Reveal>

        <Reveal className="flex flex-col items-center gap-6">
          <h2 className={heading} style={{ color: PURPLE }}>
            {centralInsightHeading}
          </h2>
          {centralInsightParagraphsA.map((p) => (
            <p key={p} className={body}>
              {p}
            </p>
          ))}
          <p className="font-semibold text-ink m-0">This creates a critical distinction:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto text-left">
            {ownershipDistinction.map((item) => (
              <p key={item.label} className="text-base leading-relaxed text-muted m-0">
                <span className="font-semibold text-ink">{item.label}</span> {item.text}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {ownershipContrast.map((line) => (
              <p key={line} className="font-semibold text-ink m-0">
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/partnerships.webp"
            alt="Partnerships: 'Who powers each experience | Ecosystem & dependency mapping' — a map showing which parts of the Adani One experience are controlled internally vs by partners (ClearTrip, Uber, ICICI, ONDC, UPI/NPCI, Wallets), plus a table of 11 features/flows with partner/system, what they control, control level, error responsibility, and risk zones."
            className="w-full h-auto block mx-auto max-w-[900px]"
          />
        </Reveal>

        <Reveal>
          <p className={body}>{centralInsightParagraphB}</p>
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/puzzle.webp"
            alt="Puzzle piece illustration: Payment gateways, Airline Systems, and Airport Vendors pieces assembling together with the adani logo piece into one complete four-piece puzzle, representing the orchestration platform."
            className="w-full h-auto block mx-auto max-w-[900px]"
          />
        </Reveal>

        <Reveal>
          <h2 className={heading} style={{ color: PURPLE }}>
            Journey Maps:
          </h2>
          <p className={body}>{journeyMapsParagraph}</p>
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/flight-booking-1way.webp"
            alt="Flight Travel Booking (1 Way Trip): full screenshot walkthrough from search to payment, including flight search results, review flight details, coupon application, traveller details, seat selection, meal and baggage add-ons, payment options, and a booking pending confirmation screen."
            className="w-full h-auto block mx-auto max-w-[900px]"
            loading="lazy"
          />
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/flight-booking-roundtrip.webp"
            alt="Flight Travel Booking (Round Trip): full screenshot walkthrough for a round-trip booking, including departure and arrival city selection, date selection, traveller count, review of both departing and return flight details, insurance, cancellation policy, seat and meal add-ons, and payment."
            className="w-full h-auto block mx-auto max-w-[900px]"
            loading="lazy"
          />
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/flight-flowcharts.webp"
            alt="Flowcharts for Flight Travel Booking, 2-way trip and round trip, showing the normal flow, second attempt, and first failure attempt paths with colour-coded arrows (grey normal, blue second attempt, red first failure) through the booking steps."
            className="w-full h-auto block mx-auto max-w-[900px]"
            loading="lazy"
          />
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/fnb-collect-counter.webp"
            alt="F&B Flow (Collect at Outlet): screenshot walkthrough of pre-ordering food to collect at an airport counter, from browsing restaurants and dishes through cart, billing details, coupon applied confirmation, payment, and order pending confirmation."
            className="w-full h-auto block mx-auto max-w-[900px]"
            loading="lazy"
          />
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/fnb-delivery-gate.webp"
            alt="F&B Flow (Delivery at Gate): screenshot walkthrough of ordering food for delivery to the boarding gate, from browsing delivering-in-15-minutes items through cart, traveller and boarding gate details, coupon applied confirmation, payment, and order pending confirmation."
            className="w-full h-auto block mx-auto max-w-[900px]"
            loading="lazy"
          />
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/fnb-flowcharts.webp"
            alt="Flowcharts for F&B collect-at-counter flow and F&B delivery-at-gate flow, showing normal, retry, and failure paths through order placement, payment, and fulfilment steps."
            className="w-full h-auto block mx-auto max-w-[900px]"
            loading="lazy"
          />
        </Reveal>

        <Reveal>
          <h2 className={heading} style={{ color: PURPLE }}>
            Severity and Risk Prioritization:
          </h2>
          <p className={body}>{severityRiskParagraph}</p>
        </Reveal>

        <Reveal>
          <img
            src="/work/adanione/risk-table.webp"
            alt="Table of Journey, Trust Risk, Business Impact, and Priority: Payments & Refunds (Very High, Very High, Immediate); Flight Booking Retry & Pending (Very High, High, Immediate); Airport F&B Fulfilment (High, Medium, Short-term); Lounge Access (Medium, Medium, Medium-term)."
            className="w-full h-auto block mx-auto max-w-[847px]"
          />
        </Reveal>

        <Reveal className="flex flex-col items-center gap-10">
          <div>
            <h2 className={heading} style={{ color: PURPLE }}>
              How This Research Creates Impact:
            </h2>
            <p className={body}>{howImpactIntroParagraph}</p>
          </div>
          <img
            src="/work/adanione/impact.webp"
            alt="How This Research Creates Impact: Product Decisions (identify friction points, improve form design, prioritise usability fixes, align with user mental models, validate feature discoverability), Business Decisions (higher booking completion, reduced payment failures, better retention, increased trust, clear sprint prioritisation), and User Experience Impact (faster booking flows, less confusion, higher payment confidence, more predictable experience, feeling the app is well thought out)."
            className="w-full h-auto block mx-auto max-w-[900px]"
          />
        </Reveal>

        <Reveal className="flex flex-col items-center gap-6">
          <h2 className={heading} style={{ color: PURPLE }}>
            Reflection &amp; Learnings
          </h2>
          {reflectionParagraphs.map((p) => (
            <p key={p} className={body}>
              {p}
            </p>
          ))}
          <h3 className="font-semibold text-base text-ink m-0">What I'd do differently:</h3>
          <p className={body}>{whatIdDoDifferentlyParagraph}</p>
          <p className="text-base leading-relaxed font-medium max-w-[720px] mx-auto" style={{ color: PURPLE }}>
            "{closingQuote}"
          </p>
        </Reveal>
      </div>

      <section aria-label="Read the insight report" className="px-12 pt-14 pb-20 border-t border-hairline">
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <a href={insightReportHref} target="_blank" rel="noreferrer" className={buttonPrimary} style={{ backgroundColor: PURPLE }}>
            Read the full insight report (PDF) →
          </a>
          <Link
            to="/#work"
            className="font-medium text-sm text-ink no-underline border-b-[1.5px] border-ink pb-[3px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            ← Back to all work
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
