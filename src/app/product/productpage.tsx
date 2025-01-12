import React from "react";
import { Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./../styles/productpage.module.css";

export function ProductPage() {
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.mainImage}>
          <img
            src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            alt="Running shorts front view"
            className={styles.productImage}
          />
        </div>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
        >
          <ChevronLeft className={styles.icon} />
        </button>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
        >
          <ChevronRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.productInfo}>
          <div className="badge">NEW</div>
          <h1 className={styles.productTitle}>RUNNING 2 IN 1 SHORTS</h1>
          <p className={styles.productFit}>Regular Fit</p>
          <p className={styles.productPrice}>$72</p>
        </div>
        <div className={styles.colorSelection}>
          <p className={styles.colorOption}>White</p>
          <div className={styles.colorOptions}>
            <button className={`${styles.colorOption} ${styles.selected}`}>
              <img
                src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="White shorts"
                className={styles.colorImage}
              />
            </button>
          </div>
        </div>
        <div className={styles.sizeSelection}>
          <div className={styles.sizeHeader}>
            <p>Select a size</p>
            <button className={styles.sizeGuide}>Size Guide</button>
          </div>
          <div className={styles.sizeOptions}>
            {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
              <button key={size} className={styles.sizeOption}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.addToBag}>ADD TO BAG</button>
          <div className={styles.secondaryActions}>
            <button className={styles.favorite}>
              <Heart className={styles.icon} />
              <span>Favorite</span>
            </button>
            <button className={styles.share}>
              <Share2 className={styles.icon} />
              <span>Share</span>
            </button>
          </div>
        </div>
        <div className={styles.deliveryInfo}>
          <p className={styles.deliveryTitle}>
            Standard Delivery (3-5 Working Days)
          </p>
          <p className={styles.deliveryDescription}>
            Free Standard Shipping on orders over $100
          </p>
        </div>
      </div>
    </main>
  );
}
