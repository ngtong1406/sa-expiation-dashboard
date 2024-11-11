import { useState } from 'react';
import { Link } from 'react-router-dom';

import DescriptionSearch from './DescriptionSearchbox';
import ExpiationDatePicker from './ExpiationDatePicker';
import TypeCodeRadio from './TypeCodeRadio';
import ListCameraDropdown from './ListCameraDropdown';

function OffenceSearch({ suburb }) {

    const [expiationList, setList] = useState([]);
    const [offenceCodeList, setCodeList] = useState([]);

    // Code from: Ashik N. (2023)
    // Source link: https://nesin.io/blog/javascript-date-to-unix-timestamp
    function convertDateToUnixTime(dateTime, isEndDate = false) {
        if (!dateTime) {
            return (isEndDate ? 2147483647 : 0)
        }

        const currentDate = new Date(dateTime);

        return Math.floor(currentDate.getTime() / 1000);
    }

    // This function accepts a list of offence codes as parameters and returns a string of URL-based list of those codes.
    function offenceListToParameters(offenceList) {
        let finalString = "";

        if (offenceList.length <= 0) {
            return finalString;
        }

        offenceList.forEach((offenceCode) => {
            finalString += (finalString.length > 0 ? "&" : "") + `offenceCodes=${offenceCode}`
        });

        return finalString;
    }

    function onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        let description = formData.get('descriptionSearch');
        console.log(description);
        fetch(`http://localhost:5147/api/Get_SearchOffencesByDescription?searchTerm=${description}&offenceCodesOnly=true`)
            .then(response => { return response.json() })
            .then(data => setCodeList(data))
            .catch(err => { console.log("Could not retrieve the offence data: " + err) });

        let locationId = formData.get('locationId');
        console.log(locationId);

        let startDate = convertDateToUnixTime(formData.get('startDate'));
        console.log(startDate);

        let endDate = convertDateToUnixTime(formData.get('endDate'), true);
        console.log(endDate);

        let cameraType = formData.get('typeCode');
        console.log(cameraType);

        fetch(`http://localhost:5147/api/Get_ExpiationsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraType}&startTime=${startDate}&endTime=${endDate}`)
            .then(response => { return response.json() })
            .then(data => { setList(data); console.log(data) })
            .catch(err => "Could not retrieve the expiation data: " + err);
    }

    return (
        <div id="offenceSearch">
            <form method="post" action={"/Dashboard/" + suburb} onSubmit={onSubmit}>
                <div className="text-center fw-bold fs-4">Advanced Search</div>
                <div className="text-center text-muted fs-6">
                    Please note that a field with <span className="text-danger fw-bold">*</span> indicates a required input.
                </div>
                <div className="text-center text-muted fs-6">Continue your search by providing some searching criteria as below.</div>
                <div className="d-flex justify-content-between text-muted mt-4 fw-bold fs-5">
                    Find an MPDC location via...
                    <div>
                        <span>Current suburb: </span>
                        <span className="text-decoration-underline">{suburb}</span>
                    </div>
                </div>
                <hr />

                <div className="row row-cols-2">
                    <div className="col-4 mb-3">
                        searching for an offence description:
                    </div>
                    <div className="col-8 mb-3">
                        <DescriptionSearch />
                    </div>

                    <div className="col-4 mb-3">
                        providing a specific camera location (<span className="text-danger fw-bold">*</span>):
                    </div>
                    <div className="col-8 mb-3">
                        <ListCameraDropdown suburb={suburb} />
                    </div>

                    <div className="col-4 mb-3">
                        providing a date range:
                    </div>
                    <div className="col-8 mb-3">
                        <ExpiationDatePicker />
                    </div>

                    <div className="col-4 mb-3">
                        providing a camera type code (<span className="text-danger fw-bold">*</span>):
                    </div>
                    <div className="col-8 mb-3">
                        <TypeCodeRadio />
                    </div>
                </div>

                <div className="d-flex justify-content-between align-middle">
                    <Link to="/Main" className="btn btn-dark">Change Suburb</Link>
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>

            {/**/}{/*
            */}{/*The code below is just an example table that serves testing purposes and is meant to show what the */}{/*
            */}{/*final table will look like and how it will behave in Part B when the searching filters are fully functional.*/}{/*
            */}{/**/}
            {/*{cameraList.length == 0 ? (*/}
            {/*    <div className="text-center text-muted mt-4">*/}
            {/*        Nothing here yet. Try searching with a description or choosing one of the filters above.*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <div className="table-responsive bg-white rounded border border-secondary-subtle shadow-sm mt-3 p-3">*/}
            {/*        <table className="table table-hover table-striped">*/}
            {/*            <thead>*/}
            {/*                <tr>*/}
            {/*                    <th>Location ID</th>*/}
            {/*                    <th>Type Code</th>*/}
            {/*                    <th>Type Name</th>*/}
            {/*                    <th>Suburb</th>*/}
            {/*                    <th>Road Name</th>*/}
            {/*                    <th>Road Type</th>*/}
            {/*                </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*                {cameraList.map(camera => (*/}
            {/*                    <tr key={[camera.locationId, camera.suburb]}>*/}
            {/*                        <td>{camera.locationId}</td>*/}
            {/*                        <td>{camera.cameraTypeCode}</td>*/}
            {/*                        <td>{camera.cameraType1}</td>*/}
            {/*                        <td>{camera.suburb}</td>*/}
            {/*                        <td>{camera.roadName}</td>*/}
            {/*                        <td>{camera.roadType}</td>*/}
            {/*                    </tr>*/}
            {/*                ))}*/}
            {/*            </tbody>*/}
            {/*        </table>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}

export default OffenceSearch;