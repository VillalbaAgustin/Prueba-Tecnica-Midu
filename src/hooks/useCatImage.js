import { useEffect, useState } from "react";
import { getUrlImage } from "../service";

export const useCatImage = ({fact}) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (!fact) return;
    const word = fact.split(" ", 3).join(" ");
    getUrlImage(word).then((url) => setUrl(url));
  }, [fact]);

  return {url}
};