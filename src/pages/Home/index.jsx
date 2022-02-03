import  HomeImg  from "../../assets/HomeImg.png"
import styled from 'styled-components'
import Card from "../../components/Card"
// import { useFetch } from '../../utils/hooks'

// import { datas } from '../../utils/datas/data.json'
// import { Link } from "react-router-dom";
// import colors from "../../utils/style/colors";


const BannerContainer = styled.div`
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
    font-size: 48px
`

const CardContainer = styled.div`
margin: 2rem 5rem;
`

export default function Home(props) {
    console.log(cardData);
    console.log(cardData[0].pictures[0]);
//     const { data, isLoading, error } = useFetch(
//         `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
//       )
//       const dataCard = data?.dataCard

//   if (error) {
//     return <span>Oups il y a eu un problème</span>
//   }
//   console.log(dataCard);
    return (
        <div>
            <BannerContainer>
            <BannerImg src={HomeImg} alt="paysage brumeux de falaise" />
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
            </BannerContainer>
    
            <CardContainer>
            {cardData.map((data, index) => (
            <Card
              key={`${data.title}-${index}`}
              label={data.description}
              title={data.title}
              picture={data.pictures[0]}
            />
          ))}
            </CardContainer>
        </div>
    );
}


const cardData = [
	{
		"id": "c67ab8a7",
		"title": "Appartement cosy",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		],
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 17e",
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		"tags": [
			"Batignolle",
			"Montmartre"
		]
	},
	{
		"id": "b9123946",
		"title": "Magnifique appartement proche Canal Saint Martin",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
		],
		"description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
		"host": {
			"name": "Della Case",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 10e",
		"equipments": [
			"Parking",
			"Sèche Cheveux",
			"Machine à laver",
			"Wi-fi",
			"Cuisine équipée",
			"Télévision"
		],
		"tags": [
			"Canal Saint Martin",
			"République",
			"Appartement"
		]
	},
	{
		"id": "46d188c5",
		"title": "Studio de charme - Buttes Chaumont",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg"
		],
		"description": "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
		"host": {
			"name": "Franck Maher",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Paris 20e",
		"equipments": [
			"Wi-fi",
			"Cuisine équipée",
			"Télévision",
			"Sèche Cheveux"
		],
		"tags": [
			"Buttes Chaumont",
			"Laumière",
			"Studio"
		]
	}
]