import ArtisanCard from "@/components/artisan-card";
import { artisans } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Story = () => {
  return (
    <>
      <section className="relative bg-primary text-secondary overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/mountain.jpeg"
            alt="Mountain background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/20" />
        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 py-24 lg:py-32">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
          >
            <span className="block">Where the Mountains</span>
            <span className="block italic text-secondary/90">Do the Work</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-secondary/60 max-w-xl leading-relaxed text-base md:text-lg"
          >
            The story of wild hemp, remote villages, and the decision to bring
            them to the global market — on their own terms.
          </p>
        </div>
      </section>

      <section className="bg-secondary text-text">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
          <div className="space-y-6">
            <h2
              data-aos="fade-up"
              className="font-serif text-2xl md:text-3xl text-primary"
            >
              Bajhang, Far-Western Nepal
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-muted leading-relaxed"
            >
              There are places in Nepal that the modern supply chain has not yet
              reached. Bajhang is one of them.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-muted leading-relaxed"
            >
              Tucked into the Himalayan foothills of Far-Western Nepal, Bajhang
              district sits at an altitude where the air is thin, the winters
              are long, and the wild hemp grows without cultivation — seeded by
              wind, watered by snowmelt, harvested by the same families who have
              been gathering it for centuries. This is not a romanticized
              version of remoteness. It is simply the geography of where we
              work.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-muted leading-relaxed"
            >
              The people of Bajhang have always known how to read the plant.
              They know which slopes produce the longest, strongest fiber. They
              know when to harvest before the stalks turn brittle. They know how
              to ret the bark in the cold, fast-moving rivers that rush down
              from the high passes — a process that loosens the fiber from the
              woody core without chemicals, relying entirely on water, time, and
              knowledge. Then the peeling: done almost entirely by hand,
              predominantly by women, who have learned the motion from their
              mothers and grandmothers.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-muted leading-relaxed"
            >
              For generations, this knowledge sustained households. Then
              synthetic materials arrived, markets shifted, and what was once a
              vital rural livelihood became a peripheral one. The collective was
              formed as a response to that shift — not to recreate the past, but
              to build a more durable future for it.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-muted leading-relaxed"
            >
              Nepal Hemp Collective brings together rural cottage industries and
              artisan processors from across Bajhang district. We aggregate
              wild-harvested hemp and lokta fiber, provide consistent quality
              sorting and packaging for export, and ensure that fair wages reach
              the farmers and artisans who do the actual work. We are not a
              factory. We are a structured network of people who have been doing
              this longer than most brands have existed.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="350"
              className="text-muted leading-relaxed"
            >
              The fiber we supply is semi-processed and raw — we are transparent
              about this. Our buyers are manufacturers who value the absence of
              industrial intervention in the upstream chain. They come to us for
              consistency, traceability, and a sourcing story that is true.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-muted leading-relaxed"
            >
              What we want for the next generation of Bajhang&apos:s artisans is
              straightforward: that their knowledge is worth something on the
              global market, that they are paid fairly for it, and that the wild
              hemp growing on their hillsides is recognized as what it is — one
              of the world&apos:s most traceable, sustainable plant fibers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary-dk text-text">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div data-aos="fade-up" className="text-center mb-14 space-y-4">
            <div className="text-xs tracking-[0.3em] uppercase text-accent/80">
              The People
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Meet the Collective
            </h2>

            <p className="text-muted max-w-xl mx-auto">
              Every fiber we supply is touched by real hands. Here are some of
              the artisans and farmers at the heart of what we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((item, i) => (
              <ArtisanCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary text-secondary">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="max-w-5xl mx-auto px-6 py-20 lg:py-28"
        >
          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Work With the Source.
          </h2>

          {/* Description */}
          <p className="text-secondary/60 max-w-xl mb-10 leading-relaxed">
            No intermediaries, no obscured origins. Direct partnerships with the
            community that grows and processes your fiber.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 uppercase">
            <Link
              href="/contact"
              className="btn bg-accent hover:-translate-y-0.5 text-secondary transition-transform duration-100 border-none hover:bg-accent-lt"
            >
              Partner With Us
            </Link>

            <Link
              href="/process"
              className="btn btn-outline hover:-translate-y-0.5 transition-transform duration-100 border-secondary/40 text-secondary hover:bg-secondary hover:text-primary"
            >
              See our process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
