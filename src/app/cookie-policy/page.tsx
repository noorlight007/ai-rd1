"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "what-are-cookies", title: "2. What Are Cookies?" },
  { id: "types", title: "3. Types of Cookies We Use" },
  { id: "consent", title: "4. Consent" },
  { id: "managing", title: "5. Managing Cookies" },
  { id: "third-party", title: "6. Third-Party Cookies" },
  { id: "changes", title: "7. Changes to This Policy" },
  { id: "company", title: "Company Information" },
];

function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-headline tracking-tight"
    >
      {children}
    </h2>
  );
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main id="top" className="bg-background">
        {/* Header */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div>
              <p className="text-sm text-muted-text mb-2">Legal</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
                AI-RD1 Cookie Policy
              </h1>

              <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  AI-RD1 is a trading name of Recruitment Direct UK Ltd (Company Number:
                  SC301107), registered in Scotland.
                </p>

                <p className="text-sm sm:text-base text-body">
                  <span className="text-muted-text">Effective Date:</span>{" "}
                  <span className="font-medium">11 February 2026</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* TOC */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-border bg-card/40 p-5">
                  <p className="text-sm font-semibold text-headline">On this page</p>
                  <nav className="mt-4">
                    <ul className="space-y-2">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="text-sm text-body hover:text-headline transition-colors"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Body */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-3xl space-y-10">
                {/* 1 */}
                <section className="space-y-4">
                  <SectionTitle id="introduction">1. Introduction</SectionTitle>
                  <p className="text-body leading-relaxed">
                    This Cookie Policy explains how AI-RD1 uses cookies and similar technologies
                    on its website and platform.
                  </p>
                  <p className="text-body leading-relaxed">
                    This policy should be read alongside the{" "}
                    <a
                      href="/privacy-policy"
                      className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                      AI-RD1 Privacy Policy
                    </a>
                    .
                  </p>
                  <p className="text-body leading-relaxed">
                    We comply with the UK GDPR, the Data Protection Act 2018, and the Privacy and
                    Electronic Communications Regulations (PECR).
                  </p>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="what-are-cookies">2. What Are Cookies?</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Cookies are small text files placed on a user&apos;s device when visiting a
                    website. They help websites function effectively and improve user experience.
                  </p>
                  <p className="text-body leading-relaxed">
                    Cookies may be session-based (deleted when the browser is closed) or
                    persistent (stored for a defined period).
                  </p>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="types">3. Types of Cookies We Use</SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">3.1 Strictly Necessary Cookies</h3>
                    <p className="text-body leading-relaxed">
                      These cookies are essential for the operation of the website and platform.
                    </p>
                    <p className="text-body leading-relaxed">They may include:</p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                      <li>Authentication cookies</li>
                      <li>Security cookies</li>
                      <li>Session management cookies</li>
                      <li>Load balancing cookies</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                      These cookies do not require user consent under PECR.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">3.2 Analytics Cookies</h3>
                    <p className="text-body leading-relaxed">
                      Analytics cookies help us understand how visitors interact with the website,
                      including:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                      <li>Page visits</li>
                      <li>Traffic patterns</li>
                      <li>Performance metrics</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                      Analytics cookies are only activated where valid consent has been obtained.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">3.3 Functional Cookies</h3>
                    <p className="text-body leading-relaxed">
                      Functional cookies enable enhanced website functionality, such as remembering
                      user preferences.
                    </p>
                    <p className="text-body leading-relaxed">
                      These are used only where appropriate consent has been provided.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">
                      3.4 Marketing or Advertising Cookies
                    </h3>
                    <p className="text-body leading-relaxed">
                      Where marketing tools are used, such cookies may measure advertising
                      effectiveness or track campaign performance.
                    </p>
                    <p className="text-body leading-relaxed">
                      Marketing cookies are only activated where valid consent has been obtained.
                    </p>
                  </div>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="consent">4. Consent</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Under PECR, non-essential cookies require user consent.
                  </p>
                  <p className="text-body leading-relaxed">Where required:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Users are provided with a clear cookie notice</li>
                    <li>Non-essential cookies are not activated until consent is given</li>
                    <li>
                      Users may withdraw consent at any time through the website&apos;s cookie
                      settings
                    </li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Strictly necessary cookies may operate without consent.
                  </p>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                  <SectionTitle id="managing">5. Managing Cookies</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Users may control or delete cookies through their browser settings.
                  </p>
                  <p className="text-body leading-relaxed">
                    Disabling certain cookies may affect website functionality.
                  </p>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                  <SectionTitle id="third-party">6. Third-Party Cookies</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Some cookies may be set by third-party service providers, including analytics
                    or hosting providers.
                  </p>
                  <p className="text-body leading-relaxed">
                    Such providers are subject to contractual safeguards and applicable data
                    protection laws.
                  </p>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                  <SectionTitle id="changes">7. Changes to This Policy</SectionTitle>
                  <p className="text-body leading-relaxed">
                    This Cookie Policy may be updated periodically to reflect legal or operational
                    changes.
                  </p>
                </section>

                {/* Company info */}
                <section className="space-y-4">
                  <SectionTitle id="company">Company Information</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <div className="space-y-2 text-body">
                      <p className="font-medium text-headline">Recruitment Direct UK Ltd</p>
                      <p>
                        <span className="text-muted-text">Company Number:</span> SC301107
                      </p>
                      <p>Registered in Scotland</p>
                      <p>
                        <span className="text-muted-text">Incorporated:</span> 2006
                      </p>
                      <p>
                        <span className="text-muted-text">Email:</span>{" "}
                        <a
                          href="mailto:accounts@rd1.co.uk"
                          className="text-body hover:text-headline underline underline-offset-4"
                        >
                          accounts@rd1.co.uk
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="#top"
                      className="inline-flex items-center gap-2 text-sm text-body hover:text-headline transition-colors"
                    >
                      <span className="inline-block">↑</span>
                      Back to top
                    </a>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}