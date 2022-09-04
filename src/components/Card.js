import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const Card = () => {
  const [data, setData] = useState([]);
  const [sprite, setSprite] = useState("");
  const [name, setName] = useState("");

  const randomNum = Math.floor(Math.random() * 151) + 1;

  useEffect(() => {
    axios.get(baseUrl + randomNum).then((response) => {
      console.log(response.data);
      setSprite(response.data.sprites.front_shiny);
      console.log(response.data.sprites.front_shiny.front, "here");
    });
  }, []);

  useEffect(() => {
    axios.get(baseUrl + randomNum).then((response) => {
      console.log(response.data);
      setName(response.data.name);
    });
  }, []);
  const pokemonName = () => {
    let newName = name.charAt(0).toUpperCase() + name.slice(1);
    return newName;
  };
  return (
    <>
      <div>
        {/* His name is {data.name} and he is {data.weight} kg */}
        <div className="card__container">
          <div className="card__top">
            <div className="card__header-content">
              <div className="card__header-left">
                <p>basic Pokemon</p>
                <h5>{pokemonName()}</h5>
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
