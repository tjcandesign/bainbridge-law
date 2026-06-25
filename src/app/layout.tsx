import type { Metadata } from "next";
import { ebGaramond, inter } from "../lib/fonts";
import Header from "../components/HeaderWithSettings";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bainbridge Law",
    template: "%s | Bainbridge Law",
  },
  description:
    "Experienced counsel for transactions that matter. Serving the District of Columbia and Maryland.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
