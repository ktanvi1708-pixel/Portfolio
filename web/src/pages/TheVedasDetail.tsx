import { Link } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { title, aboutParagraph, dielines } from '../data/theVedas';

type TheVedasDetailProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function TheVedasDetail({ theme, onToggleTheme }: TheVedasDetailProps) {
  return (
    <>
      <DetailNav theme={theme} onToggleTheme={onToggleTheme} />

      <div className="max-w-[1242px] mx-auto px-6 sm:px-12">
        <div className="pt-16 pb-12">
          <h1 className="font-semibold text-2xl md:text-[28px] text-ink text-center m-0 mb-24">{title}</h1>
          <h2 className="font-semibold text-base m-0 mb-3" style={{ color: '#BBD190' }}>
            About the Project:
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.7] text-muted max-w-[720px] m-0">{aboutParagraph}</p>
        </div>

        <div className="flex flex-col">
          <Reveal delayMs={0} className="block">
            <img
              src="/work/the-vedas/hero-about.webp"
              alt="The Vedas brand illustration: a green pennant reading 'The Vedas', hand-drawn leaf and teacup line art, the circular leaf logo with the tagline 'Health and Taste', and text describing the project as a start-up brand needing packaging design, already established and sold in stores and on Amazon, undertaken as a budget-friendly freelance packaging job representing freshness, lush nature, and a healthy lifestyle."
              className="w-full h-auto block"
              loading="eager"
            />
          </Reveal>

          <Reveal className="block">
            <img
              src="/work/the-vedas/product-mockups.webp"
              alt="The Vedas product photography and Amazon listing mockups for three green tea boxes — Guava Green Tea, Alkalizing Green Tea, and Kahwa Detox Green Tea — each shown with star ratings, pricing, and a styled photo of brewed tea, loose leaves, and packaged tea bags."
              className="w-full h-auto block"
            />
          </Reveal>

          {dielines.map((d) => (
            <Reveal key={d.src} className="block">
              <img src={d.src} alt={d.alt} className="w-full h-auto block" loading="lazy" />
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 items-center pt-14 pb-16 border-t border-hairline">
          <Link
            to="/#work"
            className="font-medium text-sm text-ink no-underline border-b-[1.5px] border-ink pb-[3px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            ← Back to all work
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
