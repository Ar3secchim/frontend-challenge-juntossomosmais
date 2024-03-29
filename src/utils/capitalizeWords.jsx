export function capitalizeWords(sentence) {
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
