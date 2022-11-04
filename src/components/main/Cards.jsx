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
        /*style={{ backgroundColor: obj.backgroundcolor }}*/
      >
          <div className="Cards" id={obj.type}>
          <div className="CardsUp">
            <p className="Codigo">{"#" + obj.id}</p>
          </div>
          <div className="CardsBody">
            <img className="pokemon" src={obj.img}></img>
          </div>
          <div className="CardsDown" id={obj.type+"2"}>
            <p className="pokeName">
              <b>{obj.nombre}</b>
            </p>
          </div>
        </div>
      </li>
    ));
  };
  return (
    <div className="Card">
      <ul className="ul-Cards">{PokemonCards(props.DatosApi)}</ul>
    </div>
  );
}

export default Cards;
