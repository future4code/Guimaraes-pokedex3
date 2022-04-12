import React from "react";
import { useNavigate } from "react-router-dom";
import { goBackHome, goToBack } from "../../Routes/coordinator/coordinator";

const Details = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Detalhes</h1>  
      <button onClick={() => goBackHome(navigate)}>Página Inicial</button>
      <button onClick={() => goToBack(navigate)}>Voltar para Pokedex</button>
    </div>
  );
};

export default Details;
