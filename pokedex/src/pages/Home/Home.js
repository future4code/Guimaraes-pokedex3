import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Detalhes from"../../img/Detalhes.png"
import Add from'../../img/Adicionar-a-Pokedex.png'
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
      <PkmContainer>
      {pokemonsDetails?.sort(function(a,b){return a.id - b.id}).map((poke) => {
        return (
          <PkmCard type={poke.types[0].type.name}>
            <PkmText key={poke.id}>#{poke.id} {poke.name}</PkmText>
            <PkmImg
              src={poke.sprites.other.home.front_default}
              alt={pokemonsDetails.name}
            />
            <PkmText>{poke.types[0].type.name}</PkmText>
            <PkmButtonsContainer>
            <PkmButtons onClick={() => addToPokedex(poke)}>
              {" "}
              <img src={Add}/>
            </PkmButtons>
            <PkmButtons
              onClick={() => goToDetails(navigate, poke.name)}
              key={poke.name}
            >
              <img src={Detalhes}/>
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
