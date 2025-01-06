import {
  Barlow,
  Barlow_Semi_Condensed,
  Barlow_Condensed,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const barlowCondensed = Barlow_Condensed({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-barlow-semi-condensed",
});
const barlow = Barlow({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export default function NGCLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
