import type { Metadata } from "next";

// Static metadata per-page — still resolved at build time, no runtime cost
export const metadata: Metadata = {
  title: "About Tirath Singh | Consumer Court Hanumangarh Adviser (Rtd. AAO)",
  description:
    "Tirath Singh, retired Additional Administrative Officer with 36 years of government service, including 25+ years in Consumer Court Hanumangarh readership. Now a legal adviser for consumer forum matters.",
  keywords: [
    "Tirath Singh Consumer Court Hanumangarh",
    "Consumer Forum Adviser Hanumangarh",
    "Retired Additional Administrative Officer Hanumangarh",
    "Consumer Court Reader Hanumangarh",
    "District Consumer Disputes Redressal Forum Hanumangarh",
    "Civil Court Suratgarh Rajasthan",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Tirath Singh | Consumer Court Hanumangarh Adviser",
    description:
      "36 years of government service, including 25+ years in Consumer Court Hanumangarh readership. Trusted adviser for consumer forum, civil, and family law matters.",
    url: "https://www.tirathsinghadvocate.in/about",
    siteName: "Adv. Tirath Singh",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const credentials = [
  { year: "1990", label: "Joined Civil Court in Suratgarh, Rajasthan" },


  { year: "1995–2026", label: "31 years of experience in Consumer Court Readership and court administration" },

  { year: "Feb 2026", label: "Retired as Additional Administrative Officer (AAO) after 36 years of government service" },

  { year: "Present", label: "Currently pursuing LL.B. to further strengthen legal knowledge and expertise" },
];

const values = [
  {
    title: "Integrity",
    desc: "Transparent advice, honest timelines, and no false promises about outcomes.",
  },
  {
    title: "Diligence",
    desc: "Every brief is researched thoroughly before it reaches a courtroom or a client meeting.",
  },
  {
    title: "Accessibility",
    desc: "Clients can reach me directly — no layers of juniors between you and your case.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="uppercase tracking-widest text-gold text-sm mb-3">About</p>
      <h1 className="font-serif text-4xl mb-2">
  Tirath Singh, Adviser
</h1>

<p className="font-serif text-xl mb-6">
  (Rtd. Additional Administrative Officer)
</p>
      <p className="text-navy/80 leading-relaxed mb-6">
        I have 36 years of experience working in the Civil Court and Consumer
        Court in Hanumangarh, Rajasthan. During my service, I worked for
        approximately 25 years in a Readership role in the Consumer Court,
        handling case files, court records, documentation and administrative
        work. I retired from government service in February 2026 as an
        Additional Administrative Officer (AAO), with extensive knowledge of
        court procedures and consumer-related matters.
      </p>
      <p className="text-navy/80 leading-relaxed mb-12">
        My focus has always been on ensuring that matters are handled fairly, properly and in accordance with the law, so that people receive the justice they deserve. I believe that careful preparation, proper documentation and a clear understanding of legal procedures are essential for achieving fair outcomes.
      </p>

      <h2 className="font-serif text-2xl mb-6">Timeline</h2>
      <ol className="border-l-2 border-gold/50 pl-6 space-y-6 mb-16">
        {credentials.map((item) => (
          <li key={item.year}>
            <span className="block text-gold font-semibold">{item.year}</span>
            <span className="text-navy/80">{item.label}</span>
          </li>
        ))}
      </ol>

      <h2 className="font-serif text-2xl mb-6">How I Work</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-white border border-navy/10 rounded-lg p-5"
          >
            <h3 className="font-serif text-lg text-gold mb-2">{v.title}</h3>
            <p className="text-navy/70 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}