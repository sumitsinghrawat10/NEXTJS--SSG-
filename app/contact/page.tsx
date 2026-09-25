import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Adv. Tirath Singh | Consumer Court Hanumangarh Adviser",
  description:
    "Contact Adv. Tirath Singh for consumer court cases in Hanumangarh, District Consumer Disputes Redressal Forum matters, and civil, corporate & family law consultations.",
  keywords: [
    "Contact Consumer Court Lawyer Hanumangarh",
    "Consumer Forum Hanumangarh Contact",
    "Advocate Tirath Singh Contact",
    "Consumer Case Consultation Hanumangarh",
    "Legal Adviser Hanumangarh Phone Number",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Adv. Tirath Singh | Consumer Court Hanumangarh",
    description:
      "Schedule a consultation with Adv. Tirath Singh for consumer forum, civil, corporate, and family law matters in Hanumangarh.",
    // url: "https://www.tirathsinghadvocate.in/contact",
    siteName: "Adv. Tirath Singh",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contactDetails = [
  // { label: "Chamber", value: "Delhi High Court, Chamber No. 214" },
  { label: "Phone", value: "+91 9413777747" },
  // { label: "Email", value: "contact@rajeshmehtaAdviser.in" },
  { label: "Office Hours", value: "Mon–Sat, 10:00 AM – 6:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <p className="uppercase tracking-widest text-gold text-sm mb-3">Contact</p>
      <h1 className="font-serif text-4xl mb-10">Get In Touch</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-navy/80 leading-relaxed mb-8">
            Reach out to discuss your matter confidentially. Consultations
            can be scheduled in-person at the chamber or over a call.
          </p>
          <dl className="space-y-4">
            {contactDetails.map((item) => (
              <div key={item.label}>
                <dt className="text-gold text-sm uppercase tracking-wide">
                  {item.label}
                </dt>
                <dd className="text-navy/90">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Static export has no server backend, so the form is a client
            component that opens the visitor's email client (mailto). */}
        <ContactForm />
      </div>
    </div>
  );
}