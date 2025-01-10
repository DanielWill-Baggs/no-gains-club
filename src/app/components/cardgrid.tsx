import styles from "./../styles/cardgrid.module.css";
import Card from "./card";
import CardData from "../types/cards.json";
import type { CardProps } from "../types/card";

export default function CardGrid() {
  const cards: CardProps[] = CardData;

  return (
    <div className={styles.gridContainer}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
