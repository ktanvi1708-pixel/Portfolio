import { Link } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { title, subtitle, ctaLabel, ctaHref, aboutParagraph, objectives, closingParagraph } from '../data/alife';

type AlifeDetailProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const OBJECTIVE_COLOR = '#0E9833';
const CTA_GREEN = '#339614';
const DIVIDER_GREEN = '#DBE9C6';

export default function AlifeDetail({ theme, onToggleTheme }: AlifeDetailProps) {
  return (
    <>
      <DetailNav theme={theme} onToggleTheme={onToggleTheme} />

      <div className="max-w-[1242px] mx-auto px-6 sm:px-12">
        <div className="pt-16 pb-12 text-center">
          <h1 className="font-semibold text-2xl md:text-[28px] text-ink m-0 mb-4">{title}</h1>
          <p className="text-sm md:text-[15px] leading-[1.7] text-muted max-w-[640px] mx-auto m-0 mb-8">
            {subtitle}
          </p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-semibold text-sm text-white py-3 px-7 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            style={{ backgroundColor: CTA_GREEN }}
          >
            {ctaLabel}
          </a>
        </div>

        <Reveal className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 items-center pb-4">
          <div>
            <h2 className="font-semibold text-base m-0 mb-3" style={{ color: OBJECTIVE_COLOR }}>
              About the Project:
            </h2>
            <p className="text-sm leading-[1.7] text-muted m-0">{aboutParagraph}</p>
          </div>
          <img
            src="/work/alife/hero-product.webp"
            alt="Alife Sani-Wipes packaging: a white box and a round tin of sanitising alcohol soaked wipes, both branded with the alife leaf logo and a '99.9% Protection' badge, styled on a green fabric background. Adani Wilmar logo and 'Tanvi Kumar | Packaging and Product Design | 2020' caption below."
            className="w-full h-auto block max-w-[500px] ml-auto"
            loading="eager"
          />
        </Reveal>

        <div className="flex flex-col">
          <Reveal className="block">
            <img
              src="/work/alife/internship-overview.webp"
              alt="Alife logo ribbon beside a description of the internship period (Packaging and Logistics department, transition from Fortune edible oils to food brand, recent addition of Alife hand wash and hand sanitiser), and a diagram of the 6-week internship structure: Benchmarking, Conceptualisation (11 concepts, shortlisted to 8), and Prototyping/Models/PoCs branching into Labelling and PoC/mockups/models/prototypes of package, with a hand sanitiser bottle and mask illustration."
              className="w-full h-auto block"
            />
          </Reveal>

          <Reveal className="flex flex-col items-center text-center gap-3 max-w-[720px] mx-auto py-10">
            <h2 className="font-semibold text-base m-0" style={{ color: OBJECTIVE_COLOR }}>
              Main objectives for packaging:
            </h2>
            {objectives.map((o) => (
              <p key={o.label} className="text-sm leading-[1.7] text-muted m-0">
                <span className="font-semibold" style={{ color: OBJECTIVE_COLOR }}>
                  {o.label}
                </span>{' '}
                {o.text}
              </p>
            ))}
          </Reveal>

          <Reveal className="block">
            <img
              src="/work/alife/covid-context.webp"
              alt="Green panel describing the COVID-19 surge in demand for sanitisers, disinfectant sprays, and hand soaps, and the resulting competition and material shortages, beside an illustration of a healthcare worker in PPE. Below: a green flower illustration captioned on the brand's fresh, natural, inviting feel; a vertical roadmap diagram from product research and benchmarking through concepts, prototypes, branding, pilot batch, and market feedback; and a Pro Hygiene shield icon captioned on its red-and-white medically-approved, protective symbolism."
              className="w-full h-auto block"
            />
          </Reveal>

          <Reveal className="block">
            <img
              src="/work/alife/hand-hygiene-products.webp"
              alt="'Hand Hygiene Products' ribbon over a diagram splitting into Liquid Hand wash (soap based, water + soap lathering, herbal and non-herbal, various colours, scents and flavours, institutional and residential use) and Hand Sanitiser (alcohol based, rub on hands, herbal and non-herbal, for users who cannot wash frequently, institutional and residential use), beside a 'Coronavirus Disease 2019 Outbreak COVID-19' news graphic captioned 'Special Pandemic Situation' and a Demand/Supply see-saw illustration captioned 'Sanitising Products'."
              className="w-full h-auto block"
            />
          </Reveal>

          <Reveal className="block">
            <img
              src="/work/alife/products-designed.webp"
              alt="'Products designed' ribbon over a photo grid of the final Alife product line on a green fabric background: sanitiser gel bottles held in hand, the Sani-Wipes box and tin, Paper-Soap tins, a numbered paper soap roll strip, an alife Sanitizing Hand Gel pouch, duck-shaped sanitiser bottle holders, a wearable sanitiser bracelet, and a blister pack of travel sanitiser capsules. Captioned on keeping consistent branding, symbols, colour scheme, and flower/logo placement across the family, and on designing carry-friendly packaging for both the paper soap roll and the sanitiser."
              className="w-full h-auto block"
            />
          </Reveal>
        </div>

        <div className="h-3 my-10" style={{ backgroundColor: DIVIDER_GREEN }} />

        <div className="text-center pb-14">
          <p className="text-sm md:text-[15px] leading-[1.7] text-muted max-w-[720px] mx-auto m-0">
            {closingParagraph}
          </p>
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
