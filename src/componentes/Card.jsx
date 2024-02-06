import React from "react";
import backCard from "../images/bola.jpeg";

const Card = ({
  index,
  isSelected,
  isGuessed,
  url,
  setSelected,
  image,
  selected,
}) => {
  return (
    <div
      key={index}
      className="card"
      onClick={() =>
        selected.length < 2 && setSelected((selected) => selected.concat(image))
      }
    >
      <img
        className="card-image"
        src={isGuessed || isSelected ? url : backCard}
      />
    </div>
  );
};

export default Card;
