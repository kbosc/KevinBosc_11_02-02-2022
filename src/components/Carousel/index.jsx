import React from 'react';
import colors from "../../utils/style/colors";
import styled from 'styled-components'


const Carrousel = styled.div`
// background-color: ${colors.primary};
border-radius: 25px;
margin: 2rem 5rem;
max-width: 100%;
height: 415px;
`
const CarrouselPicture = styled.img`
max-width: 100%;
height: 415px;
object-fit: cover;
`
export default function Carousel(cover, pictures) {
    console.log(cover.pictures[0]);
    return (
        <div>
            <Carrousel>
                <CarrouselPicture src={cover.pictures[0]} alt="" />
            </Carrousel>
            
        </div>
    );
}
