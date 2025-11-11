import { useEffect, useState } from "react";
import "../styles/App.css";
import List from "./list";
import Score from "./Score";

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
        id: d.id,
        name: d.name,
        image: d.sprites.front_default,
        clicked: false,
      };
    })
  );
}

function fadeInList() {
  const list = document.querySelector(".card-list");
  list.classList.remove("fade-in");
  requestAnimationFrame(() => {
    list.classList.add("fade-in");
  });
}

function scrambleList(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    fetchPokemon().then((val) => {
      setData(scrambleList(val));
    });
  }, []);

  useEffect(() => {
    fadeInList();
  }, [data]);

  function cardClicked(id) {
    const card = data.find((val) => val.id === id);
    if (!card) return;

    if (card.clicked) {
      if (score > highScore) setHighScore(score);
      setScore(0);
      setData((prev) =>
        scrambleList(prev).map((p) => ({ ...p, clicked: false }))
      );
      return;
    }

    setData((prev) =>
      scrambleList(prev).map((p) => (p.id === id ? { ...p, clicked: true } : p))
    );
    setScore((prev) => prev + 1);
  }

  return (
    <>
      <Score score={score} highScore={highScore} />
      <List data={data} cardClicked={cardClicked} />
    </>
  );
}
