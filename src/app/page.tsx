/* Client Imports for Next.js */
"use client";
import { useEffect, useRef, useState } from "react";

/* Components */
import HeroSection from "./components/herosection";
import Card from "./components/card";

export default function Landing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <HeroSection />
      <Card />
    </>
  );
}
