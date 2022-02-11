import React from 'react';
import styled from 'styled-components'
// import Chevron from "../../assets/chevron.svg"
import colors from "../../utils/style/colors";
import { useState } from 'react';
import { ReactComponent as Chevron } from '../../assets/chevron.svg';

const DropdownContainer = styled.div`
margin: 2rem 0;
-webkit-transition: all 500ms ease;
-moz-transition: all 500ms ease;
-ms-transition: all 500ms ease;
-o-transition: all 500ms ease;
transition: all 500ms ease;
`
const DropdownTitle = styled.h3`
cursor: pointer;
display: flex;
justify-content: space-between;
padding: 0 2rem;
background-color: ${colors.primary};
color: white;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
border-radius: 5px;
align-items: center;
`
// const DropdownImg = styled.img`
// -webkit-transform: rotate(-180deg);
// -moz-transform: rotate(-180deg);
// -ms-transform: rotate(-180deg);
// -o-transform: rotate(-180deg);
// transform: rotate(-180deg);
// `
const DropdownText = styled.div`
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    padding: 2rem;
    margin-top: 0px;
    overflow: hidden;
    background: ${colors.secondary};
    color: ${colors.primary};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    border-radius: 0 0 5px 5px;
`
export default function Dropdown({title, text}) {
    const [isOpen, setIsOpen] = useState(false)
    const styledChevron = {
        transform: isOpen ? 'rotate(180deg)' : '', 
        transition: 'transform 300ms ease',
        fill: "white",
        top: "10px",
       }
    const smoothTransition = {
        // fontSize: !isOpen ? "24px" : "0px", 
        // height: !isOpen ? "max-content" : "0px", 
        transition: "all 1500ms ease",
        padding: "2rem",
        marginTop: "0px",
        overflow: "hidden",
        background: Object.values(colors.secondary),
        color: Object.values(colors.primary),
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "34px",
        letterSpacing: "0em",
        textAlign: "left",
        borderRadius: "0 0 5px 5px",
    }
    
    return (
        <div>
            <DropdownContainer >
                <DropdownTitle onClick={() => setIsOpen(!isOpen)} >
                {title}
                    {isOpen? (
                        // <img src={Chevron} alt="Chevron"/>
                        <Chevron style={styledChevron}/>
                        ) : (
                        <Chevron style={styledChevron} />
                        // <DropdownImg src={Chevron} alt="Chevron" />
                    )}
                </DropdownTitle>
                {isOpen && (
                <DropdownText style={smoothTransition}>
                    {text}
                </DropdownText>
                )}
      </DropdownContainer>
        </div>
    );
}

// Dropdown.propTypes = {
//     title: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   }
  
  Dropdown.defaultProps = {
      title: 'Titre',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  }