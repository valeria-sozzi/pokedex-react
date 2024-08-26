import React, { useEffect, useState } from "react";
import "./PokemonDetail.scss";

const PokemonDetail = ({ pokemonName, setIsDetailsOpen }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((resp) => {
        setPokemonDetails(resp);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="name-pokemon pb-20">
            Nome Pokemon: <span className="upper">{pokemonDetails?.name}</span>
          </div>
          <div className="img-card pb-20">
            <img src={pokemonDetails?.sprites?.front_default} />
          </div>
          <div className="experience-pokemon pb-20">
            Esperienza Pokemon: {pokemonDetails?.base_experience}
          </div>
          <div className="height-pokemon pb-20">
            Altezza Pokemon: {pokemonDetails?.height}
          </div>
          <div className="weight-pokemon pb-20">
            Peso Pokemon: {pokemonDetails?.weight}
          </div>
          <div className=" pb-20">
            Tipologia Pokemon: {pokemonDetails?.types[0]?.type?.name}
          </div>
          <div
            className="close"
            onClick={() => {
              setIsDetailsOpen(false);
            }}
          >
            {" "}
            X{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
