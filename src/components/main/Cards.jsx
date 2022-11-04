import React, { useState } from "react";
import Parent from "../Parent";
import "../css/styles.css";

function Cards(props) {
  const PokemonCards = (obj) => {
    console.log("se imprimen tarjetas" + obj);
    return obj.map((obj, index) => (
      <li
        className="li-Cards"
        key={index}
        style={{ backgroundColor: obj.backgroundcolor }}
      >
        {" "}
        <div className="CardsUp">
          <span className="Codigo">{obj.id}</span>
          <img
            className="pokemon"
            src={obj.img}
            style={{ width: "120px" }}
          ></img>
        </div>
        <div className="CardsDown">
          <span>
            <b>{obj.nombre}</b>
          </span>
        </div>
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
