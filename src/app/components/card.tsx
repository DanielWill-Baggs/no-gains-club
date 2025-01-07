import styles from "./../styles/card.module.css";
import Image from "next/image";

export default function card(...cardProps: any) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <div className={styles.cardImage}>
            <Image src="" alt="{}" width={310} height={313} />
          </div>
          <svg viewBox="0 0 310 313" style={{ width: "100%", height: "100%" }}>
            <rect
              className={styles.cardImageRectangle}
              x="0"
              y="0"
              width="310"
              height="313"
              fill="#F2F2F2"
            />
          </svg>
        </div>
        <h2>Card</h2>
      </div>
    </div>
  );
}
