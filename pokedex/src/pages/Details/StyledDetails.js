import styled from "styled-components";
import { useHandleType } from "../../Hooks/UseHandleType";

export const DetailCardContainer = styled.div`
    display: flex;
    text-transform: capitalize;
    justify-content: space-between;

    width: 80vw;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;

    background: ${props => useHandleType(props.type)};
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 12px;
`