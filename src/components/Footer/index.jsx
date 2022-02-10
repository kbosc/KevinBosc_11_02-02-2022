import React from 'react';
// import  Logo  from "../../assets/Logo.svg"
import styled from 'styled-components';
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const ContainerFooter = styled.footer`
position: relative;
  text-align: center;
height: 209px;
background-color: black;
color: white;
margin: 0 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

// const FooterLogo = styled.img`
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// width: 122px;
// `
const FooterCopyright = styled.div`
position: absolute;
top: 80%;
left: 50%;
transform: translate(-50%, -80%);
`

export default function Footer(props) {
    return (
        <ContainerFooter>
            <Logo width="122px" fill='white' stroke='white'/>
            {/* <FooterLogo src={Logo} alt="Logo Kasa" /> */}
            <FooterCopyright>© 2020 Kasa. All rights reserved</FooterCopyright>
        </ContainerFooter>
    );
}