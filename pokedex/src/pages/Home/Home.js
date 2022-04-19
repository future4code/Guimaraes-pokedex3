import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator/coordinator";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToDetails } from "../../Routes/coordinator/coordinator";
import { Pagination } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const { pokemonsDetails, onChangePage, addToPokedex } =
    useContext(GlobalStateContext);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => goToPokedex(navigate)}>Ir para a Pokedex</button>
      {pokemonsDetails?.map((poke) => {
        return (
          <div>
            <p key={poke.id}>{poke.name}</p>
            <img
              width={"100px"}
              src={poke.sprites.other.dream_world.front_default}
              alt={pokemonsDetails.name}
            />
            <button onClick={() => addToPokedex(poke)}>
              {" "}
              Adicionar à Pokedex{" "}
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
      <div>
        <Pagination count={20} color="primary" onChange={onChangePage} />
      </div>
    </div>
  );
};

export default Home;
