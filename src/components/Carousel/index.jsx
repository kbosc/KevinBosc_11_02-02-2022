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
    height: 415px;
    overflow: hidden;
    .chevron-hover {
        fill: white;
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: 46px;
        height: 80px;
        & :hover {
            fill: ${colors.primary};
            transition: all 300ms ease;
        }
    }
`
const CarrouselImg = styled.img`
    max-height: 100%;
    box-sizing: content-box;
    width: 100%;
    flex: none;
    object-fit: cover;
    border-radius: 25px;
    // transform: scale(-30);
    // opacity: 0.5;
    // transition: all 1500ms ease;
`;
const CarrouselCounter = styled.span`
position: absolute;
left: 50%;
bottom: 25px;
transform: translate(-50%, -50%);
margin: 0 auto;
color: white;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: center;

`;
const styledChevronLeft = {
    transform: "rotate(90deg)",
    left: "20px",
}
const styledChevronRight = {

    right: "20px",
    transform: "rotate(270deg)",
   }

export default function Carousel(cover) {
    const [current, setCurrent] = useState(0);
    const length = cover.pictures.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Carrousel>
            <ChevronLeft className="chevron-hover" style={styledChevronLeft} onClick={prevSlide} />
            <ChevronRight className="chevron-hover" style={styledChevronRight} onClick={nextSlide}/>
            <CarrouselCounter>{current + 1}/{length}</CarrouselCounter>
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
// return (
//     <Carrousel>
//         {length === 0 ? (
//             <CarrouselCounter>{current + 1}/{length + 1}</CarrouselCounter>
//             {cover.pictures.map((slide, index) => {
//                 return (
//                     <div key={index}>
//                     {index === current && (
//                         <CarrouselImg src={slide} alt="" />
//                         )}
//                     </div>
//                 );
//             })}

//         ) : (
                
//         <ChevronLeft className="chevron-hover" style={styledChevronLeft} onClick={prevSlide} />
//         <ChevronRight className="chevron-hover" style={styledChevronRight} onClick={nextSlide}/>
//         <CarrouselCounter>{current + 1}/{length + 1}</CarrouselCounter>
//         {cover.pictures.map((slide, index) => {
//             return (
//                 <div key={index}>
//                 {index === current && (
//                     <CarrouselImg src={slide} alt="" />
//                     )}
//                 </div>
//             );
//         })}
//         )}
//     </Carrousel>
// );