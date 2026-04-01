import React from "react";
import Link from "next/link";

const FooterCTA = () => {
  return (
    <section className="bg-primary text-secondary">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="max-w-5xl mx-auto px-6 py-20 lg:py-28"
      >
        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
          Ready to Source Responsibly?
        </h2>

        {/* Description */}
        <p className="text-secondary/60 max-w-xl mb-10 leading-relaxed">
          We work with sustainable fashion labels, eco-textile manufacturers,
          and wholesale buyers who need fiber they can trust — and a story they
          can tell.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 uppercase">
          <Link
            href="/contact"
            className="btn bg-accent hover:-translate-y-0.5 text-secondary transition-transform duration-100 border-none hover:bg-accent-lt"
          >
            Request a Wholesale Quote
          </Link>

          <Link
            href="/products"
            className="btn btn-outline hover:-translate-y-0.5 transition-transform duration-100 border-secondary/40 text-secondary hover:bg-secondary hover:text-primary"
          >
            View Products & MOQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
