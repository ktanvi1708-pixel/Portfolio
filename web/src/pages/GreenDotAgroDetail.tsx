import { Link } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { title } from '../data/greenDotAgro';

type GreenDotAgroDetailProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function GreenDotAgroDetail({ theme, onToggleTheme }: GreenDotAgroDetailProps) {
  return (
    <>
      <DetailNav theme={theme} onToggleTheme={onToggleTheme} />
      <h1 className="sr-only">{title}</h1>

      <Reveal delayMs={0} className="block">
        <img
          src="/work/green-dot-agro/full.webp"
          alt="Green Dot Agro Pvt. Ltd. brand identity board: hero cover photo with the lotus-and-wheat logo, the five-colour palette (Forest Green, Golden Yellow, Deep Green, Leaf Green, Natural Beige) beside the 'Feel Healthy, Eat Organic, Source Ethically' tagline, the hand-drawn logo construction sheet, the Proxima Nova typography specimen, the three logo colourways, the packaging system mockups, and the full brand application mockup grid."
          className="w-full h-auto block"
          loading="eager"
        />
      </Reveal>

      <div className="px-6 sm:px-12 flex flex-wrap gap-8 items-center pt-14 pb-16 border-t border-hairline">
        <Link
          to="/#work"
          className="font-medium text-sm text-ink no-underline border-b-[1.5px] border-ink pb-[3px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          ← Back to all work
        </Link>
      </div>

      <Footer />
    </>
  );
}
