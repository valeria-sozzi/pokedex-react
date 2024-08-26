import React, { useState } from "react";
import PokemonDetail from "../pokemonDetail/PokemonDetail.jsx";
import "./PokemonList.scss";

const PokemonList = ({ resultPokemon, searchPokemon }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <ul className="list-container">
        {resultPokemon.map(
          (pokemon) =>
            (pokemon.name.includes(searchPokemon) ||
              pokemon.id.toString().includes(searchPokemon)) && (
              <li
                key={pokemon.id}
                onClick={() => {
                  setIsDetailsOpen(true);
                  setPokemonName(pokemon.name);
                }}
              >
                {pokemon.name}
              </li>
            )
        )}
      </ul>
      {isDetailsOpen && (
        <PokemonDetail
          pokemonName={pokemonName}
          setIsDetailsOpen={setIsDetailsOpen}
        />
      )}
    </>
  );
};

export default PokemonList;
