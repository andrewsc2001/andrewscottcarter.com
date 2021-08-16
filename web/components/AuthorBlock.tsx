import styles from "../styles/AuthorBlock.module.css";

export interface AuthorBlockProps {
  imgUrl: string;
  date: Date;
}
export default function AuthorBlock({ imgUrl, date }: AuthorBlockProps) {
  console.log(date);
  return (
    <div className={styles.container}>
      <img src={imgUrl} />
      <div>
        <h2 className="teal">Andrew Carter</h2>
        <p>
          {date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
