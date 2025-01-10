/* Styles and Assets */
import Image from "next/image";
import styles from "./../styles/herosection.module.css";
import ngcModel from "../../../public/ngc-model.png";

/* Components and Layouts */
import { GenericButton } from "./button";
import { NgcText } from "./ngctext";

export default function HeroSection() {
  return (
    <>
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

        <NgcText
          text="NO"
          style={
            {
              "--left": "31%",
              "--top": "15%",
              "--bottom": "0",
              "--z-index": "2",
              "--duration": "3s",
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
              "--duration": "3.5s",
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
              "--duration": "3s",
            } as React.CSSProperties
          }
        />
        <div className={styles.bannerContainer}>
          <div className={styles.bannerImage}>
            <Image src={ngcModel} alt="NGC Model" />
          </div>
        </div>
      </div>
    </>
  );
}
