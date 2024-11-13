import OffenceSearch from "../components/OffenceSearch";
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Dashboard() {
    let params = useParams();
    let suburb = params.suburb;

    const [suburbList, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5147/api/Get_ListCameraSuburbs')
            .then(response => { return response.json() })
            .then(data => setList(data))
            .catch(err => { console.log("An error occurred when attempting to retrieve suburb list: " + err) })
    }, [suburb])

    return (
        <div className="container mt-4 mb-4">
            {suburbList.some(s => s === suburb) ? <>
                <OffenceSearch suburb={suburb} />
            </> : <>
                <div className="text-center justify-content-center">
                    <div className="alert alert-danger text-center mt-4 mb-4">Sorry! Could not find any suburb provided. Please go back and select a suburb.</div>
                    <Link to="/Main" className="btn btn-dark text-center">Go back</Link>
                </div>
            </>}
        </div>
    );
}

export default Dashboard;