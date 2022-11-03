import React, { useState } from "react";
import Datos from "../data/datos";

function Searcher(props) {
  const [LocalData, setLocalData] = useState(Datos);
  // const [buttonText, setButtonText] = useState("#->");

  const PokemonSearch = (e, obj) => {
    let key = e.key;
    console.log("You pressed a key: " + key);
    if (key === "Enter") {
      console.log("se presiona Enter");

      const pokemonFiltered = obj.filter((ob) => {
        if (
          ob.nombre.toLowerCase().includes(props.PokemonInput.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (pokemonFiltered.length === 0) {
        props.setPokemonDisplay(LocalData);
        console.log(props.DatosApi);
      } else {
        props.setPokemonDisplay(pokemonFiltered);
        console.log("se imprime datosApi" + props.DatosApi);
      }
      if (props.PokemonInput.length === 0) {
        props.setPokemonDisplay(LocalData);
      }
    }
  };

  // function handleKeyPress(e) {
  //   let key = e.key;
  //   console.log("You pressed a key: " + key);
  //   if (key == "Enter") {
  //     console.log("se presiona Enter");
  //   }
  // }

  return (
    <div>
      <input
        type="text"
        placeholder="🔍Search"
        value={props.PokemonInput}
        onChange={props.handleSearchPokemon}
        onKeyPress={(e) => PokemonSearch(e, props.DatosApi)}
        // onClick={() => PokemonSearch(LocalData)}
      ></input>

      <button
        className="header-button-sort"
        onClick={() => props.pokemonSort(props.DatosApi)}
      >
        {props.ButtonSort}
      </button>
    </div>
  );
}

export default Searcher;
