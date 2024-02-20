import SearchIcon from "../ui/icons/search.svg"

export function Input() {
  return (
    <div className="flex px-4 items-center bg-white rounded-full border-[1px] border-gray-300">
      <img src={SearchIcon} />
      <input
        type="text"
        placeholder="Buscar aqui"
        className=" my-3 w-[400px] focus:outline-0"
      />
    </div>
  );
}
