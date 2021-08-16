import styles from "../styles/AuthorBlock.module.css";

export interface AuthorBlockProps {
  imgUrl: string;
  date: Date;
  name: string;
}
export default function AuthorBlock({ imgUrl, date, name }: AuthorBlockProps) {
  console.log(date);
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt="" />
      <div>
        <h2 className="teal">{name}</h2>
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
