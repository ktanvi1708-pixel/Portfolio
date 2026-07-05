export default function Hero() {
  return (
    <section aria-label="Hero" className="px-12 pt-24 pb-24">
      <div className="flex justify-between items-end gap-10 flex-wrap">
        <h1 className="m-0 font-semibold leading-[0.94] tracking-[-0.02em] text-[clamp(3.4rem,10vw,8.5rem)]">
          UI/UX
          <br />
          Designer
        </h1>
        <div className="max-w-[300px] text-left pb-1.5">
          <div className="flex items-center gap-2 text-xl text-accent mb-3.5 font-semibold uppercase relative">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-none animate-pulseDot"
            />
            Open to opportunities
          </div>
          <div className="text-[15px] leading-relaxed text-ink">
            Research-led. Story-driven. Occasionally covered in post-it notes. Specialized in Service
            Design, UX Research, and Branding.
          </div>
        </div>
      </div>

      <div className="flex gap-8 items-center flex-wrap mt-14">
        <a
          href="#work"
          className="font-semibold text-sm text-surface bg-ink py-[15px] px-[30px] no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          See my work →
        </a>
        <a
          href="#contact"
          className="font-medium text-sm text-ink no-underline border-b-[1.5px] border-ink pb-[3px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
