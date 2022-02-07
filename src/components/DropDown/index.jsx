import React from 'react';
import styled from 'styled-components'
import Chevron from "../../assets/chevron.svg"
import colors from "../../utils/style/colors";
import { useState } from 'react';
import PropTypes from 'prop-types'

const DropdownContainer = styled.div`
width: 80%;
margin: 2rem auto;
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
& img {
} 
`
const DropdownImg = styled.img`
-webkit-transform: rotate(-180deg);
-moz-transform: rotate(-180deg);
-ms-transform: rotate(-180deg);
-o-transform: rotate(-180deg);
transform: rotate(-180deg);
`
const DropdownText = styled.div`
    padding: 2rem;
    margin-top: 0px;
    overflow: hidden;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
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

    return (
        <div>
            <DropdownContainer >

                <DropdownTitle onClick={() => setIsOpen(!isOpen)} >
                {title}
                    {isOpen? (
                        <img src={Chevron} alt="Chevron"/>
                    ) : (
                        <DropdownImg src={Chevron} alt="Chevron" />
                    )}
                </DropdownTitle>
                {isOpen && (
                <DropdownText className='textContent'>
                    {text}
                </DropdownText>
                )}
      </DropdownContainer>
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }
  
  Dropdown.defaultProps = {
      title: 'Titre',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  }