"use client";
import styles from "./styles/page.module.css";
import { useEffect, useRef, useState } from "react";
import navbar from "./components/navbar";

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
    <div className={styles.container}>
      <main
        className={`${styles.main} ${isVisible ? styles.visible : ""}`}
        ref={mainRef}
      >
        {navbar()}
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
        <div className={styles.imageContainer}>
          <div className={styles.background}>
            <span>NO GAINS CLUB</span>
          </div>
          <img
            src="/model-image.png"
            alt="Fashion Model"
            className={styles.modelImage}
          />
        </div>
      </main>
    </div>
  );
}
