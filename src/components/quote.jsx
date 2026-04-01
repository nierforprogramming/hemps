import React from "react";

const Quote = () => {
  return (
    <section className="bg-secondary-dk border-t border-secondary-dk">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="max-w-5xl mx-auto px-6 py-20 lg:py-28"
      >
        {/* Quote mark */}
        <div className="text-accent text-5xl leading-none mb-6">“</div>

        {/* Quote text */}
        <p className="font-serif italic tracking-wider text-primary text-xl md:text-2xl lg:text-[23px] leading-relaxed mb-8">
          The traceability documentation Nepal Hemps Collective provides is
          unlike anything else we have sourced from South Asia. Every bale has a
          story we can actually tell.
        </p>

        {/* Attribution */}
        <p className="text-accent text-xs tracking-[0.25em] uppercase">
          — Procurement Director, Sustainable Textile Brand, The Netherlands
        </p>
      </div>
    </section>
  );
};

export default Quote;
