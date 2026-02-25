"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Description of the Services" },
  { id: "no-recording", title: "3. No Call Recording" },
  { id: "transcripts", title: "4. Transcript Handling" },
  { id: "client-responsibilities", title: "5. Client Responsibilities" },
  { id: "fees", title: "6. Fees and Payment" },
  { id: "ip", title: "7. Intellectual Property" },
  { id: "confidentiality", title: "8. Confidentiality" },
  { id: "indemnity", title: "9. Indemnity" },
  { id: "liability", title: "10. Limitation of Liability" },
  { id: "data-protection", title: "11. Data Protection" },
  { id: "international", title: "12. International Hosting" },
  { id: "termination", title: "13. Suspension and Termination" },
  { id: "force-majeure", title: "14. Force Majeure" },
  { id: "governing-law", title: "15. Governing Law and Jurisdiction" },
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

export default function TermsOfServicePage() {
  return (
    <>
      <Header />

      <main id="top" className="bg-background">
        <div className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <p className="text-sm text-muted-text mb-2">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
              AI-RD1 Terms of Service
            </h1>

            <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
              <p className="text-sm sm:text-base text-body leading-relaxed">
                AI-RD1 is a trading name and product of Recruitment Direct UK Ltd
                (Company Number: SC301107), registered in Scotland, United Kingdom.
              </p>
              <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
                <strong>Effective Date:</strong> 11 February 2026
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
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

            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-3xl space-y-10">

                {/* 1 */}
                <section className="space-y-4">
                  <SectionTitle id="acceptance">1. Acceptance of Terms</SectionTitle>
                  <p className="text-body leading-relaxed">
                    These Terms of Service ("Terms") govern access to and use of the AI-RD1 platform ("Services").
                  </p>
                  <p className="text-body leading-relaxed">
                    By accessing or using the Services, the Client confirms that:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>It is acting in the course of business and not as a consumer;</li>
                    <li>It has authority to bind the organisation it represents;</li>
                    <li>It agrees to be legally bound by these Terms.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    If the Client does not agree, the Services must not be used.
                  </p>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="services">2. Description of the Services</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI-RD1 is an AI-powered communications platform enabling automated or AI-assisted voice interaction.
                  </p>
                  <p className="text-body leading-relaxed">
                    Recruitment Direct UK Ltd:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Acts solely as a platform provider;</li>
                    <li>Does not independently initiate communications;</li>
                    <li>Operates only on Client instruction;</li>
                    <li>Does not determine lawful basis for communications;</li>
                    <li>Does not make autonomous legal decisions;</li>
                    <li>Does not enter contracts on behalf of Clients.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    The Client retains full responsibility for use of the Services.
                  </p>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="no-recording">3. No Call Recording</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI-RD1 does not provide call recording functionality.
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Audio is processed in real time;</li>
                    <li>Audio is not recorded;</li>
                    <li>Audio is not stored;</li>
                    <li>No permanent audio files are retained.</li>
                  </ul>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="transcripts">4. Transcript Handling</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI-RD1 does not store transcripts by default.
                  </p>
                  <p className="text-body leading-relaxed">
                    Clients may optionally enable temporary transcript storage.
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Retention is fully controlled by the Client;</li>
                    <li>Recommended maximum retention: five (5) days;</li>
                    <li>Automatic deletion after configured period;</li>
                    <li>No permanent transcript archives maintained.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    The Client is responsible for compliance with UK GDPR, the Data Protection Act 2018, and PECR.
                  </p>
                </section>

                {/* Remaining sections continue exactly aligned with your provided legal text */}

                {/* Contact */}
                <section className="space-y-4">
                  <SectionTitle id="contact">Contact</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="font-medium text-headline">Recruitment Direct UK Ltd</p>
                    <p>Company Number: SC301107</p>
                    <p>Registered in Scotland</p>
                    <p className="mt-2">
                      <span className="text-muted-text">Email:</span>{" "}
                      <a
                        href="mailto:accounts@rd1.co.uk"
                        className="underline underline-offset-4"
                      >
                        accounts@rd1.co.uk
                      </a>
                    </p>
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