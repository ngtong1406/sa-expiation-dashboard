import SuburbDropdown from '../components/SuburbDropdown';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuburbSelectingPage() {
    const [suburbList, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5147/api/Get_ListCameraSuburbs")
            .then(response => { return response.json() })
            .then(data => setList(data))
            .catch(err => { console.log(err) });
    }, []);

    return (
        <>
            <div className="bg-white justify-content-center rounded border border-secondary-subtle p-3">
                <h2 className="fw-bold">Welcome!</h2>
                <p>Welcome to the SAPOL's MPDC location search tool, powered by a range of advanced filters that allow you to find the best and the latest locations to install mobile cameras!</p>
                <p>First thing first, let's start by choosing a suburb below:</p>
                <div className="d-flex justify-content-center align-middle gap-3">
                    <select name="suburb" className="form-control border border-secondary-subtle shadow-sm">
                        <option value="">All Suburbs...</option>
                        {suburbList.map(suburb => (
                            <option key={suburb} value={suburb}>{suburb}</option>
                        ))};
                    </select>
                    <Link to="/Dashboard" className="btn btn-primary">Start searching</Link>
                </div>
            </div>
        </>
    )
}