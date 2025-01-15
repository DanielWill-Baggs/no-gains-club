/* Dependencies and Imports */
import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* Styles and Assets */
import styles from "./../styles/cardgrid.module.css";
import CardData from "../types/cards.json";
import type { CardProps } from "../types/card";

/* Utilities */

/* Components and Layouts */
import Card from "./card";

export default function CardGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const cards: CardProps[] = CardData;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className={styles.gridContainer}
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </motion.div>
  );
}
