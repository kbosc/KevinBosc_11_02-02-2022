import { Link } from "react-router-dom";
// import  Logo  from "../../assets/Logo.svg"
import styled from 'styled-components'
import colors from "../../utils/style/colors";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

// const LogoKasa = styled.img`
// height: 68px;
// width: inherit;
// `
const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
margin: 2rem 5rem;
`
const NavBar = styled.nav`
width: 20%;
font-weight: 500;
font-size: 24px;
display: flex;
justify-content: space-between;
// color: ${colors.primary};
`

  const LinkWithActive = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
  &:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${colors.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after { 
    width: 100%; 
    left: 0; 
  `
  
export default function Header(props) {
    return (
        <ContainerHeader>
          <Logo width="210px" fill={colors.primary} stroke={colors.primary}/>
          {/* <LogoKasa src={Logo} alt="Logo Kasa" /> */}
          <NavBar>
            <LinkWithActive to="/" >Accueil</LinkWithActive>
            <LinkWithActive to="/about" >A Propos</LinkWithActive>
          </NavBar>
        </ContainerHeader>
    );
}