import { capitalizeWords } from "@utils/capitalizeWords";
import { useGetStages } from "./useGetStates";
import { useState } from "react";

export function ToggleList({ statesFilter, setStatesFilter, title }) {
  var VISIBLE_LIST = 5;
  const { allStates, loadingState } = useGetStages();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullList, setShowFullList] = useState(false);

  const toggleState = (state) => {
    if (statesFilter.includes(state)) {
      setStatesFilter(
        statesFilter.filter((selectedState) => selectedState !== state)
      );
    } else {
      setStatesFilter([...statesFilter, state]);
    }
  };

  const renderStates = () => {
    if (showFullList) {
      return allStates.map((state, index) => (
        <li key={index} className="pb-2 gap-2 flex">
          <input
            type="checkbox"
            checked={statesFilter.includes(state)}
            onChange={() => toggleState(state)}
          />
          {capitalizeWords(state)}
        </li>
      ));
    }

    const startIndex = (currentPage - 1) * VISIBLE_LIST;
    const endIndex = startIndex + VISIBLE_LIST;

    return allStates.slice(startIndex, endIndex).map((state, index) => (
      <li key={index} className="pb-2 gap-2 flex">
        <input
          type="checkbox"
          checked={statesFilter.includes(state)}
          onChange={() => toggleState(state)}
        />
        {capitalizeWords(state)}
      </li>
    ));
  };

  const handleToggleAll = () => {
    setStatesFilter([]);
  };

  const handleShowAll = () => {
    setShowFullList(true);
  };
  const handleShow = () => {
    setShowFullList(!true);
  };
  return (
    <section
      className={
        !showFullList
          ? "col-span-1 p-6 rounded-[4px] border-[0.5px] border-[#E5E5E5] h-[472px]"
          : "col-span-1 p-6 rounded-[4px] border-[0.5px] border-[#E5E5E5]"
      }
    >
      <h2 className="pb-[14px] text-xl font-medium">{title}</h2>

      {loadingState && <div>Carregando...</div>}
      <ul>{renderStates()}</ul>

      {!showFullList && (
        <button
          className=" underline underline-offset-1 text-sm"
          onClick={handleShowAll}
        >
          Ver todos
        </button>
      )}

      {showFullList && (
        <button
          onClick={handleShow}
          className=" underline underline-offset-1 text-sm"
        >
          Mostrar menos
        </button>
      )}

      <div className="flex flex-col items-start gap-2">
        <button
          className="underline underline-offset-1 text-sm"
          onClick={handleToggleAll}
        >
          Limpar filtro
        </button>
      </div>
    </section>
  );
}
