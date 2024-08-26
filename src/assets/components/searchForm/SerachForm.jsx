import React from "react";
import "./SearchForm.scss";

const SerachForm = ({ searchPokemon, setSearchPokemon }) => {
  return (
    <div className="search-container">
      <label>Cerca Pokemon per Nome o ID</label>
      <div>
        <input
          type="text"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
        <button>Cerca Pokemon</button>
      </div>
    </div>
  );
};

export default SerachForm;
