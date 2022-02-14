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
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 5rem;
@media (max-width: 768px) {
  padding: 1rem 2rem;
  }
.logo-header {
  width: 214px;
  @media (max-width: 630px) {
     width: 170px;
  }
  @media (max-width: 580px) {
     width: 145px;
  }
}
`
const NavBar = styled.nav`
font-weight: 500;
font-size: 24px;
display: flex;
justify-content: space-between;
justify-content: flex-end;;
@media (max-width: 630px) {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
}
@media (max-width: 580px) {
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
}
`

  const LinkWithActive = styled(Link)`
  // padding: 15px 20px;
  color: ${colors.primary};
  text-decoration: none;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  margin-left: 4rem;
  @media (max-width: 630px) {
    margin-left: 2rem;
  }
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
          <Logo className="logo-header" fill={colors.primary} stroke={colors.primary}/>
          <NavBar>
            <LinkWithActive to="/" >Accueil</LinkWithActive>
            <LinkWithActive to="/about" >A Propos</LinkWithActive>
          </NavBar>
        </ContainerHeader>
    );
}