import styled from 'styled-components'
import AboutImg from "../../assets/AboutImg.png"
import Dropdown from "../../components/DropDown";
import Hero from "../../components/Hero"

const Main = styled.main`
padding: 2rem 5rem;
@media (max-width: 768px) {
    padding: 1rem 2rem;
}
`
const DropdownContainer = styled.div`
width: 80%;
margin: 0 auto;
@media (max-width: 768px) {
    width: 100%;
}
`
export default function About(props) {
    
    return (
        <Main>
            <Hero
          background={AboutImg}
           />
            <DropdownContainer >
                {dataAbout.map((content, index) => (
                    <Dropdown 
                        key={`${content.title}-${index}`}
                        title={content.title}
                        text={content.text}
                    />
                ))}        
            </DropdownContainer>
        </Main>
    );
}

Dropdown.defaultProps = {
    title: 'lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',

  }

const dataAbout = [
    {
        title : "Fiabilité",
        text : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title : "Respect",
        text : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title : "Service",
        text : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title : "Sécurité",
        text : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]