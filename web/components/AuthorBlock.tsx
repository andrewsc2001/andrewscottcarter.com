import styles from "../styles/AuthorBlock.module.css";

export interface AuthorBlockProps {
  imgUrl: string;
}
export default function AuthorBlock({
  imgUrl,
  children,
}: React.PropsWithChildren<AuthorBlockProps>) {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt="" />
      <div>{children}</div>
    </div>
  );
}
