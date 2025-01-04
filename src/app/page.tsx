"use client";
import styles from "./styles/page.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ngcLogo from "../../public/ngc-logo.png";

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
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={ngcLogo} alt="NGC Logo" width={78} height={78} />
        </div>
        <nav className={styles.nav}>
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Accessories</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.icon}>♡</button>
          <button className={styles.icon}>👤</button>
          <button className={styles.icon}>🛒</button>
        </div>
      </header>

      <main
        className={`${styles.main} ${isVisible ? styles.visible : ""}`}
        ref={mainRef}
      >
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
