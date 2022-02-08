import  HomeImg  from "../../assets/HomeImg.png"
import styled from 'styled-components'
import Card from "../../components/Card"
import { useFetch } from '../../utils/hooks'
// import { datas } from '../../utils/datas/data.json'
import { Link, useParams } from "react-router-dom";
import colors from "../../utils/style/colors";


const HeroHeader = styled.div`
    position: relative;
    text-align: center;
    color: white;
    margin: 2rem 5rem;
    `
    
    const BannerImg = styled.img`
    border-radius: 25px;
    filter: brightness(50%);
    object-fit: cover;
    width: 100%;
    height: 223px;
`

const BannerTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-size: 48px;
`

const CardContainer = styled.div`
background-color: ${colors.secondary};
border-radius: 25px;
margin: 2rem 5rem;
padding: 50px 50px;
max-width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
grid-gap: 10px;
justify-content: center;
`

export default function Home(props) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/data.json`
      )
  if (error) {
    return <span>Oups, il y a une erreur</span>
  }
  // console.log(data);
    return (
        <div>
            <HeroHeader>
            <BannerImg src={HomeImg} alt="paysage brumeux de falaise" />
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
            </HeroHeader>
			{isLoading ? (
				<div>Attente du chargement</div>
			) : (
            <CardContainer>
            {data.map((data, index) => (
              <Link to={`/housing/${data.id}`} key={`${data.id}-${index}`}>
            <Card
              key={`${data.title}-${index}`}
              label={data.description}
              title={data.title}
              picture={data.pictures[0]}
              />
              </Link>
          ))}
            </CardContainer>
			)}
        </div>
    );
}
				// <Link key={e.id} to={/accomodations/${e.id}}>
				// </Link>