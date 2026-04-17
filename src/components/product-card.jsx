import Image from "next/image";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      className="group flex flex-col h-full cursor-pointer border border-secondary-dk rounded-md overflow-hidden bg-secondary transition hover:-translate-y-1 hover:shadow-lg"
    >
      {/* IMAGE */}

      {item?.image ? (
        <div className="relative h-52 overflow-hidden">
          <Image
            src={item?.image}
            alt={item.title}
            sizes="(max-width: 1024px) 0px, 50vw"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      ) : (
        ""
      )}

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        {/* TAG */}
        <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
          {item.tag}
        </div>

        {/* TITLE */}
        <h3 className="font-serif text-xl text-dark mb-1 leading-tight">
          {item.title}
        </h3>

        {/* SUBTITLE */}
        {item.subtitle && (
          <p className="text-xs text-text italic mb-3">{item.subtitle}</p>
        )}

        {/* DESCRIPTION */}
        <p className="text-sm text-text leading-relaxed mb-4">{item.desc}</p>

        {/* USE CASES */}
        <p className="text-sm text-text leading-relaxed mb-6">
          <span className="text-text font-medium">Use cases:</span>{" "}
          {item.useCases}
        </p>

        {/* DIVIDER */}
        <div className="border-t border-secondary-dd mb-4" />

        {/* META */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {item.meta.map((m, i) => (
            <div key={i}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text">
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
