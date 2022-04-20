import styled from "styled-components";
import { useHandleType } from "../../Hooks/UseHandleType";

export const PokedexCardContainer = styled.div`
    background: ${props => useHandleType(props.type)};
    text-transform: capitalize;
    min-width: 35vw;
    width: fit-content;
    height: fit-content;
    
    display: flex;
    justify-content: space-between;
`