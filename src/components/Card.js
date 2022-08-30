import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data.results[0]);
    });
  }, []);
  let name = data.name;
  if (!data) return null;

  return (
    <>
      <div>
        His name is {name}
        <h1>{console.log(data.url)}</h1>
      </div>
    </>
  );
};

export default Card;
