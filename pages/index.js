import styles from "@/styles/Home.module.css";
import CardList from "@/components/CardList";
import useRequest from "../hooks/useRequest";
import { baseURLAPI } from "../config";

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
  const suffix = "posts?_limit=10";
  const cards = await useRequest(baseURLAPI, suffix);

  return {
    props: {
      cards,
    },
  };
};
