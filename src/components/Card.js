import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const Card = () => {
  const [data, setData] = useState([]);
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    axios.get(baseUrl + "6").then((response) => {
      setSprite(response.data.sprites.front_shiny);
      console.log(response.data.sprites.front_shiny, "here");
    });
  }, []);
  // here

  // here
  if (!data) return null;

  return (
    <>
      <div>
        {/* His name is {data.name} and he is {data.weight} kg */}
        <div className="card__container">
          <div className="card__top">
            <div className="card__header-content">
              <div className="card__header-left">
                <p>basic Pokemon</p>
                <h5>Charmander</h5>
              </div>
              <div className="card__header-right">
                <p>50 HP</p>
                <p>*icon*</p>
              </div>
            </div>
            <div className="card__image-wrapper">
              <img src={sprite} alt="pokemon" />
            </div>
          </div>
          <div className="card__bottom">
            <div className="card__metrics">
              <p>Lizard Pokemon. Length 2' 0", Weight: 19 lbs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
