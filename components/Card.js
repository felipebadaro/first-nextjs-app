import cardStyles from "@/styles/Card.module.css";

function Card({ title, text }) {
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.cardTitle}>{title}</h2>
      <p className={cardStyles.cardText}>{text}</p>
    </div>
  );
}

export default Card;
