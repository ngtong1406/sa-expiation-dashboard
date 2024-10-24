import { useEffect, useState } from 'react';

function Dashboard() {
    const [suburbList, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5147/api/Get_ListCameraSuburbs")
            .then(response => { return response.json() })
            .then(data => setList(data))
            .catch(err => { console.log(err) });
    }, []);

    return (
        <div className="container mt-4 mb-4">
            <div className="d-flex justify-content-center align-items-center">
                <select id="suburbList" className="form-control border border-secondary-subtle shadow-sm" style={{ width: "25%" }}>
                    <option value="" selected>All Suburbs...</option>
                    {suburbList.map(suburb => (
                        <option value={suburb}>{suburb}</option>
                    ))};
                </select>
            </div>
        </div>
    );
}

export default Dashboard;