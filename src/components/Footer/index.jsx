import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const ContainerFooter = styled.footer`
height: 209px;
background-color: black;
color: white;
margin: 0 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
@media (max-width: 768px) {
    margin: 0 2rem;
}
`
const FooterCopyright = styled.div`
white-space: nowrap;
@media (max-width: 450px) {
    margin: 0 2rem;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0em;
}
`
export default function Footer(props) {
    return (
        <ContainerFooter>
            <Logo width="122px" fill='white' stroke='white'/>
            <FooterCopyright>© 2020 Kasa. All rights reserved</FooterCopyright>
        </ContainerFooter>
    );
}