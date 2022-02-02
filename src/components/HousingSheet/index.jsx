import { useParams } from "react-router-dom";

export default function HousingSheet(props) {
    const params = useParams()
    console.log(params);
    return (
        <div>
            <h1>Housing</h1>
        </div>
    );
}

