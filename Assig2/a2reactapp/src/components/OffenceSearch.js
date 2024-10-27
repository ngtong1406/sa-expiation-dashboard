import { useEffect, useState } from 'react';
import SuburbDropdown from "../components/SuburbDropdown";
import DescriptionSearch from './DescriptionSearchbox';

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
                <DescriptionSearch />
                <SuburbDropdown />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            {cameraList.length == 0 ? (
                <div className="text-center text-muted mt-4">
                    Nothing here yet. Try searching with a description or choosing one of the filters above.
                </div>
            ) : (
                <div className="table-responsive bg-white rounded border border-secondary-subtle shadow-sm mt-3 p-3">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Location ID</th>
                                <th>Type Code</th>
                                <th>Type Name</th>
                                <th>Suburb</th>
                                <th>Road Name</th>
                                <th>Road Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cameraList.map(camera => (
                                <tr key={[camera.locationId, camera.suburb]}>
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