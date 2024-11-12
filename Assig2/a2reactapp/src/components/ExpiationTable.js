export default function ExpiationTable({ expiationList }) {
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
                        <table class="table">
                            <thead class="table-dark">
                                <tr>
                                    <th>Offence Code</th>
                                    <th>Incident Start Date</th>
                                    <th>Incident Start Time</th>
                                    <th>Issue Date</th>
                                    <th>Total Fee Amount</th>
                                    <th>Vehicle Speed (km/h)</th>
                                    <th>Location Speed Limit (km/h)</th>
                                    <th>Registration State</th>
                                    <th>Local Service Area</th>
                                    <th>Camera Location ID</th>
                                    <th>Camera Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expiationList.map((exp) => (
                                    <tr>
                                        <th>{exp.offenceCode}</th>
                                        <td>{exp.incidentStartDate}</td>
                                        <td>{exp.incidentStartTime}</td>
                                        <td>{exp.issueDate}</td>
                                        <td>$ {exp.totalFeeAmt != null ? exp.totalFeeAmt : "0.0"}</td>
                                        <td>{exp.vehicleSpeed}</td>
                                        <td>{exp.locationSpeedLimit}</td>
                                        <td>{exp.regState}</td>
                                        <td>{exp.lsaCode}</td>
                                        <td>{exp.cameraLocationId}</td>
                                        <td>{exp.cameraTypeCode}</td>
                                        <td>{exp.statusCode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    )
}