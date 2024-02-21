import { useState } from "react";

export function ToggleList() {
  const [states, setStates] = useState([
    { name: "São Paulo", isOpen: false },
    { name: "Rio de Janeiro", isOpen: false },
    { name: "Minas Gerais", isOpen: false },
    { name: "Espírito Santo", isOpen: false },
    { name: "Bahia", isOpen: false },
  ]);

  const toggleState = (index) => {
    const updatedStates = [...states];
    updatedStates[index].isOpen = !updatedStates[index].isOpen;
    setStates(updatedStates);
  };

  const handleToggleAll = () => {
    const updatedStates = states.map((state) => ({ ...state, isOpen: true }));
    setStates(updatedStates);
  };

  return (
    <>
      <ul>
        {states.map((state, index) => (
          <li key={index} className="pb-2 gap-2 flex">
            <input
              type="checkbox"
              checked={state.isOpen}
              onChange={() => toggleState(index)}
              className=""
            />
            {state.name}
          </li>
        ))}
      </ul>

      <button
        className=" underline underline-offset-1 text-sm"
        onClick={handleToggleAll}
      >
        Ver todos
      </button>
    </>
  );
}
