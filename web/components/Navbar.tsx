import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.left}>
          <Link href="/">
            <a className={`teal ${styles.name}`}>Andrew Carter</a>
          </Link>

          <span className={styles.leftLinks}>
            <a href="https://github.com/andrewsc2001">
              <img alt="github" src="/github.svg" />
            </a>
            <a href="mailto:technorover@gmail.com">
              {" "}
              {/* Change to work address */}
              <img alt="mail" src="/mail.svg" />
            </a>
            <a href="https://www.linkedin.com/in/andrew-carter-087752187/">
              <img alt="linkedin" src="/linkedin.svg" />
            </a>
          </span>
        </div>
        <div className={styles.right}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/mochi">
            <a>Mochi</a>
          </Link>
        </div>

        <button
          className={`${styles.mobileMenuButton}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <img src="/menu.svg" />
        </button>
      </nav>
      <ul className={`${styles.mobileMenu} ${mobileMenuOpen ? "" : "hidden"}`}>
        <span className={styles.mobileSocials}>
          <a href="https://github.com/andrewsc2001">
            <img alt="github" src="/github.svg" />
          </a>
          <a href="mailto:technorover@gmail.com">
            {" "}
            {/* Change to work address */}
            <img alt="mail" src="/mail.svg" />
          </a>
          <a href="https://www.linkedin.com/in/andrew-carter-087752187/">
            <img alt="linkedin" src="/linkedin.svg" />
          </a>
        </span>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/mochi">
          <a>Mochi</a>
        </Link>
      </ul>
    </>
  );
}
