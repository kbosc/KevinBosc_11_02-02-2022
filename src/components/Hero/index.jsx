import React from 'react';
import styled from 'styled-components'
import  HomeImg  from "../../assets/HomeImg.png"

const HeroHeader = styled.div`
width: 100%;
background-size: cover;
background-repeat: no-repeat;
height: 223px;
border-radius: 25px;
margin-bottom: 2rem;
div {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
      justify-content: flex-start
    }
}
@media (max-width: 600px) {
  height: 111px;
}
`
const BannerTitle = styled.h1`
font-weight: 500;
font-size: 48px;
Line height: 68px;
text-align: left;
@media (max-width: 900px) {
  font-size: 32px;
  line-height: 29px;
  letter-spacing: 0em;
  padding-left: 2rem;
}
@media (max-width: 500px) {
  font-size: 24px;
  line-height: 24px;
}
p {
display: inline-block;
@media (max-width: 768px) {
    display: block;
}
}
`
const backgroundLinearGradient = {
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
    width: "100%",
    height: "100%",
    borderRadius: "25px",
   }

   export default function Hero({background, text}) {
    return (
        <HeroHeader style={{ 
            backgroundImage: `url(${background})` 
          }}>
            <div style={backgroundLinearGradient}>    
                <BannerTitle>{text}</BannerTitle>
            </div>
        </HeroHeader>
    );
}

Hero.defaultProps = {
    background: HomeImg,
    text: "",
  }