import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokemonsUrls, setPokemonsUrls] = useState([]);
  const [pokemonsDetails, setPokemonsDetails] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [numberPage, setNumberPage] = useState(1);
  const page = numberPage * 20;
  const [pokemonData, setPokemonData] = useRequestData(
    `${BASE_URL}/pokemon?limit=20&offset=${page}`
  );

  const onChangePage = (e, value) => setNumberPage(value);

  useEffect(() => {
    const list = [];
    pokemonData &&
      pokemonData.results.map((poke) => {
        list.push(poke.url);
        setPokemonsUrls(list);
      });
  }, [pokemonData]);

  useEffect(() => {
    const dataPokemon = [];
    pokemonsUrls &&
      pokemonsUrls.map((poke) => {
        axios
          .get(poke)
          .then((res) => {
            dataPokemon.push(res.data);
            if (dataPokemon.length === 20) {
              setPokemonsDetails(dataPokemon);
            }
          })
          .catch((err) => alert(err));
      });
  }, [pokemonsUrls])

  const addToPokedex = (poke) => {
    const pokeIndex = pokemonsDetails.findIndex(
      (pokemon) => pokemon.name === poke.name
    );
    const newPokemonList = [...pokemonsDetails];
    newPokemonList.splice(pokeIndex, 1);
    const newPokedexList = [...pokedex, pokemonsDetails[pokeIndex]];
    setPokemonsDetails(newPokedexList);
    setPokedex(newPokedexList);

    alert("Você adicionou um pokemon!");
  };

  const rmvPokemonCart = (poke) => {
    const pokeIndex = pokedex.findIndex(
      (pokemon) => pokemon.name === poke.name
    );
    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const newPokemonList = [...pokemonsDetails, pokedex[pokeIndex]];

    setPokemonsDetails(newPokemonList);
    setPokedex(newPokedexList);

    alert("Você removeu um pokemon!");
  };

  const pokemon = {
    pokemonsDetails,
    onChangePage,
    pokedex,
    addToPokedex,
    rmvPokemonCart,
  };

  return (
    <GlobalStateContext.Provider value={pokemon}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
