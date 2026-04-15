"use client";
import { useState } from "react";
import Input from "@/components/shared/input";
import Select from "@/components/shared/select";
import Textarea from "@/components/shared/textarea";
import { contactCards } from "@/constants";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    country: "",
    inquiryType: "",
    quantity: "",
    useCase: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      alert("Inquiry sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

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
            <span className="block italic text-secondary/90">
              Let&apos;s Talk Fiber.
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-secondary/60 max-w-xl leading-relaxed text-base md:text-lg"
          >
            We&apos;re a small collective operating from a remote part of Nepal
            — but we move quickly on inquiries. Reach us through the direct
            contact that fits your need, or fill in the form below and
            we&apos;ll route it ourselves.
          </p>
        </div>
      </section>
      <section className="bg-secondary text-text">
        <div className="max-w-4xl mx-auto px-6 py-20 lg:py-10">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-secondary-dk border border-secondary-dd p-5 rounded-md mb-16"
          >
            <p className="text-sm text-muted leading-relaxed">
              <span className="font-semibold text-primary">Response time:</span>{" "}
              We aim to respond within 2 business days. For urgent export
              deadlines, include <span className="italic">URGENT</span> in your
              subject line. The more detail you provide upfront — quantity,
              destination, intended use — the faster and more useful our
              response will be.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-secondary-dk border border-secondary-dd rounded-md p-6 lg:p-10 mb-20"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-accent mb-2">
              Send an Inquiry
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-3">
              Get in Touch
            </h2>

            <p className="text-muted mb-8 max-w-2xl">
              Not sure which email to use? Fill in the form and we will make
              sure it reaches the right person within 2 business days.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                label="Full Name *"
                placeholder="Your name"
              />

              <Input
                name="company"
                value={form.company}
                onChange={handleChange}
                label="Company / Organisation *"
                placeholder="Your company"
              />
              <Input
                name="email"
                value={form.email}
                onChange={handleChange}
                label="Email Address *"
                placeholder="you@company.com"
              />
              <Input
                name="country"
                value={form.country}
                onChange={handleChange}
                label="Destination Country *"
                placeholder="e.g. Germany, Japan, USA"
              />

              <Select
                name="inquiryType"
                value={form.inquiryType}
                onChange={handleChange}
                label="Inquiry Type *"
              />

              <Input
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                label="Estimated Quantity"
                placeholder="e.g. 500 kg, 2 tonnes, sample only"
              />

              <Input
                name="useCase"
                value={form.useCase}
                onChange={handleChange}
                full
                label="Intended Use / Application"
                placeholder="e.g. Natural yarn spinning, sustainable packaging, R&D"
              />

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                label="Your Message *"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mt-8 gap-4">
              <p className="text-xs text-muted">
                * Required fields. We never share your details with third
                parties.
              </p>

              <button className="bg-accent text-secondary px-6 py-3 text-sm uppercase tracking-wide hover:bg-accent-lt transition">
                Send Inquiry →
              </button>
            </div>
          </form>

          <div className="text-center max-w-3xl mx-auto">
            <blockquote
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-serif italic text-lg md:text-xl text-primary leading-relaxed"
            >
              {
                "“Nepal Hemp Collective is run by the people who do the work — the farmers, the artisans, and a small coordination team that connects Bajhang's hills to the global market. Every inquiry matters to us.”"
              }
            </blockquote>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-6 text-xs tracking-[0.15em] uppercase text-muted"
            >
              — The Nepal Hemp Collective Team
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-2 text-[11px] tracking-[0.1em] uppercase text-muted/70"
            >
              Bajhang District, Far-Western Nepal
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
