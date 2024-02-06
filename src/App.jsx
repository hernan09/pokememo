import { useState, useEffect } from "react";
import "./App.css";
import Card from "./componentes/Card";
import confetti from "canvas-confetti";
import { WinnerModal } from "./componentes/WinnerModal";

const IMAGES = [
  "src/images/pokemons/001.png",
  "src/images/pokemons/004.png",
  "src/images/pokemons/007.png",
  "src/images/pokemons/025.png",
  "src/images/pokemons/052.png",
  "src/images/pokemons/054.png",
  "src/images/pokemons/132.png",
  "src/images/pokemons/050.png",
  "src/images/pokemons/066.png",
  "src/images/pokemons/143.png",
  "src/images/pokemons/095.png",
  "src/images/pokemons/063.png",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

function App() {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (
        selected[0] !== selected[1] &&
        selected[0].split("|")[1] === selected[1].split("|")[1]
      ) {
        confetti();
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => {
        setSelected([]);
      }, 300);
    }
  }, [selected]);

  const handleReset = () => {
    location.reload();
    setGuessed([]);
    setSelected([]);
  };

  return (
    <div className="app">
      <div>
        <img
          className="title"
          src="./src/images/6543d0e84fd8dd7b77f40a5e907f7581.png"
        />
      </div>
      <div className="card-container">
        {IMAGES.map((image, index) => {
          const [, url] = image.split("|");
          return guessed.length === IMAGES.length ? (
            <WinnerModal key={index} handleReset={handleReset} />
          ) : (
            <Card
              key={index}
              url={url}
              image={image}
              isSelected={selected.includes(image)}
              isGuessed={guessed.includes(image)}
              setSelected={setSelected}
              selected={selected}
            />
          );
        })}
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;
