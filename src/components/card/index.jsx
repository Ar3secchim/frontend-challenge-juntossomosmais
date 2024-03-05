import { capitalizeWords } from "@utils/capitalizeWords";
import { separeteNumberFromString } from "@utils/separeteNumberFromString";

export function Card({
  name,
  lastName,
  adress,
  adressCep,
  city,
  state,
  profile,
}) {
  return (
    <div className="w-[260px] h-[310px] flex flex-col justify-center items-center border-[0.5px] rounded-[4px] border-[#E5E5E5] px-10 py-2">
      <img
        width={80}
        height={80}
        className=" bg-clip-borderpb-5 rounded-full mb-6"
        src={profile}
      />

      <h4 className="font-bold text-xl pb-4 text-center">
        {capitalizeWords(name) + " " + capitalizeWords(lastName)}
      </h4>

      <p className="text-center text-sm pb-3">
        {capitalizeWords(separeteNumberFromString(adress))}
      </p>

      <span className="text-xs flex flex-col items-center">
        <p>{capitalizeWords(city)}</p>
        <p>
          {capitalizeWords(state)} - CEP: {adressCep}
        </p>
      </span>
    </div>
  );
}
