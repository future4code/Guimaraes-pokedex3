import styled from "styled-components"

export const HeaderContainer = styled.div`
    background: #222222;
    border: 2px solid #FFFFFF;
    text-align: center;
    height: 10vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HeaderTextContainer = styled.div`
    display: flex;
    align-items: center;

    height: fit-content;
    width: fit-content;

    :hover{
        cursor: pointer;
    }
`
export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    height: fit-content;
    width: fit-content;

    margin-right: 20px;
`
export const HeaderText = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;

    margin-left: 20px;

    color: #FFFFFF;

    :hover{
        cursor: pointer;
    }
`
export const HeaderText2 = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    margin-left: 20px;

    color: #FFFFFF;

    :hover{
        cursor: pointer;
    }
`
export const HeaderImg = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
`