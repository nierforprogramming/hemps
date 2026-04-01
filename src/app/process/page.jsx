import ProcessStepCard from "@/components/process-step-card";
import { processSteps } from "@/constants";
import React from "react";

const Process = () => {
  return (
    <>
      <section className="bg-primary text-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 lg:py-32">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
          >
            <span className="block italic">Water-Retted.</span>
            <span className="block italic">Hand-Peeled.</span>
            <span className="block italic">Sun-Dried.</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-secondary/60 max-w-xl leading-relaxed text-base md:text-lg"
          >
            This is how fiber has been made in these mountains for centuries. We
            have standardized the process for export consistency — without
            changing what makes it exceptional.
          </p>
        </div>
      </section>

      <section className="bg-secondary text-text">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
          {processSteps.map((step, i) => (
            <ProcessStepCard key={i} step={step} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-secondary text-text">
        <div className="max-w-2xl mx-auto px-6 pb-20">
          {/* BOX */}
          <div
            data-aos="fade-up"
            className="bg-primary text-secondary rounded-sm px-6 md:px-10 py-8 md:py-10 relative overflow-hidden"
          >
            {/* LEFT ACCENT LINE */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-accent" />

            <div className="space-y-5 max-w-3xl">
              {/* TITLE */}
              <h2 className="font-serif text-xl md:text-2xl">
                Processing Stage Transparency
              </h2>

              {/* SUBTEXT */}
              <div className="text-xs tracking-[0.25em] uppercase text-accent">
                What Semi-Processed Raw Fiber Means — And Why It Matters
              </div>

              {/* CONTENT */}
              <p className="text-secondary/80 leading-relaxed text-sm md:text-base">
                Our fiber leaves Nepal water-retted and sun-dried. The bark has
                been separated from the woody core, but the fiber has not been
                further refined: no degumming, no bleaching, no chemical
                softening, no spinning preparation. We classify our output as{" "}
                <strong className="text-secondary">
                  semi-processed raw fiber
                </strong>{" "}
                in all customs documentation.
              </p>

              <p className="text-secondary/80 leading-relaxed text-sm md:text-base">
                <strong className="text-secondary">For buyers:</strong> Your
                downstream processing team will need to perform further
                refinement steps — such as degumming, carding, or combing —
                before spinning or weaving. We can provide technical data sheets
                and welcome pre-order conversations with your manufacturing
                team.
              </p>

              <p className="text-secondary/80 leading-relaxed text-sm md:text-base">
                <strong className="text-secondary">
                  Why this is an advantage:
                </strong>{" "}
                The absence of industrial chemical processing is precisely what
                makes our fiber valuable for brands with clean upstream supply
                chain commitments. You receive fiber in its most traceable,
                least-processed state — and you control the refinement on your
                terms.
              </p>
            </div>
          </div>

          {/* CTA BELOW */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-center mt-12 space-y-6"
          >
            <p className="text-muted text-sm">
              Questions about processing stage or downstream compatibility?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center uppercase">
              <a
                href="/contact"
                className="btn bg-accent text-secondary border-none hover:bg-accent-lt"
              >
                Talk to Our Team
              </a>

              <a
                href="/products"
                className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-secondary"
              >
                View Products & MOQs →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
