import React from "react";
import Link from "next/link";
import HeroVisual from "@/components/herovisual";

const Home = () => {
  return (
    <section className="relative bg-primary text-secondary overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* LEFT SIDE */}
        <div className="flex items-start lg:items-start px-6 lg:px-20 pt-28 lg:pt-32 pb-16 relative z-10">
          {/* soft gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
          <div className="relative max-w-xl space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-accent/80">
              <span className="w-6 h-[1px] bg-accent"></span>
              Bajhang District, Far-Western Nepal
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl lg:text-6xl leading-[1.1]">
              <span className="block text-secondary/90">Himalayan Hemp,</span>
              <span className="block text-accent italic">Harvested by</span>
              <span className="block text-accent italic">Hand.</span>
            </h1>

            {/* Description */}
            <p className="text-secondary/60 leading-relaxed max-w-md">
              From the remote highlands of Bajhang — wild hemp fiber,
              water-retted in mountain rivers and sun-dried at altitude.
              Semi-processed raw fiber, fully documented, traceable to the
              village that grew it.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Link
                href="/contact"
                className="btn bg-accent text-primary border-none hover:bg-accent-lt"
              >
                Partner With Us
              </Link>

              <Link
                href="/products"
                className="btn btn-outline border-secondary/40 text-secondary hover:bg-secondary hover:text-primary"
              >
                Explore Our Fibers
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="relative hidden lg:block">
          <HeroVisual />

          {/* overlay gradient to match screenshot */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/40 to-primary" />
        </div>
      </div>
    </section>
  );
};

export default Home;
