import React, { useState } from "react";
import { useEffect, useRef } from "react";

import Datos from "../data/datos";
import { useSearchFieldState } from "react-stately";
// import { useButton } from "react-aria";
import { useSearchField } from "react-aria";
import { useTextField } from "react-aria";
import "..//header/style.css";
import pokeball from "../data/img/pokeball.png";

function Searcher(props) {
  /// state booleano de mostrar boton, si es true me lo muestra, si es false es null. A ese mismo botón, cambiarlo el estado de mostrarlo.

  let { label } = props;
  let state = useSearchFieldState(props);
  let ref = React.useRef();
  let { labelProps, inputProps, clearButtonProps } = useSearchField(
    props,
    state,
    ref
  );

  return (
    <div>
      <p className="titulo">
        <div className="circle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src={pokeball} className="pokeball" />
        </div>
        <b>Pokedex</b>
      </p>
      <div className="Order">
        

        <div className="lowerside-searcher">
          <label {...labelProps}>{label}</label>
          <input
            ref={ref}
            type="text"
            placeholder="Search"
            value={props.PokemonInput}
            onChange={(e) => {
              props.PokemonSearch(e);
            }}
          />
          {props.PokemonInput.length !== 0 && (
            <div onClick={props.HandleClear} className="button-clear">
              ❎
            </div>
          )}
        </div>

        <button className="button" onClick={props.pokemonSort}>
          {props.ButtonSort}
        </button>

        {/* <p>{props.PokemonInput}</p> */}
      </div>
    </div>
  );
}

export default Searcher;
