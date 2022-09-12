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
  const [move, setMove] = useState("");
  const [stat, setStat] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [moves, setMoves] = useState("");

  const randomNum = Math.floor(Math.random() * 151) + 1;

  useEffect(() => {
    axios.get(baseUrl + randomNum).then((response) => {
      setSprite(response.data.sprites.front_shiny);
      setName(response.data.name);
      setType(response.data.types[0].type.name);
      setWeight(response.data.weight);
      setHeight(response.data.height);
      setMove(response.data.moves[0].move.name);
      setStat(response.data.stats[0].base_stat);
      setAttack(response.data.stats[1].base_stat);
      setDefense(response.data.stats[2].base_stat);
      setMoves(response.data.moves[1].move.name);

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
                <p>{stat} HP</p>
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
                {capitalise(type)} Pokemon. Length {metersToFeet(height)},
                Weight: {kgToLbs(weight)} lbs
              </p>
            </div>
            <div className="card__move-container">
              <div className="card__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="109.000000pt"
                  height="107.000000pt"
                  viewBox="0 0 109.000000 107.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                  </metadata>
                  <g
                    transform="translate(0.000000,107.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path d="M480 1063 c-79 -8 -186 -37 -222 -59 -21 -13 -41 -24 -46 -24 -17 0 -101 -87 -131 -135 -55 -88 -71 -159 -71 -319 0 -154 12 -221 55 -306 33 -65 117 -149 180 -179 28 -13 58 -28 67 -33 10 -4 48 -7 85 -7 l68 2 -71 7 c-75 8 -115 24 -179 74 -83 64 -123 119 -167 233 -20 51 -23 76 -23 213 l0 155 42 86 c26 52 58 100 84 125 23 21 50 47 60 56 62 58 187 92 339 92 179 0 279 -36 382 -136 104 -101 136 -193 139 -392 0 -69 -1 -128 -4 -133 -2 -4 -8 -24 -12 -43 -30 -144 -162 -284 -310 -326 l-40 -12 33 -1 c18 -1 40 3 50 8 9 5 33 15 51 22 56 21 166 132 196 197 71 155 75 387 9 567 -14 36 -39 70 -89 120 -97 95 -163 126 -315 145 -84 10 -93 10 -160 3z" />
                    <path d="M480 875 c-111 -23 -209 -96 -259 -192 -44 -87 -44 -222 -1 -320 29 -65 101 -136 173 -169 55 -26 73 -29 157 -28 82 0 103 4 152 28 57 27 124 88 157 143 81 131 61 308 -48 425 -81 88 -220 136 -331 113z m128 -17 c26 -6 50 -16 54 -22 4 -6 8 -7 8 -2 0 5 8 2 18 -7 9 -8 19 -15 22 -15 12 3 50 -28 50 -39 0 -7 9 -18 20 -25 11 -7 20 -22 20 -33 0 -14 3 -16 9 -7 11 18 23 1 49 -68 26 -73 26 -172 -1 -245 -11 -31 -28 -60 -39 -66 -10 -5 -18 -16 -18 -24 0 -19 -70 -71 -130 -97 -83 -36 -255 -21 -284 25 -6 9 -18 17 -27 17 -19 0 -74 50 -110 100 -62 87 -64 231 -5 347 24 45 96 112 148 136 82 38 139 44 216 25z" />
                    <path d="M537 761 c-6 -51 -31 -110 -51 -123 -21 -15 -111 -7 -153 12 -24 10 -43 17 -43 14 0 -3 29 -32 65 -65 44 -41 65 -69 65 -84 0 -29 -36 -72 -90 -110 -49 -34 -38 -44 21 -21 22 9 61 17 86 18 57 3 77 -19 93 -100 17 -89 21 -91 35 -26 17 80 39 120 68 128 21 5 101 -10 150 -29 31 -12 18 13 -18 35 -51 32 -89 84 -81 114 3 13 34 49 68 80 34 31 59 58 57 60 -2 3 -31 -4 -63 -15 -114 -39 -157 -15 -178 99 -6 34 -15 62 -18 62 -4 0 -10 -22 -13 -49z m33 -120 c0 -14 68 -53 80 -46 17 11 23 -23 7 -45 -14 -21 -12 -55 8 -102 6 -16 3 -17 -25 -11 -24 4 -31 3 -26 -5 4 -7 1 -12 -8 -12 -8 0 -20 -9 -26 -19 -12 -23 -32 -22 -58 2 -10 9 -24 17 -30 17 -7 0 -12 5 -12 11 0 5 -5 7 -10 4 -6 -4 -17 -4 -25 -1 -12 4 -12 10 0 40 13 31 13 41 1 76 l-14 40 36 6 c20 4 46 18 59 30 25 25 43 31 43 15z" />
                  </g>
                </svg>
              </div>
              <p className="card__move">{move}</p>
              <p className="card__damage">10</p>
            </div>
            <hr className="card__horizontal-rule"></hr>
            <div className="card__move-container">
              <i>Attack: {attack}</i>
              <p className="card__move">{moves}</p>
              <p className="card__damage">Defence: {defense}</p>
            </div>
            <div className="card__move-container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
