/* Client Imports for Next.js */
"use client";
import { useEffect, useRef, useState } from "react";

/* Components */
import HeroSection from "./components/herosection";
import CardGrid from "./components/cardgrid";
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
    </>
  );
}
