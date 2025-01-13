/* Styles and Assets */
import Image from "next/image";
import styles from "./../styles/showcase.module.css";

/* Components and Layouts */
import { GenericButton } from "./button";
import useMounted from "../utils/useMounted";
import findProduct from "../utils/findProduct";

export default function ShowCase() {
  const isMounted = useMounted();
  const product = findProduct(8);

  if (!isMounted || !product) {
    return null;
  }

  return (
    <main className={styles.container}>
      <Image
        className={styles.productImage}
        src={product?.src}
        alt={product?.alt}
        width={618.21}
        height={399.9}
      />
      <div className={styles.detailsContainer}>
        <h1 className={styles.showcaseTitle}>ELEVATE YOUR WORKOUT</h1>
        <p className={styles.showcasePrice}>${product?.price}</p>
        <GenericButton
          text="Shop Now"
          inlineStyle={{
            backgroundColor: " #9e1219",
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 400,
            fontSize: "1.2em",
          }}
        />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.productTitle}>NGCxWINDRUNNERS</h1>
      </div>
    </main>
  );
}
