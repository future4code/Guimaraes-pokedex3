import styled from 'styled-components'
import { useHandleType } from '../../Hooks/UseHandleType';
import pokeballBG from '../../img/Pokeball.png'

export const PkmContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
export const PkmCard = styled.div`
    background: ${props => useHandleType(props.type)};
    border-radius: 10px;
    max-height: 30%;
    height: fit-content;
    width: 15%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
`
export const PkmImg = styled.img`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 80%;
    background-image: url(${pokeballBG});
    background-size: contain;
`
export const PkmText = styled.p`
    text-transform: capitalize;
    text-align: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
`
export const PkmButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
export const PkmButtons = styled.button`
    border: none;
    background-color: transparent;
    
    font-family: 'Poppins';
    font-style: normal;
    font-size: 20px;

    :hover{
        background-color: lightgrey;
        border-radius: 10px;
    }
`
