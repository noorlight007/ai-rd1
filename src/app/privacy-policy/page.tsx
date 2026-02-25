"use client";
// app/privacy-policy/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "./BackToTop";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "roles", title: "2. Role of the Parties" },
  { id: "data", title: "3. Personal Data We Process" },
  { id: "audio", title: "4. Audio Processing" },
  { id: "transcripts", title: "5. Transcript Handling" },
  { id: "lawful-basis", title: "6. Lawful Basis for Processing" },
  { id: "intl-transfers", title: "7. International Data Transfers" },
  { id: "security", title: "8. Security Measures" },
  { id: "retention", title: "9. Data Retention" },
  { id: "rights", title: "10. Data Subject Rights" },
  { id: "complaints", title: "11. Complaints" },
  { id: "updates", title: "12. Updates" },
  { id: "company", title: "Company Information" },
  { id: "contact", title: "Contact" },
];

function SectionTitle({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background" id="top">
        {/* Header */}
        <div className="border-b border-border pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <p className="text-sm text-muted-text mb-2">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
              AI-RD1 Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-body">
              Effective Date: <span className="font-medium">11 February 2026</span>
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
              <p className="text-sm sm:text-base text-body leading-relaxed">
                AI-RD1 is a trading name of Recruitment Direct UK Ltd (Company Number:
                SC301107), registered in Scotland.
              </p>
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

            {/* Policy body */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-3xl space-y-10">
                {/* 1 */}
                <section className="space-y-4">
                  <SectionTitle id="introduction">1. Introduction</SectionTitle>
                  <p className="text-body leading-relaxed">
                    This Privacy Policy explains how Recruitment Direct UK Ltd (&quot;we&quot;,
                    &quot;us&quot;, &quot;our&quot;) processes personal data in connection with
                    the AI-RD1 platform.
                  </p>
                  <p className="text-body leading-relaxed">
                    We are committed to complying with:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>UK GDPR</li>
                    <li>Data Protection Act 2018</li>
                    <li>Privacy and Electronic Communications Regulations (PECR)</li>
                    <li>Applicable telecommunications legislation</li>
                  </ul>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="roles">2. Role of the Parties</SectionTitle>
                  <p className="text-body leading-relaxed">
                    In relation to personal data processed through AI-RD1:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>The Client acts as Data Controller.</li>
                    <li>Recruitment Direct UK Ltd acts as Data Processor.</li>
                    <li>
                      The Client determines the purpose and lawful basis for communications
                      conducted through the platform.
                    </li>
                    <li>
                      AI-RD1 processes personal data solely on documented Client instructions.
                    </li>
                  </ul>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="data">3. Personal Data We Process</SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-headline">3.1 Client Account Data</h3>
                      <p className="text-body leading-relaxed">
                        We process business account information including:
                      </p>
                      <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Organisation name</li>
                        <li>Authorised user contact details</li>
                        <li>Billing and payment information</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-headline">
                        3.2 Contact Data Uploaded by Clients
                      </h3>
                      <p className="text-body leading-relaxed">
                        Clients may upload contact data into the platform, including:
                      </p>
                      <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Names</li>
                        <li>Telephone numbers</li>
                        <li>Email addresses (where applicable)</li>
                      </ul>
                      <p className="text-body leading-relaxed">
                        AI-RD1 does not independently source, purchase, or determine outreach
                        contact data.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="audio">4. Audio Processing</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI-RD1 does not provide call recording functionality.
                  </p>
                  <p className="text-body leading-relaxed">
                    Audio transmitted through the platform:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Is processed in real time;</li>
                    <li>Is not recorded;</li>
                    <li>Is not stored;</li>
                    <li>Is not archived.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    No permanent audio files are retained.
                  </p>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                  <SectionTitle id="transcripts">5. Transcript Handling</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI-RD1 does not store transcripts by default.
                  </p>
                  <p className="text-body leading-relaxed">
                    Clients may optionally enable temporary transcript storage for quality
                    assurance or operational review.
                  </p>
                  <p className="text-body leading-relaxed">Where enabled:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Retention is fully controlled by the Client;</li>
                    <li>A recommended maximum retention period of five (5) days applies;</li>
                    <li>Transcripts are automatically deleted after the configured period;</li>
                    <li>No permanent transcript archives are maintained.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    The Client is responsible for ensuring transcript retention complies with
                    UK GDPR and the Data Protection Act 2018.
                  </p>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                  <SectionTitle id="lawful-basis">6. Lawful Basis for Processing</SectionTitle>
                  <p className="text-body leading-relaxed">
                    The lawful basis for outreach communications is determined by the Client.
                  </p>
                  <p className="text-body leading-relaxed">This may include:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Consent (where required under PECR);</li>
                    <li>Legitimate interests;</li>
                    <li>Contractual necessity.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Recruitment Direct UK Ltd does not determine lawful basis on behalf of Clients.
                  </p>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                  <SectionTitle id="intl-transfers">7. International Data Transfers</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI-RD1 may utilise global cloud infrastructure.
                  </p>
                  <p className="text-body leading-relaxed">
                    Where personal data is transferred outside the United Kingdom, appropriate
                    safeguards are implemented in accordance with UK GDPR, including contractual
                    and technical protections.
                  </p>
                </section>

                {/* 8 */}
                <section className="space-y-4">
                  <SectionTitle id="security">8. Security Measures</SectionTitle>
                  <p className="text-body leading-relaxed">
                    We implement appropriate technical and organisational measures including:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Encrypted transmission (TLS);</li>
                    <li>Role-based access controls;</li>
                    <li>Secure hosting infrastructure;</li>
                    <li>Monitoring and incident management procedures.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Access to personal data is restricted to authorised personnel.
                  </p>
                </section>

                {/* 9 */}
                <section className="space-y-4">
                  <SectionTitle id="retention">9. Data Retention</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Client account data is retained for the duration of the contractual relationship
                    and a reasonable period thereafter.
                  </p>
                  <p className="text-body leading-relaxed">
                    Transcript data (if enabled) is automatically deleted after the Client-configured
                    retention period.
                  </p>
                  <p className="text-body leading-relaxed">Audio recordings are not retained.</p>
                </section>

                {/* 10 */}
                <section className="space-y-4">
                  <SectionTitle id="rights">10. Data Subject Rights</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Under UK GDPR, individuals may have rights to:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Access their personal data;</li>
                    <li>Rectify inaccurate data;</li>
                    <li>Request erasure;</li>
                    <li>Restrict processing;</li>
                    <li>Object to processing.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Requests relating to communications should be directed to the relevant Client as
                    Data Controller.
                  </p>
                  <p className="text-body leading-relaxed">
                    Requests relating to platform processing may be directed to the Company using
                    the contact details below.
                  </p>
                </section>

                {/* 11 */}
                <section className="space-y-4">
                  <SectionTitle id="complaints">11. Complaints</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Individuals may lodge a complaint with the Information Commissioner&apos;s Office
                    (ICO) if they believe their personal data has been processed unlawfully.
                  </p>
                </section>

                {/* 12 */}
                <section className="space-y-4">
                  <SectionTitle id="updates">12. Updates</SectionTitle>
                  <p className="text-body leading-relaxed">
                    This Privacy Policy may be updated periodically to reflect legal, regulatory,
                    or operational changes.
                  </p>
                </section>

                {/* Company Information */}
                <section className="space-y-4">
                  <SectionTitle id="company">Company Information</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <div className="text-body leading-relaxed">
                      <p className="font-medium text-headline">Recruitment Direct UK Ltd</p>
                      <p>
                        <span className="text-muted-text">Company Number:</span> SC301107
                      </p>
                      <p>Registered in Scotland</p>
                      <p>
                        <span className="text-muted-text">Incorporated:</span> 2006
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section className="space-y-4">
                  <SectionTitle id="contact">Contact</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                      <span className="text-muted-text">Email:</span>{" "}
                      <a
                        href="mailto:accounts@rd1.co.uk"
                        className="text-body hover:text-headline underline underline-offset-4"
                      >
                        accounts@rd1.co.uk
                      </a>
                    </p>
                  </div>

                  <div className="pt-4">
                    <BackToTop />
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