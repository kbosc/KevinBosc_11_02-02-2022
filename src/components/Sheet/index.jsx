import React from 'react';
import styled from 'styled-components'
import colors from "../../utils/style/colors";
import Dropdown from '../DropDown';
import { ReactComponent as Star } from '../../assets/Star.svg';

const HousingHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 670px) {
    flex-direction: column;
}
    `
const HousingHeaderLeft = styled.div`
@media (max-width: 1024px) {
    width: 70%;
}
@media (max-width: 425px) {
    width: 100%;
}
    `
const HousingTitle = styled.h2`
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: 51px;
letter-spacing: 0em;
text-align: left;
color: ${colors.primary};
@media (max-width: 768px) {
font-size: 25px;
line-height: 30px;
}
@media (max-width: 425px) {
font-size: 18px;
line-height: 26px;
}
    `
const HousingLocation = styled.p`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
color: ${colors.primary};
@media (max-width: 768px) {
font-size: 18px;
line-height: 23px;
margin-top: 0.5rem;
}
@media (max-width: 425px) {
font-size: 14px;
line-height: 20px;
}
    `
const ContainerTags = styled.div`
ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li{
        height: 25px;
        // width: 115px;
        border-radius: 10px;
        background-color: ${colors.primary};
        color: white;
        text-align: center;
        margin-right: 10px;
        padding: 4px 2rem;
        white-space: nowrap;
        margin-top: 0.5rem;
        @media (max-width: 768px) {
            font-size: 13px;
            line-height: 13px;
        }
        @media (max-width: 425px) {
            font-size: 10px;
            line-height: 14px;
        }
    }
}
    `
const HousingHeaderRight = styled.div`
@media (max-width: 670px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
}
    `
const HousingHost = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
p {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
    color: ${colors.primary};
    margin-right: 10px;
    @media (max-width: 425px) {
        font-size: 12px;
        line-height: 17px;
    }
    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 19px;
    }
}


    `
const HousingHostImg = styled.img`
height: 64px;
width: 64px;
left: 1273px;
top: 567px;
border-radius: 50%;
@media (max-width: 425px) {
    height: 32px;
    width: 32px;
}
@media (max-width: 768px) {
    height: 50px;
    width: 50px;
}
    `
const HousingRating = styled.div`
text-align: right;
span {
    svg {
        @media (max-width: 425px) {
            height: 15px;
            width: 15px;
        }
        @media (max-width: 768px) {
            height: 20px;
            width: 20px;
        }
    }
}

    `
const HousingBottom = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 425px) {
    flex-direction: column;  
}
    `
const DropdownContainerLeft = styled.div`
width: 40%;
@media (max-width: 425px) {
    width: 100%;
}
`
const DropdownContainerRight = styled.div`
width: 40%;
@media (max-width: 425px) {
    width: 100%;
}
`

export default function Sheet({title, location, tags, host, ratings, equipments, descriptions}) {
    //   console.log(typeof ratings);
    //   console.log(arrayOfStars);
    //   console.log(parseInt(ratings));
    return (
        <aside>
            <HousingHeader>

                <HousingHeaderLeft>
                    <HousingTitle>{title}</HousingTitle>
                    <HousingLocation>{location}</HousingLocation>
                    <ContainerTags>
                        <ul>
                            {tags}
                        </ul>
                    </ContainerTags>
                </HousingHeaderLeft>

                <HousingHeaderRight>
                    <HousingHost>
                        <p>{host.name}</p>
                        <HousingHostImg src={host.picture} alt={"photo de " + host.name} />
                    </HousingHost>
                    <HousingRating> 
                        { function() { 
                            let arrayOfStars = []
                            for(let i = 0; i < 5; i++){
                                if(i < parseInt(ratings)) {
                                    arrayOfStars.push(<Star fill={colors.primary} stroke=""/> )                    
                                } else {
                                    arrayOfStars.push(<Star fill="#E3E3E3" stroke=""/> )
                                }
                            }
                            return arrayOfStars.map((star, index) => 
                            (<span key={`${star}-${index}`}>
                                {star} 
                            </span> 
                            ))   
                        }()}
                    </HousingRating>
                </HousingHeaderRight>

            </HousingHeader>

            <HousingBottom>

                <DropdownContainerLeft >
                        <Dropdown 
                            title="Description"
                            text={descriptions}
                        />
                </DropdownContainerLeft>

                <DropdownContainerRight >
                        <Dropdown 
                            title="Equipements"
                            text={equipments}
                        />
                </DropdownContainerRight>

            </HousingBottom>

        </aside>
    );
}
