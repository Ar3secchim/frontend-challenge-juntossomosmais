import { useGetStages } from "./useGetStates";

export function ToggleList({ statesFilter, setStatesFilter, title }) {
  const { allStates, loadingState } = useGetStages();

  const toggleState = (state) => {
    if (statesFilter.includes(state)) {
      setStatesFilter(
        statesFilter.filter((selectedState) => selectedState !== state)
      );
    } else {
      setStatesFilter([...statesFilter, state]);
    }
  };

  const handleToggleAll = () => {
    setStatesFilter([]);
  };

  function capitalizeWords(sentence) {
    const words = sentence.split(" ");

    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    const capitalizedSentence = capitalizedWords.join(" ");
    return capitalizedSentence;
  }

  return (
    <>
      {loadingState && <div>Carregando...</div>}
      <h2 className="pb-[14px] text-xl font-medium">{title}</h2>
      <ul>
        {allStates.map((state, index) => (
          <li key={index} className="pb-2 gap-2 flex">
            <input
              type="checkbox"
              checked={statesFilter.includes(state)}
              onChange={() => toggleState(state)}
            />
            {capitalizeWords(state)}
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start gap-2">
        <button
          className="underline underline-offset-1 text-sm"
          onClick={handleToggleAll}
        >
          Limpar filtro
        </button>

        <button
          className=" underline underline-offset-1 text-sm"
          onClick={handleToggleAll}
        >
          Ver todos
        </button>
      </div>
    </>
  );
}
