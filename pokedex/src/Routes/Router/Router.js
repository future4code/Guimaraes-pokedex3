import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../Components/Header";
import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home";
import Pokedex from "../../pages/Pokedex/Pokedex";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/pokedex"} element={<Pokedex />} />
        <Route exact path={"/details/:name"} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
