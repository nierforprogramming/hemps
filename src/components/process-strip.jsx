import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { steps } from "@/constants";

const ProcessStrip = () => {
  return (
    <section className="bg-primary text-secondary py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16 space-y-4">
          <div className="text-xs tracking-[0.3em] uppercase text-accent/80">
            Our Process
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Ancient Method. Export Standard.
          </h2>

          <p className="text-secondary/60 max-w-xl mx-auto">
            Five centuries of knowledge, structured for international supply
            chains.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-8 mb-16"
        >
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="text-center group ">
                <div className="text-3xl md:text-4xl font-serif text-secondary/20">
                  {step.num}
                </div>

                <div className="text-xs tracking-[0.25em] uppercase text-secondary/70 mt-2">
                  {step.label}
                </div>
              </div>

              {i !== steps.length - 1 && (
                <div className="hidden md:block text-secondary/30 text-xl">
                  <FaChevronRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/process"
            className="btn btn-outline hover:-translate-y-0.5 transition-transform duration-100 border-secondary/40 text-secondary hover:bg-secondary hover:text-primary"
          >
            See the Full Process →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessStrip;
