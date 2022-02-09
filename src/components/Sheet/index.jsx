import React from 'react';
import styled from 'styled-components'
import colors from "../../utils/style/colors";
import Dropdown from '../DropDown';
import { ReactComponent as Star } from '../../assets/Star.svg';

const HousingHeader = styled.div`
margin: 2rem 5rem;
display: flex;
flex-direction: row;
justify-content: space-between;
    `
const HousingHeaderLeft = styled.div`
    
    `
const HousingTitle = styled.h2`
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: 51px;
letter-spacing: 0em;
text-align: left;
color: ${colors.primary}
    `
const HousingLocation = styled.p`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
color: ${colors.primary}
    `
const ContainerTags = styled.div`
ul{
    display: flex;
    flex-direction: row;
    li{
        height: 25px;
        width: 115px;
        border-radius: 10px;
        background-color: ${colors.primary};
        color: white;
        text-align: center;
        margin-right: 10px;
        padding-top: 4px;
    }
}
    `
const HousingHeaderRight = styled.div`
    
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
}


    `
const HousingHostImg = styled.img`
height: 64px;
width: 64px;
left: 1273px;
top: 567px;
border-radius: 50%;
 
    `
const HousingRating = styled.div`
text-align: right;
    `
const HousingBottom = styled.div`
margin: 2rem 5rem;
display: flex;
flex-direction: row;
justify-content: space-between;
    `
const DropdownContainerLeft = styled.div`
// div {
//     h3 {
//         height: 52px;
//         width: 582px;
//         left: 0px;
//         top: 0px;
//         border-radius: 10px;
//         img {
//             height: 26px;
//             width: 15px;
//             left: 29px;
//             top: 7px;
//             border-radius: 0px;

//         }
//     }
// }
width: 40%;
`
const DropdownContainerRight = styled.div`
width: 40%;

`

export default function Sheet({title, location, tags, host, ratings, equipments, descriptions}) {
    //   console.log(typeof ratings);
    //   console.log(arrayOfStars);
    //   console.log(parseInt(ratings));
    return (
        <div>
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

        </div>
    );
}
