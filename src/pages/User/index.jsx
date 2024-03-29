import { useMemo, useState } from "react";
import { Card } from "@components/card";
import { ToggleList } from "@components/toogleList";
import { Pagination } from "@components/pagination";
import { Input } from "@components/input";
import { useFetch } from "./hooks/useFetch";
import { useShortName } from "./hooks/useShortName";
import { Header } from "@components/header";
import { Link } from "react-router-dom";
import { Skeleton } from "@components/skeleton";

const URL_API = "https://frontend-challenge-juntossomosmais-server.vercel.app/";

export function User() {
  const { data, loading } = useFetch(URL_API);
  const [userState, setUserState] = useState({
    sortType: "name",
    searchTerm: "",
    stateFilter: [],
    currentPage: 0,
    itemsPerPage: 9,
  });

  const sortedAndFilteredUsers = useMemo(() => {
    let filteredUsers = data;

    if (userState.stateFilter.length > 0) {
      filteredUsers = filteredUsers.filter((user) =>
        userState.stateFilter.includes(user.location.state)
      );
    }

    if (userState.searchTerm) {
      const searchTermLower = userState.searchTerm.toLowerCase();
      filteredUsers = filteredUsers.filter((user) => {
        const nameMatch =
          user.name.first.toLowerCase().includes(searchTermLower) ||
          user.name.last.toLowerCase().includes(searchTermLower);
        return nameMatch;
      });
    }

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (userState.sortType === "name") {
        return a.name.first.localeCompare(b.name.first);
      } else if (userState.sortType === "lastName") {
        return a.name.last.localeCompare(b.name.last);
      }
    });

    return sortedUsers;
  }, [data, userState.searchTerm, userState.stateFilter, userState.sortType]);

  const totalPages = Math.ceil(
    sortedAndFilteredUsers.length / userState.itemsPerPage
  );
  const startIndex = userState.currentPage * userState.itemsPerPage;
  const endIndex = Math.min(
    startIndex + userState.itemsPerPage,
    sortedAndFilteredUsers.length
  );

  const handleSearchChange = (event) => {
    setUserState((prevState) => ({
      ...prevState,
      searchTerm: event.target.value,
      currentPage: 0,
    }));
  };

  const handleSortChange = (event) => {
    setUserState((prevState) => ({
      ...prevState,
      sortType: event.target.value === "default" ? "name" : event.target.value,
      currentPage: 0,
    }));
  };

  const handlePageChange = (pageNumber) => {
    setUserState((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
    }));
  };

  return (
    <>
      <Header>
        <Input
          searchChange={handleSearchChange}
          searchTerm={userState.searchTerm}
        />
      </Header>
      <main className="mx-auto max-w-6xl px-6 mb-4">
        <p className="text-[12px] py-6">Home &gt; Usuário &gt; Detalhes </p>

        <section>
          <h1 className="pb-10 font-semibold text-3xl">Lista de membros</h1>

          <div className="grid grid-cols-4 grid-rows-1 gap-4">
            <ToggleList
              title="Por estado"
              statesFilter={userState.stateFilter}
              setStatesFilter={(newStatesFilter) =>
                setUserState((prevState) => ({
                  ...prevState,
                  stateFilter: newStatesFilter,
                }))
              }
            />

            <section className="col-span-3 flex flex-col gap-4">
              <div className="h-14 flex justify-between items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-6 py-2">
                <p>{`Exibindo ${startIndex + 1} - ${Math.min(
                  endIndex,
                  sortedAndFilteredUsers.length
                )} de ${sortedAndFilteredUsers.length} itens`}</p>

                <div className="text-sm ">
                  Ordenar por:
                  <select
                    value={userState.sortType}
                    onChange={handleSortChange}
                    className="text-sm bg-transparent focus:outline-0"
                  >
                    <option value="name">Nome</option>
                    <option value="lastName">Último Nome</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {!loading && sortedAndFilteredUsers.length === 0 && (
                  <p className="font-bold">Nenhum usuário encontrado</p>
                )}

                {loading
                  ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
                  : sortedAndFilteredUsers
                      .slice(startIndex, endIndex)
                      .map((user, index) => (
                        <Link
                          key={index}
                          to={`/users/${user.name.first + user.name.last}`}
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
                        </Link>
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
