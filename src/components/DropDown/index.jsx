import React from 'react';
import styled from 'styled-components'
import colors from "../../utils/style/colors";
import { useState } from 'react';
import { ReactComponent as Chevron } from '../../assets/chevron.svg';

const DropdownContainer = styled.div`
margin: 2rem 0;
@media (max-width: 425px) {
    margin: 1rem 0;
}
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
@media (max-width: 425px) {
    font-size: 13px;
    line-height: 19px;
}
.chevronStyliser {
    @media (max-width: 425px) {
        height: 15px;
        width: 8px;
    }
} 
`

const DropdownText = styled.div`
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
    @media (max-width: 425px) {
        font-size: 12px;
        line-height: 17px;
        padding: 1rem;
    } 
`
export default function Dropdown({title, text}) {
    const [isOpen, setIsOpen] = useState(false)
    const styledChevron = {
        transform: isOpen ? 'rotate(180deg)' : '', 
        transition: 'transform 300ms ease',
        fill: "white",
        top: "10px",
       }
    
    return (
        <div>
            <DropdownContainer >
                <DropdownTitle onClick={() => setIsOpen(!isOpen)} >
                {title}
                    {isOpen? (
                        <Chevron className="chevronStyliser" style={styledChevron}/>
                        ) : (
                        <Chevron className="chevronStyliser" style={styledChevron} />
                    )}
                </DropdownTitle>
                {isOpen && (
                <DropdownText>
                    {text}
                </DropdownText>
                )}
      </DropdownContainer>
        </div>
    );
}

  Dropdown.defaultProps = {
      title: 'Titre',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  }