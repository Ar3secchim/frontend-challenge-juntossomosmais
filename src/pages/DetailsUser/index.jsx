import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { ToggleList } from "../../components/toogleList";
import { Pagination } from "../../components/pagination";
import { useFetch } from "./useFetch";

export function DetailsUser() {
  let { users, currentUsers, loading, pages, itensPerPage, setCurrentPage } =
    useFetch();

  return (
    <main className="mx-auto max-w-6xl px-6 mb-4">
      <p className="text-[12px] py-6">Home &gt; Usuário &gt; Detalhes </p>

      <section>
        <h1 className="pb-10 font-semibold text-3xl">Lista de membros</h1>

        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <section className="h-[474px] col-span-1 p-6 rounded-[4px] border-[0.5px] border-[#E5E5E5]">
            <h2 className="pb-[14px] text-xl font-medium flex">Por estado</h2>
            <ToggleList />
          </section>

          <section className="col-span-3 flex flex-col gap-4">
            <div className="h-14 flex justify-between items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-6 py-2">
              <p>{`Exibindo ${itensPerPage} de ${users.length} itens`}</p>

              <div className="text-sm ">
                Ordenar por:
                <select className="text-sm bg-transparent focus:outline-0">
                  <option className="bottom-0" value="true">
                    nome
                  </option>
                  <option value="false">ultimo nome</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {loading && <div>Carregando...</div>}

              {currentUsers.map((user, index) => {
                return (
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
                );
              })}
            </div>

            <Pagination
              totalPages={pages}
              setCurrentPagesNumber={setCurrentPage}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
