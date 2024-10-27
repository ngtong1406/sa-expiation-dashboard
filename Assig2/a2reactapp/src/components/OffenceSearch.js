import { useEffect, useState } from 'react';
import SuburbDropdown from "../components/SuburbDropdown";

function OffenceSearch() {
    const [cameraList, setList] = useState([]);
    const [suburb, setSuburb] = useState('');

    useEffect(() => {
        if (suburb != "" || suburb != null) {
            fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return []
                    }
                })
                .then(data => setList(data))
                .catch(err => { console.log(err) });
        }
    }, [suburb]);

    function onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        let suburb = formData.get('suburb');
        setSuburb(suburb);
    }

    return (
        <div id="offenceSearch">
            <form method="post" action="/Dashboard" onSubmit={onSubmit} className="d-flex justify-content-center align-items-center gap-3">
                <SuburbDropdown />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            {cameraList.length == 0 ? (
                <h1>Nothing just yet.</h1>
            ) : (
                <div className="table-responsive mt-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Location ID</th>
                                <th>Camera Type Code</th>
                                <th>Camera Type Name</th>
                                <th>Suburb</th>
                                <th>Road Name</th>
                                <th>Road Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cameraList.map(camera => (
                                    <tr key={camera.locationId}>
                                    <td>{camera.locationId}</td>
                                    <td>{camera.cameraTypeCode}</td>
                                    <td>{camera.cameraType1}</td>
                                    <td>{camera.suburb}</td>
                                    <td>{camera.roadName}</td>
                                    <td>{camera.roadType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default OffenceSearch;