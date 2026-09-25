import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

// Static metadata — no data fetching, generated once at build time (SSG)
export const metadata: Metadata = {
  title: "Adv. Tirath Singh | Consumer Court Hanumangarh | Consumer Forum Adviser",
  description:
    "Adv. Tirath Singh — Trusted legal adviser for Consumer Court Hanumangarh and District Consumer Disputes Redressal Forum cases. Practicing civil, corporate, family, and consumer protection law with over 15 years of courtroom experience.",
  keywords: [
    "Consumer Court Hanumangarh",
    "Consumer Forum Hanumangarh",
    "District Consumer Disputes Redressal Forum Hanumangarh",
    "Consumer Protection Lawyer Hanumangarh",
    "Advocate Tirath Singh",
    "Consumer Case Advocate Hanumangarh",
    "Civil Lawyer Hanumangarh",
    "Legal Adviser Hanumangarh",
  ],
  authors: [{ name: "Adv. Tirath Singh" }],
  metadataBase: new URL("https://www.tirathsinghadvocate.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adv. Tirath Singh | Consumer Court Hanumangarh Adviser",
    description:
      "Expert legal representation for Consumer Court Hanumangarh and Consumer Forum cases. Civil, corporate, and family law adviser with 15+ years of experience.",
    url: "https://www.tirathsinghadvocate.in",
    siteName: "Adv. Tirath Singh",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Adv. Tirath Singh | Consumer Court Hanumangarh Adviser",
    description:
      "Trusted adviser for Consumer Court Hanumangarh and Consumer Forum disputes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function NavBar() {
  return (
    <header className="bg-navy text-cream sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-wide">
          Tirath Singh <span className="text-gold">| Adviser</span>
        </Link>
        <nav className="flex gap-8 text-sm uppercase tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-cream/70 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Tirath Singh, Adviser. All rights reserved.</p>
        {/* <p>Enrolled with the Bar Council of Delhi | Reg. No. D/1234/2009</p> */}
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-navy antialiased">
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}