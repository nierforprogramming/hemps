import ProductCard from "@/components/product-card";
import { products } from "@/constants";
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
    </div>
  );
};

export default Products;
