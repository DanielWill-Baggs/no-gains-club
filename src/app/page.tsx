/* Client Imports for Next.js */
"use client";

/* Components */
import HeroSection from "./components/herosection";
import CardGrid from "./components/cardgrid";
import ShowCase from "./components/showcase";
import useMounted from "./utils/useMounted";

export default function Landing() {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <HeroSection />
      <CardGrid />
      <ShowCase />
    </>
  );
}
