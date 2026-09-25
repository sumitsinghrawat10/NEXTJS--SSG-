import type { Metadata } from "next";
import Link from "next/link";

// Static metadata for the homepage — resolved at build time (SSG)
export const metadata: Metadata = {
  title: "Consumer Court Hanumangarh Adviser | Tirath Singh (Rtd. AAO)",
  description:
    "Tirath Singh — trusted adviser for Consumer Court Hanumangarh and District Consumer Disputes Redressal Forum matters. 36 years of court experience, including 25+ years in Consumer Court readership.",
  keywords: [
    "Consumer Court Hanumangarh",
    "Consumer Forum Hanumangarh",
    "District Consumer Disputes Redressal Forum Hanumangarh",
    "Consumer Case Adviser Hanumangarh",
    "Tirath Singh Adviser",
    "Consumer Complaint Hanumangarh",
    "Legal Documentation Hanumangarh",
    "Court Procedure Guidance Hanumangarh",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Consumer Court Hanumangarh Adviser | Tirath Singh",
    description:
      "Trusted guidance for Consumer Court Hanumangarh matters from Tirath Singh, retired Additional Administrative Officer with 36 years of court experience.",
    url: "https://www.tirathsinghadvocate.in",
    siteName: "Adv. Tirath Singh",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Static data — hardcoded, no fetch. Pre-rendered at build time (SSG).
const practiceAreas = [
  {
    title: "Consumer Matters",
    desc: "Guidance on consumer complaints, disputes, documentation, and court procedures.",
  },
  {
    title: "Court Procedures",
    desc: "Practical guidance on filing procedures, case records, notices, and court documentation.",
  },
  {
    title: "Legal Documentation",
    desc: "Assistance in understanding and preparing documents required for legal and consumer matters.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-cream">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-gold text-sm mb-4">
              Adviser &middot; Hanumangarh (Raj.)
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Trusted Guidance for Consumer Court Matters

            </h1>
            <p className="text-cream/80 mb-8 leading-relaxed">
              With over 36 years of experience in Consumer Courts, I guide people through legal matters with clarity and a commitment to fair justice.

            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-gold/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
          <div className="hidden md:flex justify-center">
  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold bg-gold/10">
    <img
      src="/advocate-photo.png"
      alt="Tirath Singh, Consumer Court Hanumangarh Adviser"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl mb-2 text-center">Practice Areas</h2>
        <p className="text-navy/60 text-center mb-12">
          Focused expertise across key areas of law
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="border border-navy/10 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow"
            >
              <h3 className="font-serif text-xl mb-2 text-gold">{area.title}</h3>
              <p className="text-navy/70 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-cream border-t border-navy/10">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-2xl mb-4">
            Need guidance on a consumer court matter? Let&apos;s talk it through.
          </h2>
          <Link
            href="/contact"
            className="inline-block border-2 border-navy text-navy px-6 py-3 rounded font-semibold hover:bg-navy hover:text-cream transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}