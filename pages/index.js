import styles from "@/styles/Home.module.css";
import CardList from "@/components/CardList";

export default function Home({ cards }) {
  return (
    <>
      <h1>Bem vindo ao next</h1>
      <div className="container">
        <CardList cards={cards} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const cards = await res.json();

  return {
    props: {
      cards,
    },
  };
};
