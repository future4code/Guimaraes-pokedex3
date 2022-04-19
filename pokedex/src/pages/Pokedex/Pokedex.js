import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToBack, goToDetails } from "../../Routes/coordinator/coordinator";

const Pokedex = () => {
  const navigate = useNavigate();
  const { pokedex, rmvPokemonCart } = useContext(GlobalStateContext);
  return (
    <div>
      <h1>Pokedex</h1>

      {pokedex?.map((poke) => {
        return (
          <div>
            <p key={poke.id}> {poke.name} </p>
            <img
            width={'50px'}
              src={poke.sprites.other.dream_world.front_default}
              alt={poke.name}
            />
            <button
              onClick={() => {
                rmvPokemonCart(poke);
              }}
            >
              Remover
            </button>
            <button
              onClick={() => goToDetails(navigate, poke.name)}
              key={poke.name}
            >
              Ver Detalhes
            </button>
          </div>
        );
      })}

      <button onClick={() => goToBack(navigate)}>VOLTAR</button>
    </div>
  );
};

export default Pokedex;
