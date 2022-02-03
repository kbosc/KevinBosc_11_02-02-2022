import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import DefaultPicture from '../../assets/BackgroundSmart.png'

// import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.production.min';
// import { Link, Outlet } from 'react-router-dom';
// import BackgroundCard from '../../assets/BackgroundSmart.png';


const CardWrapper = styled.div`
background-color: blue;
display: flex;
flex-wrap: wrap;
flex-direction: row;
text-align: center;
width: 340px;
height: 340px;
border-radius: 10px;
position: relative;
&:hover {
    cursor: pointer;
  }
`
const CardImg = styled.div`
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

// export default function Card(props) {
//     // const [cardData, setCardData] = ([])
//     // const [isDataLoading, setDataLoading] = useState(false)
//     // const [error, setError] = useState(null)

//     // useEffect(() => {
//     //     async function fetchCard() {
//     //         setDataLoading(true)
//     //         try{
//     //             const response = await fetch(`${datas}`)
//     //             const { cardData } = await response.json
//     //             setCardData(cardData)
//     //         }
//     //         catch(err) {
//     //             console.log(err);
//     //             setError(true)
//     //         }
//     //         finally {
//     //             setDataLoading(false)
//     //         }
//     //     }
//     //     fetchCard()
//     // }, [])
//     console.log(cardData);
//     return (
//         <div>
//             {/* {isDataLoading ? (
//                 <Loader />
//             ) : ( */}
//             <CardContainer>
//                 {/* <Link to="/housing/:id" style={linkStyle}> */}
//                     {cardData.map((housing, index) => (
//                 <CardGallery>
//                         <CardImg src={housing.pictures} alt="paysage brumeux de falaise" />
//                         <CardTitle>{housing.title}</CardTitle>

//                 </CardGallery>
//                     ))}
//                 {/* </Link> */}
//             </CardContainer>

//             {/* )} */}
//             {/* <Outlet /> */}
//         </div>
//     );
// }

export default function Card({ label, title, picture }) {
    return (
      <CardWrapper onClick={() => console.log("click card")}>
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