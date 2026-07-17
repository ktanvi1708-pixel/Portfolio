import { aboutStats } from '../data';

export default function Stats() {
  return (
    <section className="px-12 border-t border-hairline box-border">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {aboutStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-6 px-6 flex flex-col justify-center items-center min-w-0 ${
              i < aboutStats.length - 1 ? 'sm:border-r border-hairline' : ''
            }`}
          >
            <div className="font-semibold text-[2.6rem] leading-none text-center -mt-1.5 pb-1.5">
              {stat.value}
            </div>
            <div className="text-[12.5px] text-ink leading-relaxed text-center text-pretty">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
