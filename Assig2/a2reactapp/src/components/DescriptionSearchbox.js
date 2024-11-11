import { useEffect, useState } from 'react';

export default function DescriptionSearch() {

    useEffect(() => {
        fetch("http://localhost:5147/api/Get_SearchOffencesByDescription?offenceCodesOnly=false")
            .then(response => { return response.json() })
            .then(data => data)
            .catch(err => { console.log("Could not retrieve the offence list in the searchbox: " + err) })
    }, [])

    return (
        <>
            <input name="descriptionSearch" placeholder="Search for an offence description..." autoComplete="off" type="text" className="form-control border border-secondary-subtle shadow-sm" list="offenceSuggestions" />
            <datalist id="offenceSuggestions"></datalist>
        </>
    )
}