"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/components/product/ProductHero.module.css";

interface ProductHeroProps {
  productId: string;
  name: string;
  brand?: string;
  shortDescription: string;
  packaging?: string;
  images?: string[];
}

export function ProductHero({
  productId,
  name,
  brand,
  shortDescription,
  packaging,
  images,
}: ProductHeroProps) {
  const galleryImages = useMemo(
    () => (images && images.length > 0 ? images : ["/placeholder.png"]),
    [images]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const showPrevious = () => {
    setIsZoomed(false);
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setIsZoomed(false);
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroCard}>
          {/* LEFT: IMAGE GALLERY */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageSurface}>
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.navButton} ${styles.navButtonPrev}`}
                    onClick={showPrevious}
                    aria-label="Предишно изображение"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className={`${styles.navButton} ${styles.navButtonNext}`}
                    onClick={showNext}
                    aria-label="Следващо изображение"
                  >
                    ›
                  </button>
                </>
              )}

              <Image
                src={galleryImages[activeIndex]}
                alt={`${name} - изображение ${activeIndex + 1}`}
                width={720}
                height={720}
                className={styles.heroImage}
                priority
                onClick={() => {
                  setIsLightboxOpen(true);
                  setIsZoomed(false);
                }}
              />
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className={styles.thumbnailStrip}>
                {galleryImages.map((src, index) => (
                  <button
                    key={src + index}
                    type="button"
                    className={`${styles.thumbnailButton} ${
                      index === activeIndex ? styles.thumbnailButtonActive : ""
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsZoomed(false);
                    }}
                    aria-label={`Покажи изображение ${index + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${name} миниатюра ${index + 1}`}
                      width={96}
                      height={96}
                      className={styles.thumbnailImage}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: CONTENT */}
          <div className={styles.heroContent}>
            {brand && <span className={styles.brandBadge}>{brand}</span>}

            <h1 className={styles.heroTitle}>{name}</h1>

            <p className={styles.shortDesc}>{shortDescription}</p>

            <div className={styles.metaGrid}>
              {packaging && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Налични опаковки</span>
                  <span className={styles.metaValue}>{packaging}</span>
                </div>
              )}

              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Отговор</span>
                <span className={styles.metaValue}>В рамките на 24 часа</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <Link
                className="button"
                href={`/kontakti?product=${encodeURIComponent(productId)}`}
              >
                Изпратете запитване
              </Link>
              <a className="button button--ghost" href="#technical-specs">
                Технически детайли
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setIsLightboxOpen(false);
            setIsZoomed(false);
          }}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Затвори"
            >
              ×
            </button>

            <div
              className={`${styles.lightboxImageFrame} ${
                isZoomed ? styles.lightboxImageFrameZoomed : ""
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={galleryImages[activeIndex]}
                alt={`${name} - голям изглед`}
                width={1400}
                height={1400}
                className={styles.lightboxImage}
                style={
                  isZoomed
                    ? { transform: "scale(1.5)", cursor: "zoom-out" }
                    : {}
                }
              />
              <span className={styles.zoomHint}>
                {isZoomed ? "Клик за отдалечаване" : "Клик за мащабиране"}
              </span>
            </div>

            {galleryImages.length > 1 && (
              <div className={styles.lightboxNav}>
                <button onClick={showPrevious}>‹</button>
                <span>
                  {activeIndex + 1} / {galleryImages.length}
                </span>
                <button onClick={showNext}>›</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
