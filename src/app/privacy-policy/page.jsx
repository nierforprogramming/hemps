const sections = [
  { id: "intro", title: "Introduction" },
  { id: "definitions", title: "Definitions" },
  { id: "data", title: "Data Collection" },
  { id: "cookies", title: "Cookies" },
  { id: "usage", title: "Use of Data" },
  { id: "sharing", title: "Sharing Data" },
  { id: "retention", title: "Retention" },
  { id: "security", title: "Security" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes" },
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
                  <a
                    href={`#${s.id}`}
                    className="hover:text-primary transition"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1">
          <div className="prose max-w-none prose-headings:text-primary prose-a:text-accent space-y-4">
            <h1>Privacy Policy</h1>
            <p className="text-sm opacity-70">Last updated: April 15, 2026</p>

            <section id="intro">
              <p>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights.
              </p>
              <p>
                By using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </section>

            <section id="definitions">
              <h2>Interpretation and Definitions</h2>

              <h3>Definitions</h3>
              <ul>
                <li>
                  <strong>Account:</strong> A unique account created for You.
                </li>
                <li>
                  <strong>Affiliate:</strong> Entity under common control.
                </li>
                <li>
                  <strong>Company:</strong> Nepal Hemp Collective.
                </li>
                <li>
                  <strong>Cookies:</strong> Small files stored on your device.
                </li>
                <li>
                  <strong>Country:</strong> Nepal
                </li>
                <li>
                  <strong>Device:</strong> Any device accessing the Service.
                </li>
                <li>
                  <strong>Personal Data:</strong> Identifiable information.
                </li>
                <li>
                  <strong>Service:</strong> The Website.
                </li>
              </ul>
            </section>

            <section id="data">
              <h2>Collecting and Using Your Personal Data</h2>

              <h3>Types of Data Collected</h3>
              <p>Personal Data may include:</p>
              <ul>
                <li>Email address</li>
                <li>Name</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Usage Data</li>
              </ul>

              <p>
                Usage Data is collected automatically such as IP address,
                browser type, visited pages, and time spent.
              </p>
            </section>

            <section id="cookies">
              <h2>Tracking Technologies and Cookies</h2>
              <p>
                We use Cookies and similar tracking technologies to track
                activity and store information.
              </p>
              <ul>
                <li>
                  <strong>Necessary Cookies:</strong> Required for functionality
                </li>
                <li>
                  <strong>Acceptance Cookies:</strong> Track consent
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Remember preferences
                </li>
              </ul>
            </section>

            <section id="usage">
              <h2>Use of Your Personal Data</h2>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To manage your account</li>
                <li>To contact you</li>
                <li>To send updates and offers</li>
                <li>To analyze and improve service</li>
              </ul>
            </section>

            <section id="sharing">
              <h2>Sharing Your Personal Data</h2>
              <ul>
                <li>With service providers</li>
                <li>For business transfers</li>
                <li>With affiliates and partners</li>
                <li>With your consent</li>
              </ul>
            </section>

            <section id="retention">
              <h2>Retention of Data</h2>
              <p>
                We retain Personal Data only as long as necessary for legal and
                operational purposes.
              </p>
            </section>

            <section id="security">
              <h2>Security</h2>
              <p>
                No method of transmission over the Internet is 100% secure, but
                we strive to protect your data.
              </p>
            </section>

            <section id="children">
              <h2>Children&apos;s Privacy</h2>
              <p>Our Service does not address anyone under the age of 13.</p>
            </section>

            <section id="changes">
              <h2>Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy and will notify users by
                updating the date.
              </p>
            </section>

            <section id="contact">
              <h2>Contact Us</h2>
              <p>
                Visit:{" "}
                <a href="https://nepalhempcollective.com">
                  nepalhempcollective.com
                </a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
