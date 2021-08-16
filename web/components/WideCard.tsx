import React from "react";
import styles from "../styles/WideCard.module.css";

export interface WideCardProps {
  imgUrl: string;
  href: string;
  title: string;
  alt?: string;
}

export default function WideCard({
  imgUrl,
  href,
  title,
  alt,
  children,
}: React.PropsWithChildren<WideCardProps>) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <a href={href}>
          <img src={imgUrl} alt={alt ?? ""} />
        </a>
      </div>
      <div className={styles.content}>
        <a href={href}>
          <h2>{title}</h2>
        </a>
        {children}
      </div>
    </div>
  );
}
