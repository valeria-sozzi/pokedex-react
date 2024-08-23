import React from "react";

const PokemonList = ({ resultPokemon, searchPokemon }) => {
  return (
    <ul>
      {resultPokemon.map(
        (pokemon) =>
          (pokemon.name.includes(searchPokemon) ||
            pokemon.id.toString().includes(searchPokemon)) && (
            <li key={pokemon.id}>{pokemon.name}</li>
          )
      )}
    </ul>
  );
};

export default PokemonList;
