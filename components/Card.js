import cardStyles from "@/styles/Card.module.css";
import Link from "next/link";

function Card({ id, title, body }) {
  return (
    <div className={cardStyles.card}>
      <Link href={`/card/${id}`}>
        <h2 className={cardStyles.cardTitle}>{title}</h2>
        <p className={cardStyles.cardText}>{body}</p>
      </Link>
    </div>
  );
}

export default Card;
