export const getUrlImage = async (word) => {
  const res = await fetch(
    `https://cataas.com/cat/says/${word}?fontSize=30&fontColor=red`
  );
  const { url } = res;
  return url;
};
