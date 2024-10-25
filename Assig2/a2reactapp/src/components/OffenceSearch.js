import { useState } from 'react';
import SuburbDropdown from "../components/SuburbDropdown";

function OffenceSearch() {
    const [cameraList, setList] = useState([]);

    function onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const suburb = formData.get('suburb');

        fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
            .then(response => { return response.json() })
            .then(data => setList(data))
            .catch(err => { console.log(err) });
    }

    return (
        <div id="offenceSearch">
            <form method="post" action="/Dashboard" onSubmit={onSubmit} className="d-flex justify-content-center align-items-center">
                <SuburbDropdown />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

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
                            <tr>
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
        </div>
    );
}

export default OffenceSearch;