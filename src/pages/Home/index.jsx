import { useFetch } from '../../utils/hooks'
import { Link } from "react-router-dom";
import  HomeImg  from "../../assets/HomeImg.png"
import styled from 'styled-components'
import Card from "../../components/Card"
import Hero from "../../components/Hero"
import colors from "../../utils/style/colors";

const Main = styled.main`
text-align: center;
color: white;
padding: 2rem 5rem;
@media (max-width: 768px) {
  padding: 1rem 2rem;
  }
`
const CardContainer = styled.div`
background-color: ${colors.secondary};
border-radius: 25px;
padding: 50px 50px;
max-width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
grid-gap: 3rem;
justify-items: center;
@media (max-width: 425px) {
  background-color: white;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
}
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
    return (
        <Main>
          <Hero
          background={HomeImg}
          text={["Chez vous,", "partout et ailleurs"].map (
            (el, index) => <p key={index}>{el}</p>
          )}
           />
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