import { useState } from 'react';
import { filterTabsBase, projects, type FilterKey } from '../data';

export default function ProjectGrid() {
  const [filter, setFilter] = useState<FilterKey>('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="work" aria-label="Work" className="px-12 pt-14 pb-24 border-t border-hairline">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-semibold text-[12.5px] tracking-[0.1em] text-accent">SELECTED WORK</span>
        <div className="flex-1 h-px bg-hairline" />
      </div>
      <h2 className="font-semibold text-[clamp(2rem,4.5vw,3.6rem)] m-0 mb-10">Work I'm proud of.</h2>

      <div
        role="tablist"
        aria-label="Filter work by discipline"
        className="flex gap-7 flex-wrap mb-11 border-b border-hairline pb-4"
      >
        {filterTabsBase.map((tab) => {
          const active = tab.key === filter;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(tab.key)}
              className={`bg-transparent border-none cursor-pointer font-semibold text-sm pb-1.5 whitespace-nowrap border-b-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                active ? 'text-ink border-accent' : 'text-muted border-transparent'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-px bg-surface border border-hairline">
        {filteredProjects.map((p) => (
          <div key={p.id} className="bg-surface flex flex-col border border-hairline -m-px">
            <div
              aria-hidden="true"
              className="w-full h-[200px] block bg-hairline/20 flex items-center justify-center text-muted text-xs"
            >
              Screenshot
            </div>
            <div className="p-[22px] flex flex-col gap-2 flex-1">
              <div className="font-semibold text-[11px] tracking-[0.06em] uppercase text-accent">
                {p.domain}
              </div>
              <div className="font-semibold text-[17px] leading-[1.3]">{p.title}</div>
              <div className="text-[13.5px] leading-relaxed text-muted flex-1">{p.desc}</div>
              <div className="flex justify-between text-xs text-muted mt-2">
                <span>{p.meta}</span>
                <span className="text-accent font-semibold">{p.cta}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
