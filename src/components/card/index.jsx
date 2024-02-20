export function Card() {
  return (
    <div className="w-[274px] h-[310px] flex flex-col justify-center items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-10 py-2">
      <img className="pb-5" src="/" width="80" height="80" />
      <h4 className="font-bold text-xl pb-4">Nome user</h4>
      <p className=" text-sm pb-3">endereço</p>
      <p className="text-xs">endereço com cep</p>
    </div>
  );
}
