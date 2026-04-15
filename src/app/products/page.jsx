import ProductCard from "@/components/product-card";
import { products, whyItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div>
      <section className="bg-primary text-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 lg:py-32">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
          >
            <span className="block">Raw Fiber,</span>
            <span className="block italic text-secondary/90">
              Ready to Source.
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-secondary/60 max-w-xl leading-relaxed text-base md:text-lg"
          >
            Semi-processed natural fiber for manufacturers, exporters, and
            brands who need consistent quality, honest documentation, and a
            sourcing story that holds up under scrutiny.
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-secondary text-text"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
          {/* HEADER */}
          <div data-aos="fade-up" className="text-center mb-14 space-y-4">
            <div className="text-xs tracking-[0.3em] uppercase text-accent/80">
              Our Fiber Offerings
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              What We Supply
            </h2>

            <p className="text-muted max-w-xl mx-auto">
              All fiber is semi-processed and raw. We are transparent about this
              in every shipment, every invoice, every customs form.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, i) => (
              <ProductCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="text-xs tracking-[0.3em] uppercase text-accent/80 mb-6">
              Why Source From Us
            </div>

            <div className="space-y-8">
              {whyItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 pb-6 border-b border-primary/10 last:border-none"
                >
                  {/* Number */}
                  <div className="text-accent font-semibold text-xl font-serif">
                    {item.num}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-sans text-lg text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center"
          >
            <div className="bg-secondary-dk border border-primary/10 rounded-md p-8 lg:p-10 relative w-full">
              {/* Accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-l-md" />

              {/* Label */}
              <div className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
                Processing Disclosure
              </div>

              {/* Quote */}
              <blockquote className="font-serif italic text-primary text-lg leading-relaxed mb-6">
                &ldquo;Our fiber is semi-processed and raw. We are transparent
                about this — always.&rdquo;
              </blockquote>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6">
                Water-retted and sun-dried. Not degummed, not bleached, not
                chemically softened. Your downstream team performs further
                refinement. We supply the clean, traceable upstream.
              </p>

              {/* Button */}
              <Link
                href="/process"
                className="btn btn-outline tracking-wide uppercase border-primary/40 text-primary hover:bg-primary hover:text-secondary"
              >
                Full Process Details →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-16 lg:py-15">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="max-w-4xl mx-auto px-6"
        >
          <div className="relative border border-primary/10 bg-[#D9D1C2] rounded-sm text-center px-6 py-12 lg:py-14">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />

            {/* Heading */}
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
              Ready to Place an Order?
            </h2>

            {/* Description */}
            <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
              Tell us your quantity, destination country, and intended use —
              we’ll respond within 2 business days with availability, pricing,
              and documentation details.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 uppercase">
              <Link
                href="/contact"
                className="btn hover:-translate-y-0.5 transition-transform duration-100  bg-accent text-secondary border-none hover:bg-accent-lt px-6"
              >
                Request a Sample Kit
              </Link>

              <Link
                href="/contact"
                className="btn hover:-translate-y-0.5 transition-transform duration-100  btn-outline border-primary/40 text-primary hover:bg-primary hover:text-secondary px-6"
              >
                Get a Wholesale Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
