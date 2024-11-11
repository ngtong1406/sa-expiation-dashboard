import OffenceSearch from "../components/OffenceSearch";
import { useParams } from 'react-router-dom'

function Dashboard() {
    let params = useParams();
    let suburb = params.suburb;

    return (
        <div className="container mt-4 mb-4">
            <OffenceSearch suburb={suburb} />
        </div>
    );
}

export default Dashboard;