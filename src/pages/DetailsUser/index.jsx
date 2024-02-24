import { useState } from "react";
import { Card } from "../../components/card";
import { ToggleList } from "../../components/toogleList";
import { Pagination } from "../../components/pagination";
import { useFetch } from "./hooks/useFetch";
import { useShort } from "./hooks/useShortName";

export function DetailsUser() {
  const { users: allUsers, loading } = useFetch();

  const [statesFilter, setStatesFilter] = useState([]);
  const [sortType, setSortType] = useState("name");

  const sortedUsers = useShort(allUsers, sortType);

  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage, setItensPerPage] = useState(9);
  const pages = Math.ceil(allUsers.length / itensPerPage);

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const UsersPages = sortedUsers.slice(startIndex, endIndex);

  const handleSortChange = (event) => {
    setSortType(event.target.value === "default" ? "name" : event.target.value);
  };

  const filteredUsers =
    statesFilter.length > 0
      ? sortedUsers.filter((user) => statesFilter.includes(user.location.state))
      : UsersPages;

  return (
    <main className="mx-auto max-w-6xl px-6 mb-4">
      <p className="text-[12px] py-6">Home &gt; Usuário &gt; Detalhes </p>

      <section>
        <h1 className="pb-10 font-semibold text-3xl">Lista de membros</h1>

        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <section className="col-span-1 p-6 rounded-[4px] border-[0.5px] border-[#E5E5E5]">
            <ToggleList
              title="Por estado"
              statesFilter={statesFilter}
              setStatesFilter={setStatesFilter}
            />
          </section>

          <section className="col-span-3 flex flex-col gap-4">
            <div className="h-14 flex justify-between items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-6 py-2">
              <p>{`Exibindo ${itensPerPage} de ${allUsers.length} itens`}</p>

              <div className="text-sm ">
                Ordenar por:
                <select
                  value={sortType}
                  onChange={handleSortChange}
                  className="text-sm bg-transparent focus:outline-0"
                >
                  <option value="name">Nome</option>
                  <option value="lastName">Último Nome</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {loading && <div>Carregando...</div>}
              {filteredUsers.map((user, index) => (
                <Card
                  key={index}
                  name={user.name.first}
                  lastName={user.name.last}
                  adress={user.location.street}
                  city={user.location.city}
                  state={user.location.state}
                  adressCep={user.location.postcode}
                  profile={user.picture.medium}
                />
              ))}
            </div>

            <Pagination
              totalPages={pages}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
