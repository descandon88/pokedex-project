import React, { useState } from "react";
import Searcher from "./header/Searcher";
import Datos from "./data/datos";
import Cards from "./main/Cards";
import  "../components/style.css";


function Parent() {
  const [search, setSearch] = useState(false);
  const [inputText, setinputText] = useState("");
  const [apiPokemon, setapiPokemon] = useState(Datos);

  const handleSearch = (e) => {
    setinputText(e.target.value);
    setSearch(true);
    console.log("se ingresa el texto", inputText);
  };

  return (
    <div className="fondo">
      
      <Searcher
        handleSearchPokemon={handleSearch}
        PokemonInput={inputText}
        SetSearch={setSearch}
        SetPokemonInput={setinputText}
        DatosApi={apiPokemon}
        setPokemonDisplay={setapiPokemon}
      />
      <Cards DatosApi={apiPokemon} />
    </div>
  );
}

export default Parent;
