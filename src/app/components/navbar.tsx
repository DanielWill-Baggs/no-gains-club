import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import ngcLogo from "./../../../public/ngc-logo.png";
import { Heart, User, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <Image src={ngcLogo} alt="NGC Logo" width={55} height={45} />
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="#">WOMEN</a>
        <a href="#">MEN</a>
        <a href="#">ACCESSORIES</a>
      </nav>
      <div className={styles.actions}>
        <button className={styles.icon}>
          <Heart strokeWidth={2.5} />
        </button>
        <button className={styles.icon}>
          <User strokeWidth={2.5} />
        </button>
        <button className={styles.icon}>
          <ShoppingCart strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}
