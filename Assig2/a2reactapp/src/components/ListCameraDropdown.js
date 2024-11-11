import { useEffect, useState } from 'react';

// This component will accept 'suburb' as parameter to show the appropriate list of locations.
export default function ListCameraDropdown({ suburb }) {
    const [cameraLocationList, setLocationList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ListCamerasInSuburb?suburb=${suburb}&cameraIdsOnly=false`)
            .then(response => { return response.json() })
            .then(data => setLocationList(data))
            .catch(err => { console.log("Could not retrieve the camera locations in the dropdown: " + err) })
    }, [suburb])

    return (
        <>
            
        </>
    )
}