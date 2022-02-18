import React, { useState } from "react";
import colors from "../../utils/style/colors";
import styled from 'styled-components';
import { ReactComponent as ChevronLeft } from '../../assets/chevron.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron.svg';




const Carrousel = styled.section`
    position: relative;
    height: 415px;
    margin-bottom: 2rem;
    div {
        height: 415px;
        // permet le click des dropdowns
        pointer-events: none;
    }
    .chevron-hover {
        fill: white;
        cursor: pointer;
        position: absolute;
        top: 45%;
        width: 46px;
        height: 80px;
        @media (max-width: 425px) {
            height: 25px;
            width: 15px;
        }
        & :hover {
            fill: ${colors.primary};
            transition: all 300ms ease;
        }
    }
    @media (max-width: 425px) {
        height: 255px;  
    }
`
const CarrouselImg = styled.img`
    position: absolute;
    top: 0px;
    width: 100%;
    border-radius: 25px;
    height: 100%;
    object-fit: cover;
    
`;
const CarrouselCounter = styled.span`
position: absolute;
left: 50%;
bottom: 25px;
transform: translate(-50%, -50%);
color: white;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
@media (max-width: 425px) {
    opacity: 0;
}
`;
const styledChevronLeft = {
    transform: "rotate(90deg)",
    left: "20px",
}
const styledChevronRight = {
    right: "20px",
    transform: "rotate(270deg)",
}

export default function Carousel({pictures}) {

    const [current, setCurrent] = useState(0);
    const length = pictures.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Carrousel>
            {pictures.map((slide, index) => {
                return (
                    <div key={index}>
                    {index === current && (
                        <CarrouselImg key={index} src={slide} alt="" />
                        )}
                    </div>
                );
            })}
            <CarrouselCounter>{current + 1}/{length}</CarrouselCounter>
            {length > 1 && <ChevronLeft className="chevron-hover" style={styledChevronLeft} onClick={prevSlide} />}
            {length > 1 && <ChevronRight className="chevron-hover" style={styledChevronRight} onClick={nextSlide}/>}
        </Carrousel>
    );
}