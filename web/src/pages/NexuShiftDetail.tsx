import { Link } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import {
  title,
  eyebrow,
  thesisHref,
  thesisLabel,
  aboutParagraphs,
  aimParagraph,
  learnMoreParagraph,
  coDesignParagraph,
  humanitarianCallout,
  proposalStatement,
  observationScenarios,
  womenBankImages,
  womenNgoImages,
  ngoBankImages,
  storyboardSteps,
} from '../data/nexushift';

const heading = 'font-semibold text-2xl text-accent m-0 mb-4';
const body = 'text-lg leading-[1.75] text-muted max-w-[720px]';

function ImageRow({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((img) => (
        <img key={img.src} src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
      ))}
    </div>
  );
}

export default function NexuShiftDetail({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}) {
  return (
    <>
      <DetailNav theme={theme} onToggleTheme={onToggleTheme} />

      <section className="px-12 pt-20 pb-14 text-center">
        <p className="text-sm text-muted m-0 mb-3">{eyebrow}</p>
        <h1 className="font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] m-0 mb-8">{title}</h1>
        <a
          href={thesisHref}
          target="_blank"
          rel="noreferrer"
          className="inline-block font-semibold text-sm text-surface bg-ink py-[15px] px-[30px] no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          {thesisLabel}
        </a>
      </section>

      <div className="max-w-[1200px] mx-auto px-12 flex flex-col gap-20 pb-20">
        <Reveal className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center">
          <div>
            <h2 className={heading}>About the Project</h2>
            <div className={`${body} space-y-4`}>
              {aboutParagraphs.map((p) => (
                <p key={p} className="m-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <img
            src="/work/nexushift/hero-banking.webp"
            alt="A hand approving a wire transfer on a phone in front of a laptop showing an online banking dashboard."
            className="w-full h-auto block"
          />
        </Reveal>

        <Reveal>
          <img
            src="/work/nexushift/program-banner.webp"
            alt="Nexushift: Collaborative Inclusion Program. Illustration of two women sitting at separate cafe tables in a bank-like lobby, one saying she needs help, the other reassuring her."
            className="w-full h-auto block"
          />
        </Reveal>

        <Reveal>
          <h2 className={heading}>Aim:</h2>
          <p className={body}>{aimParagraph}</p>
        </Reveal>

        <Reveal>
          <img
            src="/work/nexushift/gap-diagram.webp"
            alt="Diagram: a woman in a vulnerable state connects to an NGO, which connects both ways with a Bank, leading to an empowered, self-reliant woman. Banner below reads 'Gap in existing system'."
            className="w-full h-auto block"
          />
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 items-center">
          <img
            src="/work/nexushift/research-collage.webp"
            alt="Collage of research source clippings: Lewis Silkin gender pay gap reporting, vulnerability and resilience research, Financial Lives 2022 survey, Hymans Robertson reviews, TED-Ed, TSB banking access for homeless people, UK Gov and Scot Gov benefits pages, Glasgow City Council, The British economy in crisis, and PensionBee early pension release rules."
            className="w-full h-auto block"
          />
          <div>
            <h2 className={heading}>What did I do to learn more?</h2>
            <p className={body}>{learnMoreParagraph}</p>
          </div>
        </Reveal>

        <Reveal>
          <img
            src="/work/nexushift/current-situation.webp"
            alt="Current situation: illustration of a woman with a bag. 3% (28,882 households) were assessed as homeless or threatened with homelessness in 21/22. 83% of these applications were made by women, almost half including children. 40% of women who were homeless faced domestic abuse."
            className="w-full h-auto block"
          />
        </Reveal>

        <Reveal>
          <h2 className={heading}>For whom and why? Co-Design Opportunity:</h2>
          <p className={body}>{coDesignParagraph}</p>
        </Reveal>

        <Reveal>
          <img
            src="/work/nexushift/aim-intent.webp"
            alt="Diagram of a woman flanked by an AIM column (survival and wellbeing, build confidence and self-esteem, transition out of homelessness, financial independence) and an INTENT column (access to their money, receiving benefits, managing and investing money, affordable and safe housing). Banner below reads 'What is the aim behind helping women?'."
            className="w-full h-auto block"
          />
          <p className="text-base leading-relaxed text-accent font-medium mt-6 max-w-[720px]">
            {humanitarianCallout}
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 items-center">
          <div>
            <h2 className={heading}>Proposal Statement:</h2>
            <p className={body}>{proposalStatement}</p>
          </div>
          <img
            src="/work/nexushift/collaboration-icon.webp"
            alt="Circular icon showing two people exchanging places with arrows, flanked by the NGO heart icon and the Bank icon, representing the staff-exchange collaboration."
            className="w-full h-auto block"
          />
        </Reveal>

        <Reveal className="flex flex-col gap-10">
          <h2 className={heading}>Observation:</h2>
          <img
            src="/work/nexushift/ecosystem-actors.webp"
            alt="'Main actors in ecosystem' banner over an isometric grid of cards: Community, FCA, Police, Woman, NGO, Bank, Government."
            className="w-full h-auto block"
          />

          <div className="flex flex-col gap-4">
            <p className="text-base text-muted m-0">{observationScenarios[0]}</p>
            <ImageRow images={womenBankImages} />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-base text-muted m-0">{observationScenarios[1]}</p>
            <ImageRow images={womenNgoImages} />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-base text-muted m-0">{observationScenarios[2]}</p>
            <ImageRow images={ngoBankImages} />
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-10">
          <div>
            <h2 className={heading}>How will the proposal work?</h2>
            <p className={body}>See the storyboarding below to understand.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {storyboardSteps.map((step) => (
              <img key={step.number} src={step.src} alt={step.alt} className="w-full h-auto block" loading="lazy" />
            ))}
          </div>
        </Reveal>
      </div>

      <section aria-label="Read the thesis" className="px-12 pt-14 pb-20 border-t border-hairline">
        <div className="flex flex-wrap gap-8 items-center">
          <a
            href={thesisHref}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sm text-surface bg-ink py-[15px] px-[30px] no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Read the full thesis (PDF) →
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
