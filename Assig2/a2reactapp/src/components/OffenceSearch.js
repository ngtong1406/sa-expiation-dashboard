import { useEffect, useState } from 'react';
import DescriptionSearch from './DescriptionSearchbox';
import ExpiationDatePicker from './ExpiationDatePicker';
import TypeCodeRadio from './TypeCodeRadio';
import ListCameraDropdown from './ListCameraDropdown';

function OffenceSearch({ suburb }) {
    const [cameraList, setList] = useState([]);
    const [offenceDescription, setDescription] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        let description = formData.get('descriptionSearch')
        setDescription(description);
        console.log(description);
    }

    return (
        <div id="offenceSearch">
            <form method="post" action="/Dashboard" onSubmit={onSubmit}>
                <div className="text-center fw-bold fs-4">Advanced Search</div>
                <div className="text-center text-muted fs-6">Continue your search by providing some searching criteria as below...</div>
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
                        providing a specific camera location:
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
                        providing a camera type code:
                    </div>
                    <div className="col-8 mb-3">
                        <TypeCodeRadio />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Search</button>
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