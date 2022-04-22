import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderTextContainer, HeaderImg, HeaderText, HeaderButtonsContainer, HeaderText2 } from "../Components/StyledHeader";
import { goBackHome, goToPokedex } from "../Routes/coordinator/coordinator";
import pokeball from "../img/Pokeball.png"

const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <HeaderTextContainer>
            <HeaderImg src={pokeball} onClick={() => goBackHome(navigate)}></HeaderImg>
            <HeaderText onClick={() => goBackHome(navigate)}>Pokédex</HeaderText>
            </HeaderTextContainer>
            <HeaderButtonsContainer>
            <HeaderText2 onClick={() => goBackHome(navigate)}>Ver Pokemons</HeaderText2>
            <HeaderText2 onClick={() => goToPokedex(navigate)}>Ir para a Pokedex</HeaderText2>
            </HeaderButtonsContainer>        
        </HeaderContainer>
    )
}

export default Header;