import { useState, useEffect } from "react";
import "./App.css";
import Card from "./componentes/Card";
import confetti from "canvas-confetti";
import { WinnerModal } from "./componentes/WinnerModal";
import imageTitle from './images/6543d0e84fd8dd7b77f40a5e907f7581.png';
import image001 from './images/001.png';
import image004 from './images/004.png';
import image007 from './images/007.png';
import image025 from './images/025.png';
import image052 from './images/052.png';
import image054 from './images/054.png';
import image050 from './images/050.png';
import image132 from './images/132.png';
import image066 from './images/066.png';
import image143 from './images/143.png';
import image095 from './images/095.png';
import image063 from './images/063.png';


const IMAGES = [
  image001,
  image004,
  image007,
  image025,
  image052,
  image054,
  image050,
  image132,
  image066,
  image143,
  image095,
  image063,
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
          src={imageTitle}
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
