import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExpiationTable({ expiationList }) {
    let expIdList = [];

    function onSelect(e) {
        if (e.target.checked == true) {
            expIdList.push(e.target.value);
        } else {
            expIdList.splice(expIdList.indexOf(e.target.value), 1);
        }

        if (expIdList.length < 2) {
            document.querySelectorAll('.form-check-input.border.border-dark-subtle').forEach((button) => {
                button.disabled = false;
            })

            document.querySelector('[name="reportButton"]').hidden = true;
        } else {
            document.querySelectorAll('.form-check-input.border.border-dark-subtle').forEach((button) => {
                if (!expIdList.includes(button.value)) {
                    button.disabled = true;
                }
            })

            document.querySelector('[name="reportButton"]').hidden = false;
        }
    }

    return (
        <>
            {expiationList.length <= 0 ? (
                <div className="text-center text-muted mt-4">
                    Nothing here yet or could not find any matching records. Try searching with a description or choosing one of the filters above.
                </div>
            ) : (
                <>
                    <div className="text-center text-muted mt-4">
                        {expiationList.length} matching {expiationList.length > 1 ? "results" : "result"} found...
                    </div>

                    <div className="table-responsive bg-white rounded border border-secondary-subtle shadow-sm mt-3 p-3 overflow-y-scroll" style={{ height: '50vh' }}>
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th></th>
                                    <th>Offence Code</th>
                                    <th>Incident Start Date</th>
                                    <th>Incident Start Time</th>
                                    <th>Issue Date</th>
                                    <th>Total Fee Amount</th>
                                    <th>Vehicle Speed (km/h)</th>
                                    <th>Location Speed Limit (km/h)</th>
                                    <th>Registration State</th>
                                    <th>Local Service Area</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expiationList.map((exp) => (
                                    <tr key={exp.expId}>
                                        <td>
                                            <input onClick={onSelect} class="form-check-input border border-dark-subtle" name="dataSelection" type="checkbox" value={exp.expId} id={"dataSelection" + exp.expId} />
                                        </td>
                                        <th>{exp.offenceCode}</th>
                                        <td>{exp.incidentStartDate}</td>
                                        <td>{exp.incidentStartTime}</td>
                                        <td>{exp.issueDate}</td>
                                        <td>$ {exp.totalFeeAmt != null ? exp.totalFeeAmt : "0.0"}</td>
                                        <td>{exp.vehicleSpeed}</td>
                                        <td>{exp.locationSpeedLimit}</td>
                                        <td>{exp.regState}</td>
                                        <td>{exp.lsaCode}</td>
                                        <td>{exp.statusCode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-end align-middle mt-3 mb-3">
                        <Link name="reportButton" to="/Main/Report" className="btn btn-success" hidden>Generate a report</Link>
                    </div>
                </>
            )}
        </>
    )
}