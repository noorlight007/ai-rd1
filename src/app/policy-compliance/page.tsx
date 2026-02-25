// app/policies-and-compliance/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "data-protection-policy", title: "CallPilot Data Protection Policy" },
  { id: "dpa", title: "CallPilot Data Processing Agreement (DPA)" },
  { id: "sip", title: "Security & Infrastructure Policy" },
  { id: "atrp", title: "AI Transparency & Responsible Use Policy" },
  { id: "aup", title: "Acceptable Use Policy" },
  { id: "chp", title: "Call Handling Policy" },
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
      className="scroll-mt-28 text-lg sm:text-xl font-semibold text-headline tracking-tight"
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm sm:text-base font-semibold text-headline tracking-tight">
      {children}
    </h3>
  );
}

function SmallList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-body leading-relaxed">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}

export default function PoliciesAndCompliancePage() {
  return (
    <>
      <Header />

      <main id="top" className="bg-background">
        {/* Header */}
        <div className="border-b border-border pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <p className="text-xs text-muted-text mb-2">Legal</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-headline tracking-tight">
              Policies &amp; Compliance
            </h1>
            <p className="mt-3 text-sm text-body leading-relaxed max-w-3xl">
              This page includes key policies and agreements related to CallPilot’s
              data protection and processing practices.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Sections */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-headline">Sections</p>
                  <nav className="mt-3">
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

                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href="#top"
                      className="text-xs text-muted-text hover:text-headline transition-colors"
                    >
                      ↑ Back to top
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: Content */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-4xl space-y-10">
                {/* =======================
                    SECTION 1: Data Protection Policy
                  ======================= */}
                <section className="space-y-4">
                  <SectionTitle id="data-protection-policy">AI-RD1 Data Protection Policy</SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is a trading name of Recruitment Direct UK Ltd (Company Number: SC301107),
                      registered in Scotland.
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Effective Date:</span>{" "}
                      <span className="font-medium">11 February 2026</span>
                    </p>
                  </div>

                  {/* 1 */}
                  <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This Data Protection Policy sets out how Recruitment Direct UK Ltd processes and
                      safeguards personal data in connection with the AI-RD1 platform.
                    </p>

                    <p className="text-sm text-body leading-relaxed">
                      The Company is committed to complying with:
                    </p>
                    <SmallList
                      items={[
                        "UK GDPR",
                        "Data Protection Act 2018",
                        "Privacy and Electronic Communications Regulations (PECR)",
                        "Applicable telecommunications legislation",
                      ]}
                    />

                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is designed to support lawful processing of personal data whilst Clients remain
                      responsible for determining lawful basis and compliance obligations.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="space-y-2">
                    <SubTitle>2. Scope</SubTitle>
                    <p className="text-sm text-body leading-relaxed">This policy applies to:</p>
                    <SmallList
                      items={[
                        "Client account data",
                        "Authorised user information",
                        "Contact data uploaded by Clients",
                        "Platform usage data",
                        "Optional transcript data (where enabled)",
                      ]}
                    />
                  </div>

                  {/* 3 */}
                  <div className="space-y-2">
                    <SubTitle>3. Roles and Responsibilities</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      In relation to personal data processed via AI-RD1:
                    </p>
                    <SmallList
                      items={[
                        "The Client acts as Data Controller.",
                        "Recruitment Direct UK Ltd acts as Data Processor.",
                        "The Client determines: the purpose of processing; the lawful basis for processing; and the categories of individuals contacted.",
                        "AI-RD1 processes personal data solely on documented Client instructions.",
                      ]}
                    />
                  </div>

                  {/* 4 */}
                  <div className="space-y-2">
                    <SubTitle>4. Categories of Data Processed</SubTitle>

                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-4">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-headline">4.1 Client Account Data</p>
                        <SmallList
                          items={[
                            "Organisation name",
                            "Authorised user contact details",
                            "Billing and payment information",
                          ]}
                        />
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-headline">
                          4.2 Contact Data Uploaded by Clients
                        </p>
                        <SmallList
                          items={[
                            "Names",
                            "Telephone numbers",
                            "Email addresses (where applicable)",
                          ]}
                        />
                        <p className="text-sm text-body leading-relaxed">
                          AI-RD1 does not independently collect outreach contact data.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 5 */}
                  <div className="space-y-2">
                    <SubTitle>5. Audio Processing</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not provide call recording functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Audio transmitted through the platform:
                    </p>
                    <SmallList
                      items={[
                        "Is processed in real time;",
                        "Is not recorded;",
                        "Is not stored;",
                        "Is not archived.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      No permanent audio files are retained.
                    </p>
                  </div>

                  {/* 6 */}
                  <div className="space-y-2">
                    <SubTitle>6. Transcript Handling</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Clients may optionally enable temporary transcript storage for quality assurance or
                      operational review.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Where enabled:</p>
                    <SmallList
                      items={[
                        "Retention is fully controlled by the Client;",
                        "A recommended maximum retention period of five (5) days applies;",
                        "Transcripts are automatically deleted after the configured period;",
                        "No permanent transcript archives are maintained.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      The Client is responsible for ensuring transcript retention complies with UK GDPR and
                      the Data Protection Act 2018.
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="space-y-2">
                    <SubTitle>7. Lawful Basis</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      The lawful basis for outreach communications is determined by the Client.
                    </p>
                    <p className="text-sm text-body leading-relaxed">This may include:</p>
                    <SmallList
                      items={[
                        "Consent (where required under PECR);",
                        "Legitimate interests;",
                        "Contractual necessity.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Recruitment Direct UK Ltd does not determine lawful basis on behalf of Clients.
                    </p>
                  </div>

                  {/* 8 */}
                  <div className="space-y-2">
                    <SubTitle>8. International Data Transfers</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 may utilise global cloud infrastructure.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Where personal data is transferred outside the United Kingdom, appropriate safeguards
                      are implemented in accordance with UK GDPR, including contractual and technical
                      protections.
                    </p>
                  </div>

                  {/* 9 */}
                  <div className="space-y-2">
                    <SubTitle>9. Security Measures</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Recruitment Direct UK Ltd implements appropriate technical and organisational safeguards,
                      including:
                    </p>
                    <SmallList
                      items={[
                        "Encrypted transmission (TLS);",
                        "Role-based access controls;",
                        "Secure hosting infrastructure;",
                        "Monitoring and incident management procedures.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Access to personal data is restricted to authorised personnel.
                    </p>
                  </div>

                  {/* 10 */}
                  <div className="space-y-2">
                    <SubTitle>10. Data Retention</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Client account data is retained for the duration of the contractual relationship and a
                      reasonable period thereafter.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Transcript data, where enabled, is automatically deleted after the Client-configured
                      retention period.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Audio recordings are not retained.</p>
                  </div>

                  {/* 11 */}
                  <div className="space-y-2">
                    <SubTitle>11. Data Subject Rights</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Where Recruitment Direct UK Ltd acts as Processor, data subject requests will be
                      referred to the relevant Client as Data Controller.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Requests relating to platform processing may be directed to the Company using the
                      contact details below.
                    </p>
                  </div>

                  {/* 12 */}
                  <div className="space-y-2">
                    <SubTitle>12. Data Breach Management</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      In the event of a confirmed personal data breach affecting Client data, Recruitment
                      Direct UK Ltd will notify the relevant Client without undue delay and provide reasonable
                      assistance where required by law.
                    </p>
                  </div>

                  {/* 13 */}
                  <div className="space-y-2">
                    <SubTitle>13. Policy Updates</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This policy may be updated periodically to reflect operational or regulatory developments.
                    </p>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-2">
                    <SubTitle>Company Information</SubTitle>
                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                      <div className="text-sm text-body leading-relaxed space-y-1">
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
                            className="underline underline-offset-4 hover:text-headline transition-colors"
                          >
                            accounts@rd1.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =======================
                    SECTION 2: DPA
                  ======================= */}
                <section className="space-y-4">
                  <SectionTitle id="dpa">
                    <div className="mt-10">AI-RD1 Data Processing Agreement (DPA)</div>
                  </SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is a trading name of Recruitment Direct UK Ltd (Company Number: SC301107),
                      registered in Scotland.
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Effective Date:</span>{" "}
                      <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Email:</span>{" "}
                      <a
                        href="mailto:accounts@rd1.co.uk"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        accounts@rd1.co.uk
                      </a>
                    </p>
                  </div>

                  {/* 1 */}
                  <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This Data Processing Agreement (&quot;DPA&quot;) forms part of the AI-RD1 Terms of
                      Service between Recruitment Direct UK Ltd (&quot;Processor&quot;) and the Client
                      (&quot;Controller&quot;).
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      This DPA governs the processing of personal data in accordance with:
                    </p>
                    <SmallList
                      items={[
                        "UK GDPR",
                        "Data Protection Act 2018",
                        "Applicable data protection legislation",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is designed to support lawful processing of personal data whilst Clients remain
                      responsible for determining lawful basis and compliance obligations.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="space-y-2">
                    <SubTitle>2. Roles of the Parties</SubTitle>

                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-2">
                      <p className="text-sm text-body leading-relaxed">
                        <span className="font-medium text-headline">2.1</span> The Client acts as Data
                        Controller.
                      </p>
                      <p className="text-sm text-body leading-relaxed">
                        <span className="font-medium text-headline">2.2</span> Recruitment Direct UK Ltd acts
                        as Data Processor.
                      </p>
                      <p className="text-sm text-body leading-relaxed">
                        <span className="font-medium text-headline">2.3</span> The Processor shall process
                        personal data only on documented instructions from the Controller.
                      </p>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="space-y-2">
                    <SubTitle>3. Nature and Purpose of Processing</SubTitle>
                    <p className="text-sm text-body leading-relaxed">Processing activities may include:</p>
                    <SmallList
                      items={[
                        "Hosting contact data uploaded by the Client;",
                        "Real-time audio processing during calls;",
                        "Optional temporary transcript storage (if enabled by the Client);",
                        "Platform administration and support services.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      The purpose of processing is to enable automated or AI-assisted business communications
                      as instructed by the Client.
                    </p>
                  </div>

                  {/* 4 */}
                  <div className="space-y-2">
                    <SubTitle>4. Categories of Data</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Personal data processed may include:
                    </p>
                    <SmallList
                      items={[
                        "Names;",
                        "Telephone numbers;",
                        "Email addresses (where applicable);",
                        "Business contact information;",
                        "Client account and user information.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      The Processor does not independently determine data categories or purposes.
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="space-y-2">
                    <SubTitle>5. No Call Recording</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not provide call recording functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Audio transmitted through the platform:
                    </p>
                    <SmallList
                      items={[
                        "Is processed in real time;",
                        "Is not recorded;",
                        "Is not stored;",
                        "Is not archived.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      No permanent audio files are retained.
                    </p>
                  </div>

                  {/* 6 */}
                  <div className="space-y-2">
                    <SubTitle>6. Transcript Retention</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Where enabled by the Client:</p>
                    <SmallList
                      items={[
                        "Retention is fully controlled by the Client;",
                        "A recommended maximum retention period of five (5) days applies;",
                        "Transcripts are automatically deleted after the configured period;",
                        "No permanent transcript archives are maintained.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      The Controller is responsible for ensuring transcript retention complies with UK GDPR.
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="space-y-2">
                    <SubTitle>7. Processor Obligations</SubTitle>
                    <p className="text-sm text-body leading-relaxed">The Processor shall:</p>
                    <SmallList
                      items={[
                        "Process personal data lawfully and fairly on Controller instructions;",
                        "Implement appropriate technical and organisational measures;",
                        "Ensure authorised personnel are subject to confidentiality obligations;",
                        "Assist the Controller in responding to data subject requests where reasonably required;",
                        "Notify the Controller without undue delay in the event of a personal data breach affecting Client data.",
                      ]}
                    />
                  </div>

                  {/* 8 */}
                  <div className="space-y-2">
                    <SubTitle>8. Subprocessors</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      The Processor may engage third-party subprocessors for:
                    </p>
                    <SmallList
                      items={[
                        "Cloud hosting infrastructure;",
                        "Telecommunications services;",
                        "AI processing services.",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      All subprocessors are subject to contractual data protection obligations.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      A current list of subprocessors is available upon request.
                    </p>
                  </div>

                  {/* 9 */}
                  <div className="space-y-2">
                    <SubTitle>9. International Data Transfers</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 may utilise global cloud infrastructure.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Where personal data is transferred outside the United Kingdom, the Processor implements
                      appropriate safeguards in accordance with UK GDPR, including contractual and technical
                      protections.
                    </p>
                  </div>

                  {/* 10 */}
                  <div className="space-y-2">
                    <SubTitle>10. Security Measures</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      The Processor implements appropriate technical and organisational safeguards including:
                    </p>
                    <SmallList
                      items={[
                        "Encrypted transmission (TLS);",
                        "Role-based access controls;",
                        "Secure hosting infrastructure;",
                        "Monitoring and incident response procedures.",
                      ]}
                    />
                  </div>

                  {/* 11 */}
                  <div className="space-y-2">
                    <SubTitle>11. Data Subject Rights</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      The Processor shall provide reasonable assistance to the Controller in responding to
                      data subject rights requests under UK GDPR.
                    </p>
                  </div>

                  {/* 12 */}
                  <div className="space-y-2">
                    <SubTitle>12. Deletion or Return of Data</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Upon termination of the Services, personal data shall be deleted or returned to the
                      Controller in accordance with contractual obligations and applicable law.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Transcript data (if enabled) is automatically deleted after the configured retention
                      period.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Audio recordings are not retained.</p>
                  </div>

                  {/* 13 */}
                  <div className="space-y-2">
                    <SubTitle>13. Liability</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Liability under this DPA is subject to the limitations set out in the AI-RD1 Terms of
                      Service.
                    </p>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-2">
                    <SubTitle>Company Information</SubTitle>
                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                      <div className="text-sm text-body leading-relaxed space-y-1">
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
                            className="underline underline-offset-4 hover:text-headline transition-colors"
                          >
                            accounts@rd1.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =======================
                    SECTION: Security & Infrastructure Policy
                  ======================= */}
                <section className="space-y-4">
                  <SectionTitle id="sip">
                    <div className="mt-10">AI-RD1 Security &amp; Infrastructure Policy</div>
                  </SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is a trading name of Recruitment Direct UK Ltd (Company Number: SC301107),
                      registered in Scotland.
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Effective Date:</span>{" "}
                      <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Email:</span>{" "}
                      <a
                        href="mailto:accounts@rd1.co.uk"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        accounts@rd1.co.uk
                      </a>
                    </p>
                  </div>

                  {/* 1 */}
                  <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This Security &amp; Infrastructure Policy outlines the technical and organisational
                      measures implemented by Recruitment Direct UK Ltd to protect data processed through the
                      AI-RD1 platform.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is designed using privacy-by-design and security-by-design principles aligned
                      with UK GDPR requirements.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="space-y-2">
                    <SubTitle>2. Infrastructure Security</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 operates on secure cloud-based infrastructure which may be geographically
                      distributed.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Security measures include:</p>
                    <SmallList
                      items={[
                        "Encrypted data transmission (TLS/HTTPS)",
                        "Secure server environments",
                        "Network security controls and firewalls",
                        "Logical separation of environments where applicable",
                        "System hardening practices",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Infrastructure is configured to reduce exposure to unauthorised access and data
                      compromise.
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="space-y-2">
                    <SubTitle>3. Access Controls</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Access to AI-RD1 systems is restricted through:
                    </p>
                    <SmallList
                      items={[
                        "Role-based access control",
                        "Authentication safeguards",
                        "Restricted administrative privileges",
                        "Access granted on a need-to-know basis",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Authorised personnel are subject to confidentiality obligations.
                    </p>
                  </div>

                  {/* 4 */}
                  <div className="space-y-2">
                    <SubTitle>4. Audio and Communication Controls</SubTitle>
                    <p className="text-sm text-body leading-relaxed">AI-RD1:</p>
                    <SmallList
                      items={[
                        "Does not provide call recording functionality",
                        "Does not store audio recordings",
                        "Does not maintain audio archives",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Audio transmitted through the platform is processed in real time solely to enable live
                      communication functionality and is not permanently retained.
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="space-y-2">
                    <SubTitle>5. Transcript Controls</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Where transcript storage is enabled by a Client:
                    </p>
                    <SmallList
                      items={[
                        "Retention is fully controlled by the Client",
                        "A recommended maximum retention period of five (5) days applies",
                        "Transcripts are automatically deleted after the configured period",
                        "No permanent transcript archives are maintained",
                      ]}
                    />
                  </div>

                  {/* 6 */}
                  <div className="space-y-2">
                    <SubTitle>6. Monitoring and Incident Management</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 systems are monitored to detect:
                    </p>
                    <SmallList
                      items={[
                        "Unauthorised access attempts",
                        "Suspicious activity",
                        "Operational irregularities",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      In the event of a confirmed personal data breach affecting Client data, Recruitment
                      Direct UK Ltd will notify the relevant Client without undue delay in accordance with
                      UK GDPR requirements.
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="space-y-2">
                    <SubTitle>7. Subprocessors and Third-Party Providers</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 may utilise trusted third-party service providers for:
                    </p>
                    <SmallList
                      items={[
                        "Cloud hosting",
                        "Telecommunications services",
                        "AI processing services",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      All subprocessors are contractually required to implement appropriate data protection
                      and security safeguards.
                    </p>
                  </div>

                  {/* 8 */}
                  <div className="space-y-2">
                    <SubTitle>8. International Infrastructure</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 may utilise global infrastructure to deliver services.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Where personal data is transferred outside the United Kingdom, appropriate safeguards
                      are implemented in accordance with UK GDPR, including contractual and technical
                      protections.
                    </p>
                  </div>

                  {/* 9 */}
                  <div className="space-y-2">
                    <SubTitle>9. Continuous Improvement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Security controls are periodically reviewed and updated to address evolving risks,
                      regulatory changes, and technological developments.
                    </p>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-2">
                    <SubTitle>Company Information</SubTitle>
                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                      <div className="text-sm text-body leading-relaxed space-y-1">
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
                            className="underline underline-offset-4 hover:text-headline transition-colors"
                          >
                            accounts@rd1.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>


                {/* =======================
                    SECTION: AI Transparency & Responsible Use Policy
                ======================= */}
                <section className="space-y-4">
                <SectionTitle id="atrp">
                    <div className="mt-10">AI Transparency &amp; Responsible Use Policy</div>
                </SectionTitle>

                <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot is a trading name and product of Swiftwave FZ-LLC, a company
                    registered in Ras Al Khaimah, United Arab Emirates.
                    </p>

                    <div className="text-sm text-body leading-relaxed">
                    <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                    <p>RAKEZ Business Zone</p>
                    <p>Ras Al Khaimah</p>
                    <p>United Arab Emirates</p>
                    </div>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Effective Date:</span>{" "}
                    <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Email:</span>{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>

                {/* 1 */}
                <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    This policy explains how artificial intelligence (AI) is used within the
                    CallPilot platform and outlines our commitment to responsible and lawful
                    AI deployment.
                    </p>
                </div>

                {/* 2 */}
                <div className="space-y-2">
                    <SubTitle>2. How AI Is Used</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot uses AI technologies to:
                    </p>
                    <SmallList
                    items={[
                        "Process live audio input during calls",
                        "Generate conversational responses",
                        "Facilitate automated call interactions",
                        "Support communication efficiency",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    AI operates in real time to enable platform functionality.
                    </p>
                </div>

                {/* 3 */}
                <div className="space-y-2">
                    <SubTitle>3. No Autonomous Decision-Making</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not:
                    </p>
                    <SmallList
                    items={[
                        "Make legally binding decisions",
                        "Enter into contracts",
                        "Approve financial transactions",
                        "Take independent enforcement action",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    All business decisions remain the responsibility of the client.
                    </p>
                </div>

                {/* 4 */}
                <div className="space-y-2">
                    <SubTitle>4. No Call Recording</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not provide call recording functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Audio transmitted through the platform is processed in real time and is
                    not recorded, stored, or archived.
                    </p>
                </div>

                {/* 5 */}
                <div className="space-y-2">
                    <SubTitle>5. Transcript Handling</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Clients may enable temporary transcript storage for quality or performance
                    review purposes.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Where enabled:</p>
                    <SmallList
                    items={[
                        "Storage is client-controlled",
                        "A recommended maximum retention period of five (5) days applies",
                        "Transcripts are automatically deleted after the configured period",
                        "CallPilot does not maintain permanent archives of call content",
                    ]}
                    />
                </div>

                {/* 6 */}
                <div className="space-y-2">
                    <SubTitle>6. Human Oversight</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Clients retain full control over:
                    </p>
                    <SmallList
                    items={[
                        "Campaign configuration",
                        "Call scripts",
                        "Target lists",
                        "Communication objectives",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not independently initiate communications without client
                    instruction.
                    </p>
                </div>

                {/* 7 */}
                <div className="space-y-2">
                    <SubTitle>7. Responsible Use Requirements</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Clients must not use CallPilot AI to:
                    </p>
                    <SmallList
                    items={[
                        "Engage in fraud or deception",
                        "Conduct unlawful marketing",
                        "Impersonate individuals or organisations",
                        "Harass or intimidate recipients",
                        "Violate telecommunications laws",
                        "Conduct prohibited political or religious campaigning",
                    ]}
                    />
                </div>

                {/* 8 */}
                <div className="space-y-2">
                    <SubTitle>8. Bias &amp; Fairness</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot aims to deploy AI technologies responsibly.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    While AI systems are designed to operate reliably, clients are responsible
                    for reviewing outputs and ensuring communications remain lawful and
                    appropriate.
                    </p>
                </div>

                {/* 9 */}
                <div className="space-y-2">
                    <SubTitle>9. Continuous Improvement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    AI models and platform capabilities may evolve over time. Updates are
                    implemented to improve performance, compliance, and security.
                    </p>
                </div>

                {/* 10 */}
                <div className="space-y-2">
                    <SubTitle>10. Contact</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    For questions regarding AI usage:{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>
                </section>


                {/* =======================
                    SECTION: Acceptable Use Policy
                  ======================= */}
                <section className="space-y-4">
                  <SectionTitle id="aup">
                    <div className="mt-10">AI-RD1 Acceptable Use Policy</div>
                  </SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is a trading name of Recruitment Direct UK Ltd (Company Number: SC301107),
                      registered in Scotland.
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Effective Date:</span>{" "}
                      <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Email:</span>{" "}
                      <a
                        href="mailto:accounts@rd1.co.uk"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        accounts@rd1.co.uk
                      </a>
                    </p>
                  </div>

                  {/* 1 */}
                  <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This Acceptable Use Policy sets out the permitted and prohibited uses of the AI-RD1
                      platform.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      By using AI-RD1, the Client agrees to comply with this policy in addition to the Terms
                      of Service and all applicable laws.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="space-y-2">
                    <SubTitle>2. Lawful Use Requirement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 may only be used for lawful business communication purposes.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      The Client is solely responsible for ensuring compliance with:
                    </p>
                    <SmallList
                      items={[
                        "UK GDPR",
                        "Data Protection Act 2018",
                        "PECR",
                        "Telecommunications legislation",
                        "Consumer protection legislation",
                        "All other applicable law",
                      ]}
                    />
                  </div>

                  {/* 3 */}
                  <div className="space-y-2">
                    <SubTitle>3. Prohibited Activities</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      The Client must not use AI-RD1 to:
                    </p>
                    <SmallList
                      items={[
                        "Conduct unlawful marketing communications",
                        "Make automated marketing calls without lawful consent where required",
                        "Circumvent TPS or Corporate TPS screening",
                        "Use misleading, deceptive, or false messaging",
                        "Harass, intimidate, or abuse individuals",
                        "Impersonate individuals or organisations",
                        "Conduct fraudulent activity",
                        "Distribute unlawful content",
                        "Engage in activity that may expose Recruitment Direct UK Ltd to regulatory risk",
                      ]}
                    />
                  </div>

                  {/* 4 */}
                  <div className="space-y-2">
                    <SubTitle>4. Data Compliance Obligations</SubTitle>
                    <p className="text-sm text-body leading-relaxed">The Client must ensure that:</p>
                    <SmallList
                      items={[
                        "All personal data uploaded has been lawfully obtained",
                        "Appropriate lawful basis exists for communications",
                        "Suppression lists are maintained",
                        "Consent records are retained where required",
                        "Individuals are provided with legally required information notices",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not verify the legality of Client data.
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="space-y-2">
                    <SubTitle>5. Call Handling Restrictions</SubTitle>
                    <p className="text-sm text-body leading-relaxed">AI-RD1:</p>
                    <SmallList
                      items={[
                        "Does not provide call recording functionality",
                        "Does not store audio recordings",
                        "Does not maintain permanent transcript archives",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Clients must not attempt to circumvent or bypass platform controls relating to audio or
                      transcript handling.
                    </p>
                  </div>

                  {/* 6 */}
                  <div className="space-y-2">
                    <SubTitle>6. System Integrity</SubTitle>
                    <p className="text-sm text-body leading-relaxed">Clients must not:</p>
                    <SmallList
                      items={[
                        "Attempt to reverse engineer the platform",
                        "Interfere with system security",
                        "Upload malicious code",
                        "Attempt unauthorised access",
                        "Disrupt platform performance",
                      ]}
                    />
                  </div>

                  {/* 7 */}
                  <div className="space-y-2">
                    <SubTitle>7. Enforcement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Recruitment Direct UK Ltd reserves the right to:
                    </p>
                    <SmallList
                      items={["Suspend access", "Restrict functionality", "Terminate Services"]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Where misuse, unlawful activity, or regulatory risk is identified.
                    </p>
                  </div>

                  {/* 8 */}
                  <div className="space-y-2">
                    <SubTitle>8. Reporting Concerns</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Suspected misuse or compliance concerns may be reported to:{" "}
                      <a
                        href="mailto:accounts@rd1.co.uk"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        accounts@rd1.co.uk
                      </a>
                    </p>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-2">
                    <SubTitle>Company Information</SubTitle>
                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                      <div className="text-sm text-body leading-relaxed space-y-1">
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
                            className="underline underline-offset-4 hover:text-headline transition-colors"
                          >
                            accounts@rd1.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =======================
                    SECTION: Call Handling Policy
                  ======================= */}
                <section className="space-y-4">
                  <SectionTitle id="chp">
                    <div className="mt-10">AI-RD1 Call Handling Policy</div>
                  </SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body">
                      <span className="text-muted-text">Effective Date:</span>{" "}
                      <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 is a trading name of Recruitment Direct UK Ltd (Company Number:
                      SC301107), registered in Scotland.
                    </p>
                  </div>

                  {/* 1 */}
                  <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This Call Handling Policy explains how audio and call-related data are
                      processed within the AI-RD1 platform.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      This policy supports compliance with UK GDPR, the Data Protection Act
                      2018, and PECR.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="space-y-2">
                    <SubTitle>2. No Call Recording</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not provide call recording functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">The platform:</p>
                    <SmallList
                      items={[
                        "Does not record calls",
                        "Does not store audio files",
                        "Does not maintain audio archives",
                        "Does not retain voice recordings",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Audio transmitted through AI-RD1 is processed solely in real time to
                      enable live communication functionality.
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="space-y-2">
                    <SubTitle>3. Real-Time Audio Processing</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Audio data is processed transiently for the purpose of:
                    </p>
                    <SmallList
                      items={[
                        "Enabling AI-assisted conversation",
                        "Generating real-time responses",
                        "Facilitating communication functionality",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Once the call interaction concludes, audio data is not retained.
                    </p>
                  </div>

                  {/* 4 */}
                  <div className="space-y-2">
                    <SubTitle>4. Transcript Handling</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Clients may optionally enable temporary transcript storage for quality
                      assurance or operational review purposes.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Where enabled:</p>
                    <SmallList
                      items={[
                        "Transcript retention is fully controlled by the Client",
                        "A recommended maximum retention period of five (5) days applies",
                        "Transcripts are automatically deleted after the configured period",
                        "No permanent transcript archives are maintained",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      The Client is responsible for ensuring transcript retention complies with
                      UK GDPR and PECR.
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="space-y-2">
                    <SubTitle>5. Client Compliance Responsibilities</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Clients are solely responsible for:
                    </p>
                    <SmallList
                      items={[
                        "Ensuring lawful basis for calls",
                        "Obtaining consent where required under PECR",
                        "Conducting TPS and Corporate TPS screening",
                        "Maintaining suppression lists",
                        "Providing any legally required disclosures to call recipients",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 operates only on Client instruction and does not independently
                      determine compliance requirements.
                    </p>
                  </div>

                  {/* 6 */}
                  <div className="space-y-2">
                    <SubTitle>6. Caller Identification</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Clients are responsible for ensuring that caller identification
                      information is presented in compliance with applicable telecommunications
                      regulations.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      AI-RD1 does not authorise or support caller ID masking or unlawful
                      spoofing.
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="space-y-2">
                    <SubTitle>7. Misuse Prevention</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Recruitment Direct UK Ltd reserves the right to suspend or restrict
                      access where call activity:
                    </p>
                    <SmallList
                      items={[
                        "Breaches applicable law",
                        "Creates regulatory risk",
                        "Violates the Terms of Service or Acceptable Use Policy",
                      ]}
                    />
                  </div>

                  {/* Company Information */}
                  <div className="space-y-2">
                    <SubTitle>Company Information</SubTitle>
                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                      <div className="text-sm text-body leading-relaxed space-y-1">
                        <p className="font-medium text-headline">
                          Recruitment Direct UK Ltd
                        </p>
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
                            className="underline underline-offset-4 hover:text-headline transition-colors"
                          >
                            accounts@rd1.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>


                {/* Back to top */}
                <div className="pt-2">
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 text-xs text-body hover:text-headline transition-colors"
                  >
                    <span className="inline-block">↑</span>
                    Back to top
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
