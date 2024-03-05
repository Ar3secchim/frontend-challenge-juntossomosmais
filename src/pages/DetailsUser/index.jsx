import { useNavigate, useParams } from "react-router-dom";
import { searchUserByName } from "./hook";
import { useEffect, useState } from "react";
import { Header } from "@components/header";
import { CapitalizeWords } from "@utils/capitalizeWords";
import { DateTransformer } from "./utils/dateTransformer";
import skeletonImg from "@components/ui/skeletonImg.png";

export function DetailsUser() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://frontend-challenge-juntossomosmais-server.vercel.app/`
        );
        if (!response.ok) {
          throw new Error("Erro ao obter os dados");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!error) {
      const foundUser = searchUserByName(users, name);
      if (foundUser instanceof Error) {
        setError(foundUser.message);
      } else {
        setUser(foundUser);
      }
    }
  }, [users, name, error]);

  return (
    <>
      <Header />
      <section className="h-[590px]">
        {loading && (
          <div className="animate-pulse border-[0.5px] rounded-[4px] border-[#E5E5E5]bg-white p-8 flex flex-col items-center justify-center  mx-auto max-w-5xl my-9 ">
            <img
              className="w-40 h-40 rounded-full
               mb-4 object-cover"
              src={skeletonImg}
            />

            <span className="w-44 h-4 mb-4  rounded-full bg-[#D8D8D8] "></span>

            <span className="mb-3 w-28 h-3 rounded-full bg-[#D8D8D8] "></span>
            <span className="mb-3 w-28 h-3 rounded-full bg-[#D8D8D8] "></span>
          </div>
        )}

        {!loading && !user && (
          <div className="border-[0.5px] rounded-[4px] border-[#E5E5E5]bg-white p-8 flex flex-col items-center justify-center  mx-auto max-w-5xl my-9 ">
            Usuário não encontrado
            <button
              className="mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white rounded p-2"
              onClick={() => navigate("/")}
            >
              Voltar
            </button>
          </div>
        )}

        {user && (
          <div className="border-[0.5px] shadow-lg rounded-[4px] border-[#E5E5E5]bg-white p-8 flex flex-col items-center justify-center  mx-auto max-w-5xl my-9 ">
            <img
              src={user.picture.large}
              alt={`${name.title}. ${user.name.first} ${user.name.last}`}
              className="w-40 h-40 rounded-full
               mb-4 object-cover"
            />

            <h2 className="text-2xl font-bold text-gray-800">
              {CapitalizeWords(`${user.name.first} ${user.name.last}`)}
            </h2>
            <p className="text-gray-600 mb-2">Email: {user.email}</p>
            <p className="text-gray-600 mb-2">
              Endereço:{" "}
              {CapitalizeWords(`${user.location.city}, ${user.location.state}`)}
            </p>
            <p className="text-gray-600 mb-2">
              Cep: {`${user.location.postcode}`}
            </p>

            <p className="text-gray-600 mb-2">Telefone: {user.phone}</p>
            <p className="text-gray-600 mb-2">Celular: {user.cell}</p>
            <p className="text-gray-600 mb-2">
              Aniversário: {DateTransformer(user.dob.date)}
            </p>

            <button
              className="mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white rounded p-2"
              onClick={() => navigate("/")}
            >
              Voltar
            </button>
          </div>
        )}
      </section>
    </>
  );
}
