import { Link } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { title, subtitle, thesisLabel, thesisHref, heroImage, slides } from '../data/crushCup';

type CrushCupDetailProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function CrushCupDetail({ theme, onToggleTheme }: CrushCupDetailProps) {
  return (
    <>
      <DetailNav theme={theme} onToggleTheme={onToggleTheme} />

      <div className="max-w-[1242px] mx-auto px-6 sm:px-12">
        <div className="pt-16 pb-10 text-center">
          <h1 className="font-semibold text-2xl md:text-[28px] text-ink m-0 mb-4">{title}</h1>
          <p className="text-sm md:text-[15px] text-muted max-w-[760px] mx-auto m-0 mb-8">{subtitle}</p>
          <a
            href={thesisHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-semibold text-sm text-white py-[15px] px-[30px] rounded-lg no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            style={{ backgroundColor: '#B87333' }}
          >
            {thesisLabel}
          </a>
        </div>

        <div className="flex flex-col">
          <Reveal delayMs={0} className="block">
            <img src={heroImage.src} alt={heroImage.alt} className="w-full h-auto block" loading="eager" />
          </Reveal>
          {slides.map((slide) => (
            <Reveal key={slide.src} delayMs={0} className="block">
              <img src={slide.src} alt={slide.alt} className="w-full h-auto block" loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>

      <section aria-label="Back to work" className="px-12 pt-14 pb-20 border-t border-hairline">
        <div className="flex flex-wrap gap-8 items-center">
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
