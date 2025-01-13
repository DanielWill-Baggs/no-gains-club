import React from "react";
import styles from "../styles/button.module.css";

interface GenericButtonProps {
  text: string;
  className?: string;
  inlineStyle?: React.CSSProperties;
  onClick?: () => void;
}

export const GenericButton: React.FC<GenericButtonProps> = ({
  text,
  className = "",
  inlineStyle = {},
  onClick,
}) => (
  <button
    className={`${styles.genericButton} ${className}`}
    style={inlineStyle}
    onClick={onClick}
  >
    {text}
  </button>
);
