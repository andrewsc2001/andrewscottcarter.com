import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>
        You made it to the end! While you’re at it, check me out on{" "}
        <a href="https://github.com/andrewsc2001">GitHub</a> or take a look at
        some of my{" "}
        <Link href="/blog">
          <a>blogs</a>
        </Link>
        , where I talk about the just-for-fun projects I’m currently diving
        into!
      </p>
    </footer>
  );
}
