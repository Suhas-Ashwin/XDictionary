import "./styles.css";
import { useState, useEffect } from "react";

const customDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];
export default function App() {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [meaning, setMeaning] = useState("");

  useEffect(() => {});

  const handleClick = () => {
    if (search) {
      setIsSearch(true);
      setMeaning("");
      customDictionary.forEach((item) => {
        if (item.word.toLowerCase() === search.toLowerCase()) {
          setMeaning(item.meaning);
        }
      });
    } else {
      setIsSearch(false);
      setMeaning("");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={search}
        required
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <h4> Definition: </h4>
      {isSearch &&
        (meaning ? (
          <p>{meaning} </p>
        ) : (
          <p> Word not found in the dictionary. </p>
        ))}
    </div>
  );
}
