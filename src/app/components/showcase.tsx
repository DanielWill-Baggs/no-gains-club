/* Dependencies and Imports */
import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* Styles and Assets */
import Image from "next/image";
import styles from "./../styles/showcase.module.css";

/* Utilities */
import useMounted from "../utils/useMounted";
import findProduct from "../utils/findProduct";

/* Components and Layouts */
import { GenericButton } from "./button";
import { CardProps } from "../types/card";

export default function ShowCase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const isMounted = useMounted();
  let product: CardProps | null = findProduct(8);

  if (!isMounted || !product) {
    product = {
      id: 8,
      src: "/ngc-windrunners.png",
      alt: "NGC Wind Runners",
      title: "NGC Wind Runners",
      category: "NEW",
      description: "1 Color",
      price: 140,
      favorite: false,
    };
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -50,
      }}
      transition={{ duration: 2, delay: 0.5 }}
    >
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
    </motion.div>
  );
}
