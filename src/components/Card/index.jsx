import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import DefaultPicture from '../../assets/BackgroundSmart.png'

const CardWrapper = styled.div`
height: 340px;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
color: white;
display: flex;
justify-content: flex-start;
align-items: flex-end;
@media (max-width: 600px) {
  height: 255px;
}
&:hover {
  cursor: pointer;
  }
`
const CardTitle = styled.div`
text-align: left;
width: 60%;
margin: 1rem;
`

export default function Card({ label, title, cover }) {
    return (
      <CardWrapper style={{ 
        backgroundImage: `url(${cover})` 
      }}
      title={label}
      >
        <CardTitle >{title}</CardTitle>
      </CardWrapper>
    )
  }

  Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }
  
  Card.defaultProps = {
    label: 'lorem ipsum',
    title: 'lorem ipsum',
    cover: DefaultPicture,
  }