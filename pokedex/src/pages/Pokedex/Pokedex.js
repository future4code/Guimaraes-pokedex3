import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToBack,
  goToDetails,
} from "../../Routes/coordinator/coordinator";

const Pokedex = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={() => goToDetails(navigate)}>Ver detalhes</button>
      <button onClick={() => goToBack(navigate)}>VOLTAR</button>
    </div>
  );
};

export default Pokedex;
