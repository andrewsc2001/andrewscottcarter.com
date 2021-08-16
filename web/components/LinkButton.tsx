import Link from "next/link";
import React from "react";
import styles from "../styles/LinkButton.module.css";

export interface LinkButtonProps {
  href: string;
  small?: boolean;
}

export interface DecorativeButtonProps {
  small?: boolean;
}

export default function LinkButton({
  children,
  href,
  small,
}: React.PropsWithChildren<LinkButtonProps>) {
  return (
    <a
      className={`${styles.container} ${small ? styles.small : styles.normal}`}
      href={href}
    >
      {children}
    </a>
  );
}

export function DecorativeButton({
  children,
  small,
}: React.PropsWithChildren<DecorativeButtonProps>) {
  return (
    <span
      className={`${styles.container} ${small ? styles.small : styles.normal}`}
    >
      {children}
    </span>
  );
}

export function NextLinkButton({
  children,
  href,
  small,
}: React.PropsWithChildren<LinkButtonProps>) {
  return (
    <span
      className={`${styles.container} ${small ? styles.small : styles.normal}`}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </span>
  );
}
