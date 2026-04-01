import { value } from "@/constants";
import React from "react";

const ValueProps = () => {
  return (
    <section className="bg-secondary">
      <div className="grid md:grid-cols-3">
        {value.map((item, i) => (
          <div
            key={i}
            className="
              group relative px-6 py-12 md:px-10 md:py-16
              border-r border-secondary-dk last:border-none
              bg-secondary-dk
              hover:bg-secondary
              transition-all duration-300
            "
          >
            <span
              className="
                absolute top-0 left-0 w-full h-[2px]
                bg-accent scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-300
              "
            />

            <div className="text-accent mb-6">{item.icon}</div>

            <h3 className="font-serif font-bold tracking-wide text-xl text-primary mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-muted/70 leading-relaxed text-md">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
