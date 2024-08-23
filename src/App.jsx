import { useEffect, useState } from "react";
import "./App.css";
import PokemonList from "./assets/components/pokemonList/PokemonList.jsx";
import SerachForm from "./assets/components/searchForm/SerachForm.jsx";

function App() {
  const [resultPokemon, setResultPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon`)
      .then((response) => response.json())
      .then((resp) => {
        setResultPokemon(resp.results);
        setMessageError(false);
      })
      .catch((err) => setMessageError(true));
  }, []);

  return (
    <>
      {messageError && <p>Mi dispice c'è stato un errore</p>}

      <SerachForm
        searchPokemon={searchPokemon}
        setSearchPokemon={setSearchPokemon}
      />
      <PokemonList
        resultPokemon={resultPokemon}
        searchPokemon={searchPokemon}
      />
    </>
  );
}

export default App;
