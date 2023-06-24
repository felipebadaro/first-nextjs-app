import { useRouter } from "next/router";

const CardDetails = ({ result }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      {result.title && result.body ? (
        <>
          <h1>{result.title}</h1>
          <p>{result.body}</p>
        </>
      ) : (
        <p>Nenhuma informação encontrada para o id '{id}'.</p>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const result = await data.json();

  return {
    props: {
      result,
    },
  };
}

export default CardDetails;