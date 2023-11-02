import "./App.css";
import { useCatFact, useCatImage } from "./hooks";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { url } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
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
