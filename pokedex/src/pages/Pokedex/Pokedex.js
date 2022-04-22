import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToBack, goToDetails } from "../../Routes/coordinator/coordinator";
import {
  PokedexCardButtons,
  PokedexCardContainer,
  PokedexCardImg,
  PokedexCardPkmContainer,
  PokedexCardText,
  PokedexContainer,
  PokedexHeader,
  PokedexHeaderText,
  PokedexTextP,
} from "./StyledPokedex";

const Pokedex = () => {
  const navigate = useNavigate();
  const { pokedex, rmvPokemonCart } = useContext(GlobalStateContext);
  return (
    <PokedexContainer>
      <PokedexTextP>Pokémons adicionados: {pokedex.length}</PokedexTextP>
      {pokedex?.map((poke) => {
        console.log(poke);
        return (
          <PokedexCardContainer type={poke.types[0].type.name}>
            <PokedexCardPkmContainer>
              <PokedexCardImg
                width={"50px"}
                src={
                  poke.sprites.versions["generation-v"]["black-white"].animated
                    .front_default
                }
                alt={poke.name}
              />
              <PokedexCardText key={poke.id}>
                {poke.name} #{poke.id}
              </PokedexCardText>
            </PokedexCardPkmContainer>
            <div>
              <PokedexCardButtons
                onClick={() => goToDetails(navigate, poke.name)}
                key={poke.name}
              >
                Ver Detalhes
              </PokedexCardButtons>
              <PokedexCardButtons
                onClick={() => {
                  rmvPokemonCart(poke);
                }}
              >
                Remover
              </PokedexCardButtons>
            </div>
          </PokedexCardContainer>
        );
      })}
    </PokedexContainer>
  );
};

export default Pokedex;
