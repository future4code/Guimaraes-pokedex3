import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/Url";
import useRequestData from "../../Hooks/UseRequestData";
import { goToBack } from "../../Routes/coordinator/coordinator";

const Details = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [pokemon] = useRequestData(`${BASE_URL}/pokemon/${params.name}`);

  const pokeType =
    pokemon &&
    pokemon.types.map((type) => {
      return <p key={pokemon.id}>{type.type.name.toUpperCase()}</p>;
    });

  const pokeStats =
    pokemon &&
    pokemon.stats.map((stat) => {
      return <p key={pokemon.id}>{stat.base_stat}</p>;
    });

  const pokeMoves =
    pokemon &&
    pokemon.moves.slice(0, 3).map((move) => {
      return <p key={pokemon.id}>{move.move.name}</p>;
    });

  return (
    <div>
      <h1>Detalhes</h1>

      {pokemon && (
        <div>
         
          <p>Nome: {pokemon.name}</p>
          <p>Tipo: {pokeType}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <h4>S T A T S</h4>
          {pokeStats}
          <h4>Ataques</h4>
          {pokeMoves}
        </div>
      )}
      <button onClick={() => goToBack(navigate)}>Voltar para Pokedex</button>
    </div>
  );
};

export default Details;
