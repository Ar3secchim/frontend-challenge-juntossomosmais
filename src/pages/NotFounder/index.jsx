import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@components/header";
export function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="mx-auto max-w-5xl my-9 justify-center flex flex-col">
        <h1 className="text-center my-64 font-bold text-4xl">
          Pagina não encontrada
        </h1>
        <button
          className="text-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            {"< Voltar"}
          </button>
        </button>
      </section>
    </>
  );
}
