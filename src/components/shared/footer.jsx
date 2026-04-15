import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-secondary border-t border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>

            <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
              Wild Himalayan hemp fiber. Hand-processed. Fully traceable.
              Bajhang district, Far-Western Nepal.
            </p>
          </div>

          {/* NAVIGATE */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-secondary/50 mb-4">
              Navigate
            </h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-secondary/90">
                Home
              </Link>
              <Link href="/story" className="hover:text-secondary/90">
                Our Story
              </Link>
              <Link href="/process" className="hover:text-secondary/90">
                Process
              </Link>
              <Link href="/products" className="hover:text-secondary/90">
                Products
              </Link>
              <Link href="/contact" className="hover:text-secondary/90">
                Contact
              </Link>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-secondary/50 mb-4">
              Products
            </h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/products" className="hover:text-secondary/90">
                Wild Hemp Fiber
              </Link>
              <Link href="/products" className="hover:text-secondary/90">
                Lokta Fiber
              </Link>
              <Link href="/products" className="hover:text-secondary/90">
                Sample Kits
              </Link>
              <Link href="/products" className="hover:text-secondary/90">
                Wholesale Inquiry
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-secondary/50 mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/contact" className="hover:text-secondary/90">
                Wholesale & Export
              </Link>
              <Link href="/contact" className="hover:text-secondary/90">
                Samples & Enquiries
              </Link>
              <Link href="/contact" className="hover:text-secondary/90">
                Press & Partnerships
              </Link>

              <span className="hover:text-secondary/90 text-xs mt-2 cursor-pointer">
                Bajhang, Far-Western Nepal
              </span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-secondary/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary/50">
          {/* COPYRIGHT */}
          <span>
            © {new Date().getFullYear()} Nepal Hemp Collective · Raw. Pure.
            Himalayan.
          </span>

          {/* LEGAL */}
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-secondary/80">
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-secondary/80"
            >
              Terms and Conditions
            </Link>
            <Link href="shipping-returns" className="hover:text-secondary/80">
              Shipping and Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
