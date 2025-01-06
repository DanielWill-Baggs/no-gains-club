import styles from "./../styles/herosection.module.css";
export const NgcText = ({
  text,
  style,
}: {
  text: string;
  style: React.CSSProperties;
}) => (
  <div className={styles.ngcText} style={style}>
    <span>{text}</span>
  </div>
);
