import { useEffect, useState } from "react";
import "../styles/App.css";
import List from "./list";

//get img name data => send to list, create cards => highscore comp

const start = 387;
const length = 12;

const ids = Array.from({ length: length }, (_, i) => start + i);

async function fetchPokemon() {
  return await Promise.all(
    ids.map(async (id) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const d = await res.json();
      return {
        name: d.name,
        image: d.sprites.front_default,
      };
    })
  );

}

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPokemon().then((val) => {
      setData(val)
    })
  }, []);


  return (
    <>
      <List data={data} />
    </>
  );
}
