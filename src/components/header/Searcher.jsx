import React, { useState } from "react";
import Datos from "../data/datos";

function Searcher(props) {
  const [LocalData, setLocalData] = useState(Datos);
  const [buttonText, setButtonText] = useState("#->");

  const handleSearchTMP = (e) => {
    props.SetPokemonInput(e.target.value);

    props.SetSearch(true);

    console.log("se ingresa el texto", props.PokemonInput);
  };

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

  function handleKeyPress(e) {
    let key = e.key;
    console.log("You pressed a key: " + key);
    if (key == "Enter") {
      console.log("se presiona Enter");
    }
  }
  const PokemonListSort = (obj) => {
    console.log("Se solicita ordenar las cards");
    if (buttonText === "#->") {
      const strAscending = [...obj].sort((a, b) =>
        a.nombre > b.nombre ? 1 : -1
      );
      if (strAscending.length === 0) {
        props.setPokemonDisplay(obj);
        setLocalData(obj);
      } else {
        props.setPokemonDisplay(strAscending);
        console.log(strAscending);
        props.setPokemonDisplay(strAscending);
        // if (props.PokemonInput.length === 0) {
        //   props.setPokemonDisplay(Datos);
        // }
      }
      setButtonText("A->Z");
    } else {
      const numbAscending = [...obj].sort((a, b) => (a.id > b.id ? 1 : -1));

      props.setPokemonDisplay(numbAscending);
      props.setPokemonDisplay(numbAscending);
      // if (props.PokemonInput.length === 0) {
      //   props.setPokemonDisplay(Datos);
      // }
      setButtonText("#->");
    }
  };
  // buttonText === "A->Z" ? setButtonText("1->2") : setButtonText("A->Z");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={props.PokemonInput}
        onChange={handleSearchTMP}
        onKeyPress={(e) => PokemonSearch(e, props.DatosApi)}
        // onClick={() => PokemonSearch(LocalData)}
      ></input>
      <button onClick={() => PokemonListSort(props.DatosApi)}>
        {buttonText}
      </button>
    </div>
  );
}

export default Searcher;
