import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToBack, goToDetails } from "../../Routes/coordinator/coordinator";
import { PokedexCardContainer } from "./StyledPokedex";

const Pokedex = () => {
  const navigate = useNavigate();
  const { pokedex, rmvPokemonCart } = useContext(GlobalStateContext);
  return (
    <div>
      <h1>Pokedex</h1>

      {pokedex?.map((poke) => {
        console.log(poke)
        return (
          <PokedexCardContainer type={poke.types[0].type.name}>
            <div>
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
            <p key={poke.id}> {poke.name} </p>
            <img
            width={'50px'}
              src={poke.sprites.versions['generation-v']['black-white'].animated.front_default}
              alt={poke.name}
            />
          </PokedexCardContainer>
        );
      })}

      <button onClick={() => goToBack(navigate)}>VOLTAR</button>
    </div>
  );
};

export default Pokedex;
