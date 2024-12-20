import {
  Barlow,
  Barlow_Semi_Condensed,
  Barlow_Condensed,
} from "next/font/google";
import "./globals.css";

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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable}`}
    >
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  );
}
