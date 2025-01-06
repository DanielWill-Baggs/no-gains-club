import React from "react";
import styles from "../styles/button.module.css";

export const GenericButton = ({ text }: { text: string }) => (
  <button className={styles.genericButton}>{text}</button>
);
