import styled from 'styled-components'

export const PkmContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const PkmCard = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: 80% 80%;
    background-position: center;
    border: 1px black solid;
    border-radius: 5px;
    max-height: 30%;
    height: 40vh;
    width: 15%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
`

export const PkmText = styled.p`
    text-transform: capitalize;
    text-align: center;
`