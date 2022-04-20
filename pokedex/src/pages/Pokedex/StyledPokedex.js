import styled from "styled-components";
import { useHandleType } from "../../Hooks/UseHandleType";

export const PokedexCardContainer = styled.div`
    background: ${props => useHandleType(props.type)};
    text-transform: capitalize;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
    min-width: 35vw;
    width: fit-content;
    height: fit-content;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-between;
`

export const PokedexCardButtons = styled.button`
    background-color: transparent;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;

    :hover{
        background-color: grey;
        border-radius: 10px;
        
    }
`