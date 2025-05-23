﻿import { Link } from 'react-router-dom';

import ExpiationTable from './ExpiationTable';
import ExpiationStats from './ExpiationStats';

export default function ResultPanel({ expiationList, expiationStats }) {

    // Coding solution adapted from mikemaccana (2021) on Stackoverflow
    // Reference link: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    function isEmpty(obj) {
        if (obj.totalOffencesCount === 0) { return true; }

        return Object.keys(obj).length === 0;
    }

    return (
        <>
            {/* This is just a mock-up select button to assume that the user has selected the location. */}
            <div className="d-flex justify-content-center align-middle gap-3">
                <input name="locationSelection" id="selectButton" type="checkbox" role="button" className="btn-check" />
                <label for="selectButton" class="btn btn-outline-dark">Select this location</label>
                <Link to="/Main/Report" className="btn btn-success">Generate Report</Link>
            </div>

            <div className="bg-white rounded border border-secondary shadow-sm mt-4 mb-4 p-3">
                <ul className="nav nav-tabs" id="resultPanel" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="expListTab" data-bs-toggle="tab" data-bs-target="#expListPane" type="button" role="tab" aria-controls="expListPane" aria-selected="true">List of offences</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="expStatsTab" data-bs-toggle="tab" data-bs-target="#expStatsPane" type="button" role="tab" aria-controls="expStatsPane" aria-selected="false">Aggregated stats</button>
                    </li>
                </ul>

                <div className="tab-content" id="resultPanelContent">
                    <div className="tab-pane fade show active p-3" id="expListPane" role="tabpanel" aria-labelledby="list-tab" tabIndex="0">
                        {expiationList.length > 0 ? <>
                            <ExpiationTable expiationList={expiationList} />
                        </> : <>
                            <p className="text-muted text-center mt-4">No matching records found.</p>
                        </>}
                    </div>
                    <div className="tab-pane fade p-3" id="expStatsPane" role="tabpanel" aria-labelledby="stats-tab" tabIndex="0">
                        {!isEmpty(expiationStats) ? <>
                            <ExpiationStats expiationStats={expiationStats} />
                        </> : <>
                            <p className="text-muted text-center mt-4">No matching records found.</p>
                        </>}
                    </div>
                </div>
            </div>
        </>

    )
}