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
        <select id="suburbList" className="form-control border border-secondary-subtle shadow-sm" style={{ width: "25%" }}>
            <option value="" selected>All Suburbs...</option>
            {suburbList.map(suburb => (
                <option value={suburb}>{suburb}</option>
            ))};
        </select>
    );
}

export default SuburbDropdown;