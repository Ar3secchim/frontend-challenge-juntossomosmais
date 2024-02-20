import { Card } from "../components/card";
import { Header } from "../components/header";
import { ToggleList } from "../components/toogleList";

export function DetailsUser() {
  return (
    <main className="mx-auto max-w-5xl px-6 mb-4">
      <p className="text-[12px] py-6">Home &gt; Usuário &gt; Detalhes </p>

      <section>
        <h1 className="pb-10 font-semibold text-3xl">Lista de membros</h1>

        <div className="grid grid-cols-4 gap-4">
          <section className="col-span-1 p-6 rounded-[4px] border-[0.5px] border-[#E5E5E5]">
            <h2 className="pb-[14px] text-xl font-medium">Por estado</h2>
            <ToggleList />
          </section>

          <section className="col-span-3 flex flex-col gap-4">
            <div className="h-14 flex justify-between items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-6 py-2">
              <p>Exibingo 4 de 9 itens</p>

              <div className="text-sm ">
                Ordenar por:
                <select className="text-sm bg-transparent focus:outline-0">
                  <option className="bottom-0" value="true">nome</option>
                  <option value="false">ultimo nome</option>
                </select>
              </div>
            </div>

            <div>
              <Card />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
