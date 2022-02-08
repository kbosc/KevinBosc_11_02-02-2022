import { useParams } from "react-router-dom";
import { useFetch } from '../../utils/hooks'
import Sheet from "../Sheet";

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
    console.log(data);
    if(isLoading) {
        return <div>Attente du chargement</div>
    } 
    return (
        <div>
            <div>
                Carroussel
            </div>
            {data.map((datas, index) => 
                (datas.id === housingId.id && <Sheet
                    key={`${datas.title}-${index}`}
                    title={datas.title}
                    cover={datas.cover}
                    description={datas.description}
                />         
                ))}
        </div>
    )      
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export default function Housing(props) {
//     const housingId = useParams()
//     // console.log(housingId.id);
//     // const housingIdString = JSON.stringify(housingId.id)
//     // console.log(housingIdString);

//     const { data, isLoading, error } = useFetch(
//         `http://localhost:3000/data.json`
//     )
//     if (error) {
//         return <span>Oups, il y a une erreur</span>
//     }    
//     console.log(data);   
//     return (
//         <div>
//             {isLoading ? (
//                 <div>Attente du chargement</div>
//                 ) : (
//                     <div>

//                         <div>
//                             Carroussel
//                         </div>
//                         {data.map((datas, index) => {
//                             (datas.id === housingId.id && <Sheet
//                             key={`${datas.title}-${index}`}
//                             title={datas.title}
//                             cover={datas.cover}
//                             description={datas.description}
//                             />         
//                             )})}
//                     </div>
// 			)})
//         </div>
//     )
// }

// data.map((datas, index) => {
//     if(datas.id === housingId.id)
//     return <Sheet
//     key={`${datas.title}-${index}`}
//     title={datas.title}
//     cover={datas.cover}
//     description={datas.description}
//     />         
// })
