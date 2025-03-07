import styles from "./../styles/card.module.css";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { CardProps } from "../types/card";

export default function Card({
  id,
  src,
  alt,
  title,
  category,
  description,
  price,
  favorite,
}: CardProps) {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <div className={styles.cardImageInfo}>
            <h1>{category}</h1>
          </div>
          <div className={styles.cardImageFavorite}>
            <button
              className={styles.cardImageIcon}
              onClick={(e) => {
                e.stopPropagation();
                console.log("Favorite clicked!");
              }}
            >
              <Heart
                strokeWidth={2.5}
                fill={favorite ? "red" : "none"}
                stroke={favorite ? "none" : "black"}
              />
            </button>
          </div>
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardTextContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
}
