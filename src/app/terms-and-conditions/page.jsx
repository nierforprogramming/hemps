const sections = [
  { id: "intro", title: "Introduction" },
  { id: "cookies", title: "Cookies" },
  { id: "license", title: "License" },
  { id: "comments", title: "User Comments" },
  { id: "hyperlinking", title: "Hyperlinking" },
  { id: "iframes", title: "iFrames" },
  { id: "liability", title: "Content Liability" },
  { id: "rights", title: "Reservation of Rights" },
  { id: "removal", title: "Removal of Links" },
  { id: "disclaimer", title: "Disclaimer" },
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
            <h1>Terms and Conditions</h1>
            <p>Welcome to Nepal Hemp Collective!</p>

            <section id="intro">
              <p>
                These terms and conditions outline the rules and regulations for
                the use of our website.
              </p>
              <p>
                By accessing this website, you accept these terms. Do not
                continue to use the site if you do not agree.
              </p>

              <p>
                {`Terminology such as "You", "We", "Company" refers to both the
                user and Nepal Hemp Collective under applicable laws of Nepal.`}
              </p>
            </section>

            <section id="cookies">
              <h2>Cookies</h2>
              <p>
                We employ the use of cookies. By accessing the website, you
                agree to use cookies in accordance with our Privacy Policy.
              </p>
              <p>
                Cookies help enable functionality and improve user experience.
              </p>
            </section>

            <section id="license">
              <h2>License</h2>
              <p>
                Unless otherwise stated, Nepal Hemp Collective owns the
                intellectual property rights for all material.
              </p>

              <p>You must not:</p>
              <ul>
                <li>Republish material</li>
                <li>Sell, rent, or sub-license material</li>
                <li>Reproduce or copy material</li>
                <li>Redistribute content</li>
              </ul>
            </section>

            <section id="comments">
              <h2>User Comments</h2>
              <p>
                Parts of the website may allow users to post comments. These do
                not reflect our views.
              </p>

              <p>You agree that:</p>
              <ul>
                <li>You have rights to post content</li>
                <li>Content does not violate laws or rights</li>
                <li>Content is not offensive or unlawful</li>
              </ul>

              <p>We reserve the right to remove inappropriate content.</p>
            </section>

            <section id="hyperlinking">
              <h2>Hyperlinking to our Content</h2>
              <p>
                Certain organizations may link to our website without prior
                approval, including:
              </p>
              <ul>
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
              </ul>

              <p>Links must not be deceptive or imply false endorsement.</p>
            </section>

            <section id="iframes">
              <h2>iFrames</h2>
              <p>
                You may not create frames around our webpages without written
                permission.
              </p>
            </section>

            <section id="liability">
              <h2>Content Liability</h2>
              <p>
                We are not responsible for content appearing on external
                websites linking to us.
              </p>
            </section>

            <section id="rights">
              <h2>Reservation of Rights</h2>
              <p>
                We reserve the right to request removal of any links to our
                website and to update these terms at any time.
              </p>
            </section>

            <section id="removal">
              <h2>Removal of Links</h2>
              <p>
                If you find any link offensive, you may contact us. We are not
                obligated to remove it.
              </p>
            </section>

            <section id="disclaimer">
              <h2>Disclaimer</h2>
              <p>
                We exclude all warranties to the maximum extent permitted by
                law.
              </p>

              <ul>
                <li>No liability for loss or damage</li>
                <li>No guarantee of accuracy or availability</li>
              </ul>

              <p>Nothing limits liability where prohibited by law.</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
