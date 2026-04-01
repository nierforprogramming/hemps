import React from "react";

const ProcessStepCard = ({ step, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className="flex gap-6 md:gap-10 py-10 border-b border-secondary-dd"
    >
      <div className="font-serif text-4xl md:text-5xl text-accent/30 min-w-[60px]">
        {step.num}
      </div>

      <div className="space-y-3 max-w-2xl">
        {/* TAG */}
        <div className="inline-block text-[10px] tracking-[0.25em] uppercase bg-secondary-dk text-muted px-3 py-1 rounded">
          {step.tag}
        </div>

        <h3 className="font-serif font-semibold text-lg md:text-xl text-primary">
          {step.title}
        </h3>

        <p className="text-muted text-md leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
};

export default ProcessStepCard;
