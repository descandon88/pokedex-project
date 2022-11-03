import React, { useState } from "react";
import Parent from "../Parent";
import "../css/styles.css";

function Cards(props) {
  const PokemonCards = (obj) => {
    console.log("se imprimen tarjetas" + obj);
    return obj.map((obj, index) => (
      <li className="li-Cards" key={index}>
        <p>{obj.id}</p>
        <img src={obj.img} style={{ width: "120px" }}></img>
        <p>{obj.nombre}</p>

        {/* <p>{obj.img}</p> */}
      </li>
    ));
  };
  return (
    <div>
      <ul className="ul-Cards">{PokemonCards(props.DatosApi)}</ul>
    </div>
  );
}

export default Cards;
