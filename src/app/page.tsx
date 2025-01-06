"use client";
import styles from "./styles/page.module.css";
import { useEffect, useRef, useState } from "react";
import navbar from "./components/navbar";
import Image from "next/image";
import ngcModel from "../../public/ngc-model.png";
import { NgcText } from "./components/ngctext";
import { GenericButton } from "./components/button";

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
      <NgcText
        text="NO"
        style={
          {
            "--left": "31%",
            "--top": "15%",
            "--bottom": "0",
            "--z-index": "2",
            "--duration": "1s",
          } as React.CSSProperties
        }
      />
      <NgcText
        text="GAINS"
        style={
          {
            "--left": "38%",
            "--top": "36%",
            "--z-index": "6",
            "--duration": "1.5s",
          } as React.CSSProperties
        }
      />
      <NgcText
        text="CLUB"
        style={
          {
            "--left": "60%",
            "--top": "58%",
            "--bottom": "0",
            "--z-index": "2",
            "--duration": "1s",
          } as React.CSSProperties
        }
      />

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Gear Up for the Grind</h2>

          <div className={styles.brandNameContainer}>
            <svg viewBox="0 0 160 35" style={{ width: "100%", height: "100%" }}>
              <rect
                className={styles.brandNameRectangle}
                x="0"
                y="0"
                width="160"
                height="35"
                fill="#ec3942"
              />
              <text
                className={styles.brandNameText}
                x="80"
                y="17.5"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                No Gains Club
              </text>
            </svg>
          </div>
          <p>
            Introducing
            <br />
            The Ultimate Fusion of Performance,
            <br />
            Style, and Prestige for Every Gym Rat.
          </p>
          <GenericButton text="Shop Now" />
        </div>

        <div className={styles.bannerContainer}>
          <div className={styles.bannerImage}>
            <Image src={ngcModel} alt="NGC Model" />
          </div>
        </div>
      </div>
    </>
  );
}
