import React from "react";

const ProductCard = ({ item, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="flex flex-col h-full border hover:-translate-y-1.5 border-secondary-dk rounded-sm overflow-hidden bg-secondary"
    >
      {/* HEADER */}
      <div className={`px-6 py-6 ${item.headerBg} min-h-[140px] flex flex-col`}>
        <div className="text-[10px] tracking-[0.25em] p-0.5 rounded-sm bg-accent/20 w-fit uppercase text-accent-lt mb-3">
          {item.tag}
        </div>

        <h3 className="font-serif text-xl text-secondary leading-tight max-w-[22ch]">
          {item.title}
        </h3>

        {item.subtitle && (
          <div className="text-xs text-secondary/60 mt-1">{item.subtitle}</div>
        )}
      </div>

      {/* BODY */}
      <div className="px-6 py-6 space-y-4 flex flex-col flex-1">
        <p className="text-muted text-sm leading-relaxed">{item.desc}</p>

        <p className="text-muted text-sm leading-relaxed">
          <strong className="text-text">Use cases:</strong> {item.useCases}
        </p>

        {/* META GRID */}
        <div className="grid grid-cols-2 gap-3 pt-4 mt-auto">
          {item.meta.map((m, i) => (
            <div key={i} className="bg-secondary-dk px-4 py-3 rounded-sm">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                {m.label}
              </div>
              <div className="text-sm text-text">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
