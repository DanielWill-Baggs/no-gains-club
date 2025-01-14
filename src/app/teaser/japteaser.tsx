/* Styles and Assets */
import Image from "next/image";
import styles from "./../styles/japteaser.module.css";
import ngcLogo from "../../../public/ngc-logo-showcase.png";
import ngcButton from "../../../public/ngc-logo.png";
import NGCHero from "../../../public/ngc-hero-1.png";
import NGCHero2 from "../../../public/ngc-hero-2.png";
import { GenericButton } from "../components/button";

/* Components and Layouts */

export default function JapTeaser() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.heroImage1}>
          <Image
            src={NGCHero}
            alt="NGC Hero 1 Showcase"
            width={220}
            height={550}
          />
        </div>
        <div className={styles.heroImage2}>
          <Image
            src={NGCHero2}
            alt="NGC Hero 2 Showcase"
            width={220}
            height={550}
          />
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoText}>
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
              UNLEASH YOUR <span style={{ color: "#9E1219" }}>(HERO)</span>
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
                backgroundColor: " #CC9F16",
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 400,
                fontSize: "1.2em",
              }}
            />
          </div>
          <div className={styles.toggableContainer}>
            <button className={styles.toggleButton}>
              <Image
                src={ngcButton}
                alt="NGC Logo Showcase"
                width={96}
                height={75}
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
