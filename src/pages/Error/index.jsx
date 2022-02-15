import styled from 'styled-components'
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";

const MainContent = styled.div`
margin: 2rem 5rem;
color: ${colors.primary};
display: flex;
flex-direction: column;
align-items: center;
`
const MainError = styled.div`
font-size: 288px;
font-style: normal;
font-weight: 700;
line-height: 411px;
letter-spacing: 0em;
text-align: center;
@media (max-width: 425px) {
    font-size: 96px;
    line-height: 137px;
}
`
const Maintext = styled.div`
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: 51px;
letter-spacing: 0em;
text-align: center;
@media (max-width: 425px) {
    font-size: 18px;
    line-height: 26px;
}
`
const LinkError = styled(Link)`
color: ${colors.primary};
text-decoration: underline;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
padding-top: 10rem;
@media (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
}
`

export default function Error(props) {
    return (
        <MainContent>
                <MainError>
                    404
                </MainError>
                <Maintext>
                    Oups! La page que vous demandez n'existe pas.
                </Maintext>
            <LinkError to="/" >Retourner sur la page d’accueil</LinkError>      
        </MainContent>
    );
}
