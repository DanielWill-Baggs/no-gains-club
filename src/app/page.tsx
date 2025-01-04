"use client";
import styles from "./styles/page.module.css";
import { useEffect, useRef, useState } from "react";
import navbar from "./components/navbar";
import Image from "next/image";
import ngcModel from "../../public/ngc-model.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (mainRef.current) observer.observe(mainRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {navbar()}
      <div
        className={styles.ngcText}
        style={
          {
            "--left": "31%",
            "--top": "15%",
            "--bottom": "0",
            "--z-index": "2",
          } as any
        }
      >
        <span>NO</span>
      </div>
      <div
        className={styles.ngcText}
        style={
          {
            "--left": "38%",
            "--top": "36%",
            "--z-index": "6",
          } as any
        }
      >
        <span>GAINS</span>
      </div>
      <div
        className={styles.ngcText}
        style={
          {
            "--left": "60%",
            "--top": "58%",
            "--bottom": "0",
            "--z-index": "2",
          } as any
        }
      >
        <span>CLUB</span>
      </div>

      <div className={styles.container}>
        {/* <main
          className={`${styles.container} ${isVisible ? styles.visible : ""}`}
          ref={mainRef}
        > */}
        <div className={styles.textContainer}>
          <h2>Gear Up for the Grind</h2>
          <p>
            Introducing <span className={styles.brandName}>No Gains Club</span>
            <br />
            The Ultimate Fusion of Performance, Style, and Prestige for Every
            Gym Rat.
          </p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerImage}>
            <Image src={ngcModel} alt="NGC Model" />
          </div>
        </div>
        {/* </main> */}
      </div>
    </>
  );
}
