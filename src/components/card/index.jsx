export function Card({
  name,
  lastName,
  adress,
  adressCep,
  city,
  state,
  profile,
}) {

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

  function transformAdressFormat(str) {
    const matches = str.match(/\d+/);

    if (matches) {
      const number = matches[0];
      const indexNumber = str.indexOf(number);

      const partString = str.slice(0, indexNumber);
      const partNumber = str.slice(indexNumber + number.length);

      const newStr = partString.concat(partNumber, ", ", number);
      return capitalizeWords(newStr);
    }

    return str;
  }

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

      <p className="text-center text-sm pb-3">{transformAdressFormat(adress)}</p>

      <span className="text-xs flex flex-col items-center">
        <p>{capitalizeWords(city)}</p>
        <p>
          {capitalizeWords(state)} - CEP: {adressCep}
        </p>
      </span>
    </div>
  );
}
