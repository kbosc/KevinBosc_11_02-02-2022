import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import DefaultPicture from '../../assets/BackgroundSmart.png'

// import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.production.min';
// import { Link, Outlet } from 'react-router-dom';
// import BackgroundCard from '../../assets/BackgroundSmart.png';


const CardWrapper = styled.div`
// width: 340px;
height: 340px;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
color: white;
display: flex;
justify-content: flex-start;
align-items: flex-end;
@media (max-width: 950px) {
  // width: 630px;
}
@media (max-width: 600px) {
  height: 250pxpx;
  
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
        {/* <CardImg src={cover} alt={label} /> */}
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