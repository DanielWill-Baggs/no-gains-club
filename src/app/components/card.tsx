import styles from "./../styles/card.module.css";
import Image from "next/image";
import ngcIcarus from "../../../public/ngc-icarus.png";
import { Heart } from "lucide-react";

export default function card(...cardProps: any) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <div className={styles.cardImageInfo}>
            <h1>NEW</h1>
          </div>
          <div className={styles.cardImageFavorite}>
            <button className={styles.cardImageIcon}>
              <Heart strokeWidth={2.5} />
            </button>
          </div>
          <Image src={ngcIcarus} alt="{}" className={styles.cardImage} />
        </div>
        <div className={styles.cardTextContainer}>
          <h2>Title Text</h2>
          <p>Description</p>
          <h3>$100</h3>
        </div>
      </div>
    </div>
  );
}
