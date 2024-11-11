import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuburbSelectingPage() {
    const [suburbList, setList] = useState([]);
    const [chosenSuburb, setSuburb] = useState('');

    useEffect(() => {
        fetch("http://localhost:5147/api/Get_ListCameraSuburbs")
            .then(response => { return response.json() })
            .then(data => setList(data))
            .catch(err => { console.log(err) });
    }, []);

    function onChange(e) {
        let suburb = e.target.value;
        setSuburb(suburb);
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row row-cols-1 justify-content-center">
                <div className="col-7 bg-white rounded border border-secondary-subtle shadow-sm p-5">
                    <h2 className="fw-bold text-center">Welcome!</h2>
                    <p className="text-center">Welcome to the SAPOL's MPDC location search tool, powered by a range of advanced filters that allow you to find the best and the latest locations to install mobile cameras!</p>
                    <p className="text-center mt-5">First thing first, let's start by choosing a suburb below:</p>
                    <div className="d-flex justify-content-center align-middle gap-3">
                        <select name="suburb" className="form-control border border-secondary-subtle shadow-sm" onChange={onChange} style={{ width: '35%' }}>
                            <option value="">All Suburbs...</option>
                            {suburbList.map(suburb => (
                                <option key={suburb} value={suburb}>{suburb}</option>
                            ))};
                        </select>
                        <Link to={"/Main/Dashboard/" + chosenSuburb} className="btn btn-dark">Start searching</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}