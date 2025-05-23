﻿import { useState } from 'react';
import { Link } from 'react-router-dom';

import DescriptionSearch from './filters/DescriptionSearchbox';
import ExpiationDatePicker from './filters/ExpiationDatePicker';
import TypeCodeRadio from './filters/TypeCodeRadio';
import ListCameraDropdown from './filters/ListCameraDropdown';
import ResultPanel from './ResultPanel';

function OffenceSearch({ suburb }) {

    const [expiationList, setList] = useState([]);
    const [expiationStats, setStats] = useState({});
    const [hasSubmitted, setSubmissionState] = useState(false);

    // Coding solution adapted from: Ashik N. (2023)
    // Reference link: https://nesin.io/blog/javascript-date-to-unix-timestamp
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

    function fetchExpiationList(description, locationId, startDate, endDate, cameraType) {
        // This is a chaining fetch call, which is an optimised version of the nested fetch requests from the old code.
        // The solution was found on StackOverFlow: https://stackoverflow.com/questions/40981040/using-a-fetch-inside-another-fetch-in-javascript
        fetch(`http://localhost:5147/api/Get_SearchOffencesByDescription?searchTerm=${description}&offenceCodesOnly=true`)
            .then(offenceResponse => { return offenceResponse.json() })
            .then(data => {
                let offenceUrl = (description.length > 0 ? offenceListToParameters(data) : "");

                return fetch(`http://localhost:5147/api/Get_ExpiationsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraType}&startTime=${startDate}&endTime=${endDate}&${offenceUrl}`);
            })
            .then(expResponse => { return expResponse.json() })
            .then(data => {
                setList(data);
            })
            .catch(err => { console.log("Could not retrieve expiation data: " + err) })
    }

    function fetchExpiationStats(description, locationId, startDate, endDate, cameraType) {
        fetch(`http://localhost:5147/api/Get_SearchOffencesByDescription?searchTerm=${description}&offenceCodesOnly=true`)
            .then(offenceResponse => { return offenceResponse.json() })
            .then(data => {
                let offenceUrl = (description.length > 0 ? offenceListToParameters(data) : "");

                return fetch(`http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=${locationId}&cameraTypeCode=${cameraType}&startTime=${startDate}&endTime=${endDate}&${offenceUrl}`);
            })
            .then(expResponse => { return expResponse.json() })
            .then(data => {
                setStats(data);
            })
            .catch(err => { console.log("Could not retrieve expiation stats: " + err) })
    }

    function onSubmit(e) {
        e.preventDefault();
        setSubmissionState(true);

        const form = e.target;
        const formData = new FormData(form);

        let resultType = formData.get('resultType');

        let description = formData.get('descriptionSearch');
        let locationId = formData.get('locationId');
        let startDate = convertDateToUnixTime(formData.get('startDate'));
        let endDate = convertDateToUnixTime(formData.get('endDate'), true);
        let cameraType = formData.get('typeCode');

        fetchExpiationList(description, locationId, startDate, endDate, cameraType);
        fetchExpiationStats(description, locationId, startDate, endDate, cameraType);

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

            {hasSubmitted ? <>
                <ResultPanel expiationList={expiationList} expiationStats={expiationStats} />
            </> : <></>}

        </div>
    );
}

export default OffenceSearch;