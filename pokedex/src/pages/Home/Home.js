import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator/coordinator";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToDetails } from "../../Routes/coordinator/coordinator";
import { Pagination } from "@mui/material";
import { PkmButtons, PkmButtonsContainer, PkmCard, PkmContainer, PkmImg, PkmText } from "./StyledHome";

const Home = () => {
  const navigate = useNavigate();
  const { pokemonsDetails, onChangePage, addToPokedex } =
    useContext(GlobalStateContext);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => goToPokedex(navigate)}>Ir para a Pokedex</button>
      <PkmContainer>
      {pokemonsDetails?.map((poke) => {
        console.log(poke)
        return (
          <PkmCard type={poke.types[0].type.name}>
            <PkmImg
              width={"150px"}
              src={poke.sprites.other.home.front_default}
              alt={pokemonsDetails.name}
            />
            <PkmText key={poke.id}>{poke.name}</PkmText>
            <PkmText>{poke.types[0].type.name}</PkmText>
            <PkmButtonsContainer>
            <PkmButtons onClick={() => addToPokedex(poke)}>
              {" "}
              Adicionar à Pokedex{" "}
            </PkmButtons>
            <PkmButtons
              onClick={() => goToDetails(navigate, poke.name)}
              key={poke.name}
            >
              Detalhes
            </PkmButtons>
            </PkmButtonsContainer>
          </PkmCard>
        );
      })}
      </PkmContainer>
      <div>
        <Pagination count={20} color="primary" onChange={onChangePage} />
      </div>
    </div>
  );
};

export default Home;
