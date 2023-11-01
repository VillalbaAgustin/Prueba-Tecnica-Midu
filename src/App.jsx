import { useEffect, useState } from "react";
import "./App.css";
import { getRandomFact } from "./service";
import { useCatImage } from "./hooks";


function App() {
  const [fact, setFact] = useState("HOlA");
  const { url } = useCatImage({fact})

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  const handleClick = async () => {
    const fact = await getRandomFact();
    setFact(fact);
  };

  return (
    <main>
      <h1>Facts about cats</h1>
      <button onClick={handleClick}>Get new fact</button>
      {/* <input type="text" placeholder="Put your text here" value={fact} onChange={(e) => setFact(e.target.value)}/> */}
      {fact && <p>{fact}</p>}
      {url && <img src={url} alt={`Cat saying ${fact.split(" ", 1)}`} />}
    </main>
  );
}

export default App;
