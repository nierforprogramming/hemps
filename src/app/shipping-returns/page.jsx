import Link from "next/link";

const sections = [
  { id: "intro", title: "Overview" },
  { id: "shipping", title: "Shipping" },
  { id: "delivery", title: "Delivery Terms" },
  { id: "returns", title: "Returns & Refunds" },
  { id: "cancellation", title: "Cancellations" },
  { id: "tracking", title: "Tracking" },
  { id: "damages", title: "Damaged Parcels" },
  { id: "taxes", title: "Duties & Taxes" },
  { id: "contact", title: "Contact" },
];

const Page = () => {
  return (
    <div className="bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:flex lg:gap-10">
        <aside className="hidden lg:block w-64 sticky top-24 h-fit">
          <div className="bg-base-200 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-3">Contents</h3>
            <ul className="space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-primary">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1">
          <div className="prose max-w-none prose-headings:text-primary prose-a:text-accent space-y-4">
            <h1>Shipping & Returns Policy</h1>
            <p className="text-sm opacity-70">Last updated: April 15, 2026</p>

            <section id="intro">
              <p>
                This policy outlines shipping, delivery, returns, and refund
                terms for Nepal Hemp Collective.
              </p>
            </section>

            <section id="shipping">
              <h2>Shipping Policy</h2>

              <h3>General</h3>
              <p>
                Orders are subject to stock availability. If items are
                unavailable, we will contact you for replacement or refund.
              </p>

              <h3>Shipping Costs</h3>
              <p>
                Shipping fees are calculated at checkout based on weight,
                dimensions, and location.
              </p>
            </section>

            <section id="delivery">
              <h2>Delivery Terms</h2>

              <ul>
                <li>
                  <strong>Domestic:</strong> 2–7 days
                </li>
                <li>
                  <strong>International:</strong> 4–22 days
                </li>
                <li>
                  <strong>Dispatch:</strong> Within 2 business days
                </li>
              </ul>

              <p>
                Address changes are allowed before dispatch. Delays may occur
                during holidays.
              </p>
            </section>

            <section id="returns">
              <h2>Returns & Refunds</h2>

              <h3>Change of Mind</h3>
              <ul>
                <li>Return within 3 days</li>
                <li>Item must be unopened and in original packaging</li>
                <li>Refund issued as store credit</li>
              </ul>

              <h3>Warranty Returns</h3>
              <ul>
                <li>Valid within 90 days</li>
                <li>Shipping reimbursed after approval</li>
                <li>Resolution: refund, replacement, or credit</li>
              </ul>

              <h3>Return Conditions</h3>
              <ul>
                <li>Items must be unused and in original packaging</li>
                <li>Some items (perishable, hygiene) are non-returnable</li>
              </ul>
            </section>

            <section id="cancellation">
              <h2>Cancellations</h2>
              <p>
                Orders can be cancelled before dispatch. After dispatch, return
                policies apply.
              </p>
            </section>

            <section id="tracking">
              <h2>Tracking</h2>
              <p>
                A tracking link will be provided once your order is shipped.
              </p>
            </section>

            <section id="damages">
              <h2>Damaged or Lost Parcels</h2>
              <p>
                If your parcel arrives damaged, contact us immediately. Refund
                or replacement will be processed after courier investigation.
              </p>
            </section>

            <section id="taxes">
              <h2>Duties & Taxes</h2>
              <ul>
                <li>Sales tax included in product price</li>
                <li>No additional import duties for international orders</li>
              </ul>
            </section>

            <section id="contact">
              <h2>Contact Us</h2>
              <p>For any questions, visit:</p>
              <Link href="https://nepalhempcollective.com/contact">
                Contact Page
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
