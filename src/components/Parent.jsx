import React, { useState } from "react";
import Searcher from "./header/Searcher";
import Datos from "./data/datos";
import Cards from "./main/Cards";

function Parent() {
  const [search, setSearch] = useState(false);
  const [inputText, setinputText] = useState("");
  const [apiPokemon, setapiPokemon] = useState(Datos);
  const [buttonSort, setButtonSort] = useState("#️⃣⬇️");

  const handleSearch = (e) => {
    setinputText(e.target.value);
    setSearch(true);
    console.log("se ingresa el texto", inputText);
  };

  const PokemonListSort = (obj) => {
    console.log("Se solicita ordenar las cards");
    if (buttonSort === "#️⃣⬇️") {
      const strAscending = [...obj].sort((a, b) =>
        a.nombre > b.nombre ? 1 : -1
      );
      setapiPokemon(strAscending);

      setButtonSort("🔤⬇️");
    } else {
      const numbAscending = [...obj].sort((a, b) => (a.id > b.id ? 1 : -1));

      setapiPokemon(numbAscending);

      setButtonSort("#️⃣⬇️");
    }
  };

  return (
    <div>
      <Searcher
        handleSearchPokemon={handleSearch}
        PokemonInput={inputText}
        SetSearch={setSearch}
        SetPokemonInput={setinputText}
        DatosApi={apiPokemon}
        setPokemonDisplay={setapiPokemon}
        pokemonSort={PokemonListSort}
        ButtonSort={buttonSort}
      />
      <Cards DatosApi={apiPokemon} />
    </div>
  );
}

export default Parent;
