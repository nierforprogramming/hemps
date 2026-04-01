import React from "react";
import Link from "next/link";
import HeroVisual from "@/components/herovisual";
import TrustStrip from "@/components/trust-strip";
import ImpactStrip from "@/components/impact-strip";
import ValueProps from "@/components/value-props";
import ProcessStrip from "@/components/process-strip";
import Quote from "@/components/quote";
import FooterCTA from "@/components/footer-cta";

const Home = () => {
  return (
    <>
      <section className="relative bg-primary text-secondary overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[90vh]">
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]" />

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex items-start lg:items-start px-6 lg:px-20 pt-28 lg:pt-32 pb-16 relative z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
            <div className="relative max-w-xl space-y-6">
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-accent-lt">
                <span className="w-6 h-[1px] bg-accent"></span>
                Bajhang District, Far-Western Nepal
              </div>

              <h1 className="font-serif italic text-5xl lg:text-6xl leading-[1.1]">
                <span className="block text-secondary/90">Himalayan Hemp,</span>
                <span className="block text-accent-lt">Harvested by</span>
                <span className="block text-accent-lt">Hand.</span>
              </h1>

              <p className="text-secondary/60 text-md font-sans leading-relaxed tracking-wide max-w-md">
                From the remote highlands of Bajhang — wild hemp fiber,
                water-retted in mountain rivers and sun-dried at altitude.
                Semi-processed raw fiber, fully documented, traceable to the
                village that grew it.
              </p>

              <div className="flex gap-4 pt-4 uppercase">
                <Link
                  href="/contact"
                  className="btn bg-accent text-secondary hover:-translate-y-0.5 transition-transform duration-100 border-none hover:bg-accent-lt"
                >
                  Partner With Us
                </Link>

                <Link
                  href="/products"
                  className="btn btn-outline hover:-translate-y-0.5 transition-transform duration-100 border-secondary/40 text-secondary hover:bg-secondary hover:text-primary"
                >
                  Explore Our Fibers
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <HeroVisual />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/40 to-primary" />
          </div>
        </div>
      </section>
      <TrustStrip />
      <ImpactStrip />
      <ValueProps />
      <ProcessStrip />
      <Quote />
      <FooterCTA />
    </>
  );
};

export default Home;
