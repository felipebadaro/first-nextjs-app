import cardStyles from "@/styles/Card.module.css";

function Card({ title, body }) {
  console.table(title, body);
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.cardTitle}>{title}</h2>
      <p className={cardStyles.cardText}>{body}</p>
    </div>
  );
}

export default Card;
