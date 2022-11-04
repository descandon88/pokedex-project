import React, { useState } from "react";
import Searcher from "./header/Searcher";
import Datos from "./data/datos";
import Cards from "./main/Cards";
import  "../components/style.css";

function Parent() {
  const [search, setSearch] = useState(false);
  const [inputText, setinputText] = useState("");
  const [apiPokemon, setapiPokemon] = useState(Datos);
  const [buttonSort, setButtonSort] = useState("#️⃣⬇️");
  const [MostrarButton, setMostrarButton] = useState(false);

  const handleClear = () => {
    setinputText("");
    setapiPokemon(Datos);

    //  setSearch(true);
    // console.log("se ingresa el texto dentro del handleSearch", inputText);
  };
  const pokemonSearch = (e) => {
    setinputText(e.target.value);
    setSearch(true);
    console.log("se ingresa el texto dentro del pokemonSearch", inputText);
    // let key = e.key;
    // console.log("You pressed a key: " + key);
    // if (key === "Enter" || inputText > 0) {
    // console.log("se presiona Enter");
    const pokemonFiltered = apiPokemon.filter((LocalArray) => {
      if (
        LocalArray.nombre.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (e.target.value !== "") {
      if (pokemonFiltered.length === 0) {
        setapiPokemon(Datos);
        setSearch(false);
        console.log("se imprime todo el objeto " + apiPokemon);
      } else {
        setapiPokemon(pokemonFiltered);
        console.log("se imprime datosApi" + apiPokemon);
      }
      // if (inputText.length === 0) {
      //   setapiPokemon(Datos);
      //   setSearch(false);
      // }
    } else {
      setapiPokemon(Datos);
      // setSearch(false);
    }
  };

  const PokemonListSort = () => {
    console.log("Se solicita ordenar las cards");
    if (buttonSort === "#️⃣⬇️") {
      const strAscending = [...apiPokemon].sort((a, b) =>
        a.nombre > b.nombre ? 1 : -1
      );
      setapiPokemon(strAscending);

      setButtonSort("🔤⬇️");
    } else {
      const numbAscending = [...apiPokemon].sort((a, b) =>
        a.id > b.id ? 1 : -1
      );

      setapiPokemon(numbAscending);

      setButtonSort("#️⃣⬇️");
    }
  };

  return (
    <div className="fondo">
      <Searcher
        // handleSearchPokemon={handleSearch}
        PokemonInput={inputText}
        SetSearch={setSearch}
        HandleClear={handleClear}
        Search={search}
        SetPokemonInput={setinputText}
        DatosApi={apiPokemon}
        setPokemonDisplay={setapiPokemon}
        pokemonSort={PokemonListSort}
        ButtonSort={buttonSort}
        PokemonSearch={pokemonSearch}
        label="🔍"
      />
      <Cards DatosApi={apiPokemon} />
    </div>
  );
}

export default Parent;
