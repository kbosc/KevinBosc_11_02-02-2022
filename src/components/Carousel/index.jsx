import React, { useState } from "react";
import colors from "../../utils/style/colors";
import styled from 'styled-components';

import { ReactComponent as ChevronLeft } from '../../assets/chevron.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron.svg';


// const CarrouselPicture = styled.img`
// // max-width: 100%;
// // height: 415px;
// // object-fit: cover;
// border-radius: 25px;

// flex: none;
// object-fit: cover;
// height: 100%;
// width: 100%;
// transform: translateX(0px);
// transition-property: all;
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// transition-duration: 150ms;
// transition-duration: 500ms;
// `

const Carrousel = styled.section`
    position: relative;
    max-width: 100%;
    margin: 2rem 5rem;
    max-height: 415px;
    overflow: hidden;
`
const CarrouselImg = styled.img`
    max-height: 100%;
    box-sizing: content-box;
    width: 100%;
    flex: none;
    object-fit: cover;
    border-radius: 25px;

    //   object-fit: cover;
`;

const CarrouselCounter = styled.span`
    position: absolute;
    background-color: yellow;
    right: 50%;
`;

const styledChevronLeft = {
    transition: 'all 300ms ease',
    fill: colors.primary,
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "rotate(90deg)",
    width: "46px",
    height: "80px"
}

const styledChevronRight = {
    transition: 'all 300ms ease',
    fill: colors.primary,
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: "20px",
    transform: "rotate(270deg)",
    width: "46px",
    height: "80px"
   }
export default function Carousel(cover) {
    // console.log(cover.pictures);
    // console.log(pictures);
    const [current, setCurrent] = useState(0);
    const length = cover.pictures.length;
    console.log(length + 1);
    console.log(current + 1)
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Carrousel>
            <ChevronLeft style={styledChevronLeft} onClick={prevSlide} />
            <ChevronRight style={styledChevronRight} onClick={nextSlide}/>
            {/* <ChevronLeft fill={colors.primary} stroke="red" cursor="pointer" transform="rotate(90deg)" onClick={prevSlide} /> */}
            {/* <ChevronRight fill={colors.primary} stroke="red" cursor="pointer" onClick={nextSlide} /> */}
            <CarrouselCounter>{current + 1}/{length + 1}</CarrouselCounter>
            {cover.pictures.map((slide, index) => {
                return (
                    <div key={index}>
                    {index === current && (
                        <CarrouselImg src={slide} alt="" />
                        )}
                    </div>
                );
            })}
        </Carrousel>
    );
}
// {/* <ChevronLeft img={Chevron} alt="chevron pour changer d'image" onClick={prevSlide} />
// <ChevronRight img={Chevron} alt="chevron pour changer d'image" onClick={nextSlide} /> */}