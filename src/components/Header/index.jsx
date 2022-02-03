import { Link } from "react-router-dom";
import  Logo  from "../../assets/Logo.svg"
import styled from 'styled-components'
import colors from "../../utils/style/colors";

const LogoKasa = styled.img`
height: 68px;
width: inherit;
`
const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
margin: 2rem 5rem;
`
const NavBar = styled.nav`
width: 20%
// display: flex
// justify-content: space-between;
// color: ${colors.primary};
`
const linkStyle = {  
    color: colors.primary,
    textDecoration: "none",
  };
  
export default function Header(props) {
    return (
        <ContainerHeader>
            <LogoKasa src={Logo} alt="Logo Kasa" />
            <NavBar>
                <Link to="/" style={linkStyle}>Accueil</Link>
                <Link to="/about" style={linkStyle}>A Propos</Link>
            </NavBar>
        </ContainerHeader>
    );
}

