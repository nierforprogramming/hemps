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
            <span className="block">Forged in the Himalayas,</span>
            <span className="block italic text-secondary/90">
              Structured for the World.
            </span>
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
              Our Story
            </h2>

            <div className="space-y-2 text-dark">
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-serif"
              >
                The Altitude Advantage
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-text leading-relaxed"
              >
                At Nepal Hemps Collective, we know that true sustainability
                cannot be manufactured in a laboratory. It has to be grown,
                harvested, and preserved. We are a direct-to-origin supplier of
                premium, wild-harvested Himalayan hemp and lokta fibers,
                dedicated to bridging the gap between remote mountain
                communities and the global sustainable textile industry. Our
                supply chain begins where most commercial agriculture ends. In
                the Bajhang district of Far-Western Nepal, tucked high into the
                Himalayan foothills, the air is thin, the terrain is rugged, and
                the winters are unforgiving. Here, wild hemp is not planted in
                commercial monocultures; it is seeded by the wind, watered by
                snowmelt, and grows naturally on steep hillsides and river
                margins. This extreme high-altitude exposure forces the plant to
                adapt, naturally yielding a bast fiber that is incredibly
                strong, long-lasting, and highly weather-resistant.
              </p>
            </div>

            <div className="space-y-2 text-dark">
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-serif"
              >
                Zero Chemicals, Zero Compromise
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-text leading-relaxed"
              >
                While the modern textile industry relies on heavy machinery and
                harsh chemicals to extract fibers quickly, we rely on time,
                water, and centuries of generational knowledge. We classify our
                output as semi-processed raw fiber because we believe in
                complete processing transparency—our fiber leaves Nepal exactly
                as nature intended. Instead of using industrial chemicals to
                break down the plant, our stalks are submerged in cold,
                fast-moving Himalayan rivers. This natural microbial action
                cleanly separates the fiber from the woody hurd without
                compromising its structural integrity. From there, the fibers
                are meticulously peeled entirely by hand. This highly skilled,
                labor-intensive work is done predominantly by local women who
                have inherited these techniques from their mothers and
                grandmothers. Finally, the extracted fiber is laid out under the
                intense UV rays of the Himalayan sun, locking in its raw
                strength and earthy texture without the use of artificial heat
                treatments.
              </p>
            </div>

            <div className="space-y-2 text-dark">
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-serif"
              >
                A Supply Chain Built on Human Dignity
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-text leading-relaxed"
              >
                We are not simply a broker or a factory. Nepal Hemps Collective
                is a highly structured network of over 200 artisan families and
                rural cottage industries. Before our collective was formed,
                shifts in the global market threatened to render this ancient
                knowledge obsolete. By aggregating this wild-harvested fiber and
                standardizing the quality for export, we have created a durable
                economic engine for these remote communities. We bypass
                traditional middlemen, ensuring that fair, premium wages go
                directly into the hands of the people who hike the hills, cut
                the stalks, and peel the fibers. Today, Nepal Hemps Collective
                successfully supplies partners across 18 international export
                destinations. When you source from us, you are not just buying
                raw material. You are securing a 100% chemical-free, transparent
                upstream supply chain—and investing in a profoundly positive
                future for the communities that make it possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-dk text-text">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div data-aos="fade-up" className="text-center mb-14 space-y-4">
            <div className="text-xs w-fit mx-auto px-4 py-2 rounded-sm tracking-[0.3em] uppercase text-primary bg-primary-glow">
              The People
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-dark">
              Meet the Collective
            </h2>

            <p className="text-text max-w-xl mx-auto">
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
      <section className="bg-linear-to-l from-primary to-primary-lt text-secondary">
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
