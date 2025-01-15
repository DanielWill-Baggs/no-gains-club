"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../../styles/productpage.module.css";
import useMounted from "../../utils/useMounted";
import urlParser from "../../utils/urlParser";
import findProduct from "../../utils/findProduct";
import Image from "next/image";
export default function ProductPage() {
  const isMounted = useMounted();
  const pathname = usePathname();
  const id = urlParser(pathname);
  const product = findProduct(id);

  if (!isMounted || !product) {
    return null;
  }

  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.mainImage}>
          <Image
            className={styles.productImage}
            src={product?.src}
            alt={product?.alt}
            width={500}
            height={500}
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
          <div className={styles.badge}>{product?.category}</div>
          <h1 className={styles.productTitle}>{product?.title}</h1>
          <p className={styles.productFit}>{product?.description}</p>
          <p className={styles.productPrice}>${product?.price}</p>
        </div>
        <div className={styles.colorSelection}>
          <p className={styles.colorOption}>Black</p>
          <div className={styles.colorOptions}>
            <button className={`${styles.colorOption} ${styles.selected}`}>
              <Image
                className={styles.colorImage}
                src={product?.src}
                alt={product?.alt}
                width={500}
                height={500}
              />
            </button>
            <button className={styles.colorOption}>
              <Image
                className={styles.colorImage}
                src={product?.src}
                alt={product?.alt}
                width={500}
                height={500}
              />
            </button>
            <button className={styles.colorOption}>
              <Image
                className={styles.colorImage}
                src={product?.src}
                alt={product?.alt}
                width={500}
                height={500}
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
