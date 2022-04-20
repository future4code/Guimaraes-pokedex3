import styled from 'styled-components'

export const PkmContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
const handleType = type =>{
    switch(type){
        case 'normal':
        case 'ghost':
            return "#EFEFF2";
        case 'fire':
        case 'fighting':
        case 'dragon':
            return "#F76545";
        case 'electric':
            return "#F7C545";
        case 'ground':
            return "#9B897B";
        case 'ice':
        case 'water':
            return "#76AADB";
        case 'grass':
        case 'bug':
            return "#70A83B";
        case 'stile':
        case 'dark':
        case 'rock':
            return "#A2A2A2"
        case 'poison':
        case 'psychic':
        case 'fairy':
        case 'ghost':
            return "#A974BC";
        default:
            return "#EFEFF2";
    }
}
export const PkmCard = styled.div`

    background: ${props => handleType(props.type)};
    border-radius: 40px;
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
    background: #c7c7d1;
    box-shadow: inset 6px 5px 7px rgba(0, 0, 0, 0.29);
    border-radius: 70px;
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
    background-color: #c7c7d1;
`
