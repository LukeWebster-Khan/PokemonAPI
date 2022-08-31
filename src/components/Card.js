import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const Card = () => {
  const [data, setData] = useState(["bulbasaur", "charmander", "squirtle"]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data.results[1]);
    });
  }, []);
  let pokemonData = data;
  let name = data.name;
  if (!data) return null;

  return (
    <>
      <div>
        His name is {data.name} and he is {data.weight} kg
        <h1>{console.log(data.url)}</h1>
      </div>
    </>
  );
};

export default Card;
