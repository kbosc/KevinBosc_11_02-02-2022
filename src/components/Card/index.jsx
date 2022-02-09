import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import DefaultPicture from '../../assets/BackgroundSmart.png'

// import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.production.min';
// import { Link, Outlet } from 'react-router-dom';
// import BackgroundCard from '../../assets/BackgroundSmart.png';


const CardWrapper = styled.div`
position: relative;
width: 340px;
&:hover {
    cursor: pointer;
  }
`
const CardImg = styled.img`
border-radius: 10px;
width: 340px;
height: 340px;
object-fit: cover;
`
const CardTitle = styled.div`
position: absolute;
bottom: 20px;
left: 20px;
color: white
`
// const linkStyle = {  
//     color: "green",
//     textDecoration: "none",
//     width: "340px",
//     height: "340px",
//   };

export default function Card({ label, title, picture }) {
    return (
      <CardWrapper>
        <CardImg src={picture} alt={label} />
        <CardTitle >{title}</CardTitle>
      </CardWrapper>
    )
  }

  Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }
  
  Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
  }