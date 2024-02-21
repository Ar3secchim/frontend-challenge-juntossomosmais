import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { ToggleList } from "../../components/toogleList";

export function DetailsUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page = 1, pageSize = 9) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api?page=${page}&pageSize=${pageSize}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 mb-4">
      <p className="text-[12px] py-6">Home &gt; Usuário &gt; Detalhes </p>

      <section>
        <h1 className="pb-10 font-semibold text-3xl">Lista de membros</h1>

        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <section className="h-3/6 col-span-1 p-6 rounded-[4px] border-[0.5px] border-[#E5E5E5]">
            <h2 className="pb-[14px] text-xl font-medium flex">Por estado</h2>
            <ToggleList />
          </section>

          <section className="col-span-3 flex flex-col gap-4">
            <div className="h-14 flex justify-between items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-6 py-2">
              <p>Exibingo 4 de 9 itens</p>

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
              {data.map((user) => {
                return (
                  <Card
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

            <div>1 2 3 </div>
          </section>
        </div>
      </section>
    </main>
  );
}
