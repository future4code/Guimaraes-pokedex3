import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator/coordinator";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => goToPokedex(navigate)}>Ir para a Pokedex</button>
    </div>
  );
};

export default Home;
