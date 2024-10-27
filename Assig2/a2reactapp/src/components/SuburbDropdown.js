import { useEffect, useState } from 'react';

function SuburbDropdown() {
    const [suburbList, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5147/api/Get_ListCameraSuburbs")
            .then(response => { return response.json() })
            .then(data => setList(data))
            .catch(err => { console.log(err) });
    }, []);

    return (
        <select name="suburb" className="form-control border border-secondary-subtle shadow-sm" style={{ width: "15%" }}>
            <option value="">All Suburbs...</option>
            {suburbList.map(suburb => (
                <option key={suburb} value={suburb}>{suburb}</option>
            ))};
        </select>
    );
}

export default SuburbDropdown;