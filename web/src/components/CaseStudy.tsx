import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export const sectionHeading = 'font-semibold text-2xl text-accent m-0 mb-4';
export const sectionBody = 'text-lg leading-[1.75] text-muted max-w-[720px]';
export const buttonPrimary =
  'inline-block font-semibold text-sm text-surface bg-ink py-[15px] px-[30px] no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';
export const buttonSecondary =
  'inline-block font-semibold text-sm text-ink border border-hairline py-[13px] px-[28px] no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

export const caseStudyContainer = 'max-w-[1200px] mx-auto px-12 flex flex-col gap-20 pt-16 pb-20';

// ---------------------------------------------------------------------------
// Meta chips: small pill row used under the eyebrow line ("Glasgow School of
// Art | Masters Thesis | ...") instead of a plain pipe-separated string.
// ---------------------------------------------------------------------------
export function MetaChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-6">
      {items.map((item) => (
        <li key={item} className="text-xs text-muted border border-hairline rounded-full py-1 px-3 leading-none">
          {item}
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Hero: title block shared by every case study page.
// ---------------------------------------------------------------------------
export type CaseStudyCta = { label: string; href: string; variant?: 'primary' | 'secondary' };

export function CaseStudyHero({
  metaTags,
  title,
  intro,
  ctas,
  pullQuote,
  heroImage,
}: {
  metaTags: string[];
  title: string;
  intro: string;
  ctas: CaseStudyCta[];
  pullQuote?: string;
  heroImage?: { src: string; alt: string };
}) {
  return (
    <Reveal>
      <MetaChips items={metaTags} />
      <h1 className="font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] m-0 mb-8">{title}</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className={cta.variant === 'secondary' ? buttonSecondary : buttonPrimary}
          >
            {cta.label}
          </a>
        ))}
      </div>
      <p className={sectionBody}>{intro}</p>
      {pullQuote && (
        <p className="text-lg leading-[1.6] text-accent font-semibold max-w-[720px] mt-6 border-l-2 border-accent pl-5">
          {pullQuote}
        </p>
      )}
      {heroImage && (
        <img src={heroImage.src} alt={heroImage.alt} className="w-full h-auto block mt-10" loading="eager" />
      )}
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Section: consistent heading treatment, with an optional small-caps kicker
// for the numbered "Stage N" beats of a research process.
// ---------------------------------------------------------------------------
export function SectionHeading({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="mb-4">
      {kicker && (
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-accent bg-accent/10 rounded-full py-1 px-3 mb-3">
          {kicker}
        </span>
      )}
      <h2 className="font-semibold text-2xl text-ink m-0">{children}</h2>
    </div>
  );
}

export function CaseStudySection({
  children,
  className = 'flex flex-col gap-6',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Reveal className={className}>{children}</Reveal>;
}

// ---------------------------------------------------------------------------
// Figure / FigureGrid: equal-height image pairing. Fixes the mismatched-crop
// problem where two photos of very different native aspect ratios (e.g. a
// tall cup photo next to a squat lid photo) were rendered at `w-full h-auto`
// and ended up wildly different sizes next to each other.
// ---------------------------------------------------------------------------
export function Figure({
  src,
  alt,
  caption,
  ratio,
  fit = 'contain',
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  fit?: 'contain' | 'cover';
}) {
  return (
    <figure className="m-0">
      {ratio ? (
        <div
          className="w-full border border-hairline bg-ink/[0.02] flex items-center justify-center overflow-hidden"
          style={{ aspectRatio: ratio }}
        >
          <img
            src={src}
            alt={alt}
            className={fit === 'cover' ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'}
            loading="lazy"
          />
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      )}
      {caption && <figcaption className="text-sm text-muted mt-2">{caption}</figcaption>}
    </figure>
  );
}

export function FigureGrid({ children, cols = 2 }: { children: ReactNode; cols?: 2 | 3 }) {
  return (
    <div className={`grid grid-cols-1 ${cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 items-start`}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------
export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px]">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="font-semibold text-4xl text-ink m-0 mb-2">{stat.value}</p>
          <p className="text-sm text-muted m-0">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg leading-[1.6] text-accent font-semibold max-w-[720px] border-l-2 border-accent pl-5">
      {children}
    </p>
  );
}

export function BulletList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul
      className={`list-disc list-outside pl-5 flex flex-col gap-2 text-base leading-relaxed text-muted max-w-[720px] ${className}`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function PillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-lg text-ink m-0 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="text-sm text-muted border border-hairline rounded-full py-1.5 px-4">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Closing CTA bar: identical across every case study page.
// ---------------------------------------------------------------------------
export function CaseStudyCtaFooter({ label, href }: { label: string; href: string }) {
  return (
    <section aria-label="Read the full write-up" className="px-12 pt-14 pb-20 border-t border-hairline">
      <div className="flex flex-wrap gap-8 items-center">
        <a href={href} target="_blank" rel="noreferrer" className={buttonPrimary}>
          {label}
        </a>
        <Link
          to="/#work"
          className="font-medium text-sm text-ink no-underline border-b-[1.5px] border-ink pb-[3px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          ← Back to all work
        </Link>
      </div>
    </section>
  );
}
