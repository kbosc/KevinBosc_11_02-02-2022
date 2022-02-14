import  HomeImg  from "../../assets/HomeImg.png"
import styled from 'styled-components'
import Card from "../../components/Card"
import { useFetch } from '../../utils/hooks'
// import { datas } from '../../utils/datas/data.json'
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";



const Main = styled.main`
text-align: center;
color: white;
padding: 2rem 5rem;
@media (max-width: 768px) {
  padding: 1rem 2rem;
  }
`
const HeroHeader = styled.div`
width: 100%;
background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${HomeImg});
background-size: cover;
background-repeat: no-repeat;
height: 223px;
border-radius: 25px;
margin-bottom: 2rem;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 900px) {
  justify-content: flex-start
}
@media (max-width: 600px) {
  height: 111px;
}
`
const BannerTitle = styled.h1`
font-weight: 500;
font-size: 48px;
Line height: 68px;
text-align: left;
@media (max-width: 900px) {
  font-size: 32px;
  line-height: 29px;
  letter-spacing: 0em;
  padding-left: 2rem;
}
@media (max-width: 500px) {
  font-size: 24px;
  line-height: 24px;
}
span {
  @media (max-width: 1410px) {
    display: block;
  }
}
`

const CardContainer = styled.div`
background-color: ${colors.secondary};
border-radius: 25px;
padding: 50px 50px;
max-width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
// grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
// grid-gap: 10px;
grid-gap: 3rem;
justify-items: center;
@media (max-width: 850px) {
  padding: 0;
}
a {
  text-decoration: none;
  width: 100%;
}
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
        <Main>
            <HeroHeader>
            {/* <BannerImg src={HomeImg} alt="paysage brumeux de falaise" /> */}
            <BannerTitle>Chez vous, <span>partout et ailleurs</span> </BannerTitle>
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
              cover={data.cover}
              />
              </Link>
          ))}
            </CardContainer>
			)}
        </Main>
    );
}