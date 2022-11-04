import React, { useState } from "react";
import { useEffect, useRef } from "react";

import Datos from "../data/datos";
import { useSearchFieldState } from "react-stately";
// import { useButton } from "react-aria";
import { useSearchField } from "react-aria";
import { useTextField } from "react-aria";
import "../css/styles.css";

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
    <div className="searcher-container">
      <div className="upperside-searcher">
        <button className="header-button-sort" onClick={props.pokemonSort}>
          {props.ButtonSort}
        </button>
      </div>
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

      {/* <p>{props.PokemonInput}</p> */}
    </div>
  );
}

export default Searcher;
