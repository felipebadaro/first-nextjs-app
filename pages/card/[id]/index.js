import { useRouter } from "next/router";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";
import { baseURLAPI } from "../../../config";

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
      <br />
      <Link href="/">Voltar para página inicial</Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const suffix = `posts/${params.id}`;
  const result = await useRequest(baseURLAPI, suffix);

  return {
    props: {
      result,
    },
  };
}

export default CardDetails;
