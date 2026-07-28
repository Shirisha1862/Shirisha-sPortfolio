import { techCategories, type TechItem } from '../../data/profile';

// Individual Tech Icon Card with hover lift and proficiency badge
const TechCard = ({ tech }: { tech: TechItem }) => {
  const iconUrl = `https://cdn.simpleicons.org/${tech.iconName}/${tech.color.replace('#', '')}`;

  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0D1117]/90 border border-border/80 shadow-md hover:border-accent/60 hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 group select-none relative">
      <div className="w-9 h-9 rounded-xl bg-surface-2 p-1.5 flex items-center justify-center border border-border/50 group-hover:border-accent/40 transition-colors shrink-0">
        <img
          src={iconUrl}
          alt={tech.name}
          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-sm font-semibold text-text group-hover:text-accent transition-colors whitespace-nowrap">
          {tech.name}
        </span>
        {/* {tech.proficiency && (
          <span className="font-mono text-[10px] text-muted group-hover:text-accent-alt transition-colors">
            {tech.proficiency}
          </span>
        )} */}
      </div>
    </div>
  );
};

export default function Skills() {
  // All items flattened for mobile marquee fallback
  const allTechItems = techCategories.flatMap(c => c.items);
  const marqueeList = [...allTechItems, ...allTechItems];

  return (
    <section id="skills" className="py-24 bg-base relative overflow-hidden border-t border-border/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl sm:text-5xl font-bold text-text tracking-tight mb-4">
            The building blocks <span className="text-accent text-glow">I know.</span>
          </h2>
        </div>

        {/* Desktop Categorized Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techCategories.map((group) => (
            <div
              key={group.category}
              className="bg-[#0D1117]/80 border border-border/80 rounded-2xl p-6 shadow-xl space-y-4 hover:border-border transition-colors"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <h3 className="font-mono text-sm font-bold text-accent flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {group.items.map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Auto-Scroll Marquee */}
        <div className="md:hidden relative w-full overflow-hidden py-4">
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {marqueeList.map((item, idx) => (
              <div key={`mob-${item.name}-${idx}`} className="mx-2 shrink-0">
                <TechCard tech={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
