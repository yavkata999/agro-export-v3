'use client';

import { useMemo, useState } from "react";
import Image from "next/image";
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
    <section className={`section ${styles.heroSection}`}>
      <div className="container">
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            {brand && <span className={styles.brandBadge}>{brand}</span>}
            <h1 className={styles.heroTitle}>{name}</h1>
            <p className="muted">{shortDescription}</p>

            <div className={styles.metaGrid}>
              {packaging && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Опаковки</span>
                  <span className={styles.metaValue}>{packaging}</span>
                </div>
              )}

              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Отговор до</span>
                <span className={styles.metaValue}>48 часа</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <a
                className="button"
                href={`/kontakti?product=${encodeURIComponent(productId)}`}
              >
                Изпратете запитване
              </a>
              <a className="button button--ghost" href="#product-details">
                Вижте спецификациите
              </a>
            </div>
          </div>

          {galleryImages.length > 0 && (
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

                <div className={styles.imageViewport}>
                  <Image
                    src={galleryImages[activeIndex]}
                    alt={`${name} - изображение ${activeIndex + 1}`}
                    width={720}
                    height={720}
                    className={styles.heroImage}
                    onClick={() => {
                      setIsLightboxOpen(true);
                      setIsZoomed(false);
                    }}
                  />
                </div>
              </div>

              {galleryImages.length > 1 && (
                <div className={styles.thumbnailStrip}>
                  {galleryImages.map((src, index) => (
                    <button
                      key={src + index.toString()}
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
          )}
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} галерия`}
          onClick={() => {
            setIsLightboxOpen(false);
            setIsZoomed(false);
          }}
        >
          <div
            className={`${styles.lightboxContent} ${
              isZoomed ? styles.lightboxContentZoomed : ""
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => {
                setIsLightboxOpen(false);
                setIsZoomed(false);
              }}
              aria-label="Затвори"
            >
              ×
            </button>

            {galleryImages.length > 1 && (
              <div className={styles.lightboxNav}>
                <button type="button" onClick={showPrevious} aria-label="Назад">
                  ‹
                </button>
                <span>
                  {activeIndex + 1} / {galleryImages.length}
                </span>
                <button type="button" onClick={showNext} aria-label="Напред">
                  ›
                </button>
              </div>
            )}

            <div
              className={`${styles.lightboxImageFrame} ${
                isZoomed ? styles.lightboxImageFrameZoomed : ""
              }`}
              onClick={() => setIsZoomed((prev) => !prev)}
            >
              <Image
                src={galleryImages[activeIndex]}
                alt={`${name} - голям изглед`}
                width={1200}
                height={1200}
                className={styles.lightboxImage}
              />
              <span className={styles.zoomHint}>
                {isZoomed ? "Клик за отдалечаване" : "Клик за мащабиране"}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
