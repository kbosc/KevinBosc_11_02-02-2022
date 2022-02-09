import { useParams } from "react-router-dom";
import { useFetch } from '../../utils/hooks'
import Carousel from "../Carousel";
import Sheet from "../Sheet";
// import colors from "../../utils/style/colors";
// import styled from 'styled-components'


// const Carroussel = styled.div`
// background-color: ${colors.primary};
// border-radius: 25px;
// margin: 2rem 5rem;
// max-width: 100%;
// height: 415px;
// `
export default function Housing(props) {
    const housingId = useParams()
    // console.log(housingId.id);
    // const housingIdString = JSON.stringify(housingId.id)
    // console.log(housingIdString);
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/data.json`
    )
    if (error) {
        return <span>Oups, il y a une erreur</span>
    }    
    if(isLoading) {
        return <div>Attente du chargement</div>
    } 
    return (
        <div>
            {console.log(data)}
            
            {data.map((datas, index) => 
                (datas.id === housingId.id &&
                    <Carousel 
                    key={`${datas.cover}-${index}`}
                    pictures={datas.pictures}
                    />
            ))}
            {data.map((datas, index) => 
                (datas.id === housingId.id &&
                <Sheet
                    key={`${datas.title}-${index}`}
                    title={datas.title}
                    location={datas.location}
                    host={datas.host}
                    tags={datas.tags.map(tag => <li>{tag}</li>)}
                    ratings={datas.rating}
                    descriptions={datas.description}
                    equipments={datas.equipments.map(equipment => <li>{equipment}</li>)}
                />         
                ))}
        </div>
    )      
}
