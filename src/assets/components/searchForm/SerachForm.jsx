import React from "react";

const SerachForm = ({ searchPokemon, setSearchPokemon }) => {
  return (
    <div>
      <label>Cerca Pokemon per Nome o ID</label>
      <input
        type="text"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
      />
      <button>Cerca Pokemon</button>
    </div>
  );
};

export default SerachForm;
