import cardStyles from "@/styles/Card.module.css";
import Card from "./Card";

function CardList({ cards }) {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
}

export default CardList;
