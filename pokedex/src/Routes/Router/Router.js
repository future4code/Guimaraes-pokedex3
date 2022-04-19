import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home";
import Pokedex from "../../pages/Pokedex/Pokedex";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/pokedex"} element={<Pokedex />} />
        <Route exact path={"/details/:name"} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
