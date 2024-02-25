import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/card";
import { ToggleList } from "../../components/toogleList";
import { Pagination } from "../../components/pagination";
import { Input } from "../../components/input";
import { useFetch } from "./hooks/useFetch";
import { useShort } from "./hooks/useShortName";
import { Header } from "../../components/header";

export function DetailsUser() {
  const { users: allUsers, loading } = useFetch();
  const [sortType, setSortType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  const [statesFilter, setStatesFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage, setItensPerPage] = useState(9);

  const sortedUsers = useShort(allUsers, sortType);

  const filteredUsers = useMemo(() => {
    let filtered = sortedUsers;

    if (statesFilter.length > 0) {
      filtered = filtered.filter((user) =>
        statesFilter.includes(user.location.state)
      );
    }

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filtered = filtered.filter((user) => {
        const nameMatch =
          user.name.first.toLowerCase().includes(searchTermLower) ||
          user.name.last.toLowerCase().includes(searchTermLower);
        return nameMatch;
      });
    }
    return filtered;
  }, [statesFilter, searchTerm, sortedUsers]);

  let totalPages = Math.ceil(filteredUsers.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value === "default" ? "name" : event.target.value);
    setCurrentPage(0);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    totalPages = Math.ceil(filteredUsers.length / itensPerPage);
  }, [filteredUsers]);

  return (
    <>
      <Header>
        <Input searchChange={handleSearchChange} searchTerm={searchTerm} />
      </Header>
      <main className="mx-auto max-w-6xl px-6 mb-4">
        <p className="text-[12px] py-6">Home &gt; Usuário &gt; Detalhes </p>

        <section>
          <h1 className="pb-10 font-semibold text-3xl">Lista de membros</h1>

          <div className="grid grid-cols-4 grid-rows-1 gap-4">
            <ToggleList
              title="Por estado"
              statesFilter={statesFilter}
              setStatesFilter={setStatesFilter}
            />

            <section className="col-span-3 flex flex-col gap-4">
              <div className="h-14 flex justify-between items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-6 py-2">
                <p>{`Exibindo ${currentPage * itensPerPage} - ${
                  itensPerPage + currentPage * 9
                } 
              de ${filteredUsers.length} itens`}</p>

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

                {filteredUsers
                  .slice(startIndex, endIndex)
                  .map((user, index) => (
                    <link
                      key={client.id}
                      to={`/clients/${user.name.first + user.name.last}`}
                    >
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
                    </link>
                  ))}
              </div>

              <Pagination
                totalPages={totalPages}
                setCurrentPage={handlePageChange}
              />
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
