import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <h1>Bem vindo ao next</h1>
      <div className="container">
        <Card title={"Título 1"} text={"Text 1"} />
        <Card title={"Título 2"} text={"Text 2"} />
        <Card title={"Título 3"} text={"Text 3"} />
        <Card title={"Título 4"} text={"Text 4"} />
      </div>
    </>
  );
}
