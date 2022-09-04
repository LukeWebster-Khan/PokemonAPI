import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const Card = () => {
  const [data, setData] = useState([]);
  const [sprite, setSprite] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const randomNum = Math.floor(Math.random() * 151) + 1;

  useEffect(() => {
    axios.get(baseUrl + randomNum).then((response) => {
      setSprite(response.data.sprites.front_shiny);
      setName(response.data.name);
      setType(response.data.types[0].type.name);
      setWeight(response.data.weight);
      setHeight(response.data.height);
      console.log(response.data, "here");
    });
  }, []);

  const capitalise = (arg) => {
    let newString = arg.charAt(0).toUpperCase() + arg.slice(1);
    return newString;
  };

  const kgToLbs = (arg) => {
    let newWeight = arg / 4.536;
    return newWeight.toFixed(1);
  };

  const metersToFeet = (arg) => {
    let newHeight = arg * 3.281;
    let ceiledHeight = Math.ceil(newHeight);
    let string = ceiledHeight.toString();
    let neww = string.split("");
    if (neww.length === 2) {
    }
    console.log(neww);
    let result = neww[0] + "'" + neww[1] + '"';
    return result;
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
                <h5>{capitalise(name)}</h5>
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
              <p>
                {type} Pokemon. Length {metersToFeet(height)}, Weight:{" "}
                {kgToLbs(weight)} lbs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
