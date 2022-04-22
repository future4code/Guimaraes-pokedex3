import styled from "styled-components";
import { useHandleType } from "../../Hooks/UseHandleType";

export const PokedexContainer = styled.div`
  text-align: center;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  background: #e84e45;
  border-radius: 10px;

  padding-bottom: 10px;
`;
export const PokedexHeaderText = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;

  color: #ffffff;
`;
export const PokedexTextP = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;

  color: #ffffff;
`;
export const PokedexCardContainer = styled.div`
  background: ${(props) => useHandleType(props.type)};
  text-transform: capitalize;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  min-width: 35vw;
  width: fit-content;
  height: fit-content;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
`;
export const PokedexCardPkmContainer = styled.div`
  display: flex;
`;
export const PokedexCardImg = styled.img`
  background: #c4c4c4;
  box-shadow: inset 6px 5px 7px rgba(0, 0, 0, 0.29);
  border-radius: 12px;
  padding: 5px;
`;
export const PokedexCardText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;

  color: #000000;
`;
export const PokedexCardButtons = styled.button`
  background-color: transparent;
  border: none;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;

  :hover {
    background-color: lightgrey;
    border-radius: 10px;
  }
`;
