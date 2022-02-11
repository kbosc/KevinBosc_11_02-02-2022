import { useParams, Navigate } from "react-router-dom";
import { useFetch } from '../../utils/hooks'
import Carousel from "../Carousel";
import Sheet from "../Sheet";

export default function Housing(props) {
    const housingId = useParams()
    if (!housingId) {
        // navigate('/*');
        <Navigate to="/*" replace={true} />
      }
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
            {data.map((datas, index) => 
                (datas.id === housingId.id &&
                    <div
                    key={`${datas.title}-${index}`}>
                        <Carousel 
                        cover={datas.cover}
                        pictures={datas.pictures}
                        />
                        <Sheet
                            title={datas.title}
                            location={datas.location}
                            host={datas.host}
                            tags={datas.tags.map(tag => <li key={`${tag}-${index}`}>{tag}</li>)}
                            ratings={datas.rating}
                            descriptions={datas.description}
                            equipments={datas.equipments.map(equipment => <li key={`${equipment}-${index}`}>{equipment}</li>)}
                        />         
                    </div>
                ))}
        </div>
    )      
}
