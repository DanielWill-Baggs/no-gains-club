/* Styles and Assets */
import Image from "next/image";
import styles from "./../styles/japteaser.module.css";
import ngcLogo from "../../../public/ngc-logo-showcase.png";
import ngcButton from "../../../public/ngc-logo.png";
import NGCHero from "../../../public/ngc-hero-1.png";
import NGCHero2 from "../../../public/ngc-hero-2.png";
import NGCVillain from "../../../public/ngc-villain-1.png";
import NGCVillain2 from "../../../public/ngc-villain-2.png";
import { GenericButton } from "../components/button";
import { useEffect, useState } from "react";
/* Components and Layouts */

export default function JapTeaser() {
  const [isHero, setIsHero] = useState(true);
  const [fadeClass, setFadeClass] = useState(styles.fadeIn);

  const handleHero = () => {
    setFadeClass(styles.fadeOut);
    setTimeout(() => {
      setIsHero(!isHero);
      setFadeClass(styles.fadeIn);
    }, 1000);
  };

  useEffect(() => {
    setFadeClass(styles.fadeIn);
  }, [isHero]);

  return (
    <>
      <div
        className={`${styles.container} ${fadeClass} ${
          isHero ? styles.bgHero : styles.bgVillain
        }`}
      >
        <div className={styles.charImage1}>
          <Image
            src={isHero ? NGCHero : NGCVillain}
            alt="NGC Character 1 Showcase"
            width={220}
            height={550}
          />
        </div>
        <div className={styles.charImage2}>
          <Image
            src={isHero ? NGCHero2 : NGCVillain2}
            alt="NGC Character 1 Showcase"
            width={220}
            height={550}
          />
        </div>
        <div className={styles.logoContainer}>
          <div
            className={`${styles.logoText} ${
              isHero ? styles.logoHero : styles.logoVillain
            }
      `}
          >
            <h2>ノーゲインズクラブ</h2>
          </div>
          <div className={styles.logoImage}>
            <Image
              src={ngcLogo}
              alt="NGC Logo Showcase"
              width={504.47}
              height={472.09}
            />
          </div>
        </div>
        <div className={styles.teaserDetailsContainer}>
          <div className={styles.teaserTitle}>
            <h1>
              UNLEASH YOUR{" "}
              <span style={{ color: `${isHero ? "#9E1219" : "#CC9F16"}` }}>
                {isHero ? "(HERO)" : "(VILLAIN)"}
              </span>
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.teaserText}>
              <p>
                The long-awaited anime crossover is here. Unleash your inner
                hero
                <br />
                with NGCxAnime, where chaos meets elegance for the ultimate
                grind.
              </p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <GenericButton
              text="Coming Soon"
              inlineStyle={{
                backgroundColor: `${isHero ? "#CC9F16" : "#9E1219"}`,
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 400,
                fontSize: "1.2em",
              }}
            />
          </div>
          <div className={styles.toggableContainer}>
            <button
              className={`${styles.toggleButton} ${
                isHero ? styles.buttonHero : styles.buttonVillain
              }
            `}
              onClick={handleHero}
            >
              <Image
                src={ngcButton}
                alt="NGC Logo Showcase"
                width={96}
                height={75}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
