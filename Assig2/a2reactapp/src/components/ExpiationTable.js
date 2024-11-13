export default function ExpiationTable({ expiationList }) {

    return (
        <>
            <div className="text-center text-muted mt-4">
                Found <strong>{expiationList.length}</strong> matching {expiationList.length > 1 ? "results" : "result"}.
            </div>

            <div className="bg-light rounded border border-secondary-subtle shadow-sm p-4 mt-3 mb-3">
                <div className="accordion" id="expiationAccordion">
                    {expiationList.map((exp) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + exp.expId} aria-expanded="false" aria-controls={exp.expId}>
                                    [<span className="fw-bold">{exp.expId}</span>] - Offence Code: {exp.offenceCode ? exp.offenceCode : "None"} - Incident Date: {exp.incidentStartDate} at {exp.incidentStartTime} - [{exp.statusCode}]
                                </button>
                            </h2>
                            <div id={exp.expId} className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <h4 className="fw-bold">Offence Summary</h4>

                                    <hr />

                                    <div className="row">
                                        <div className="col-sm-2 fw-semibold">Expiation ID:</div>
                                        <div className="col-sm-10">{exp.expId}</div>

                                        <div className="col-sm-2 fw-semibold">Offence Code:</div>
                                        <div className="col-sm-10">{exp.offenceCode}</div>

                                        <div className="col-sm-2 fw-semibold">Incident Time:</div>
                                        <div className="col-sm-10">{exp.incidentStartDate} at {exp.incidentStartTime}</div>

                                        <div className="col-sm-2 fw-semibold">Issued Date:</div>
                                        <div className="col-sm-10">{exp.issueDate}</div>

                                        <div className="col-sm-2 fw-semibold">Vehicle Speed (km/h):</div>
                                        <div className="col-sm-10">{exp.vehicleSpeed}</div>

                                        <div className="col-sm-2 fw-semibold">Location Speed Limit:</div>
                                        <div className="col-sm-10">{exp.locationSpeedLimit}</div>

                                        <div className="col-sm-2 fw-semibold">Driver State:</div>
                                        <div className="col-sm-10">{exp.driverState}</div>

                                        <div className="col-sm-2 fw-semibold">Registration State:</div>
                                        <div className="col-sm-10">{exp.regState}</div>

                                        <div className="col-sm-2 fw-semibold">Local Service Area:</div>
                                        <div className="col-sm-10">{exp.lsaCode}</div>

                                        <div className="col-sm-2 fw-semibold">Status:</div>
                                        <div className="col-sm-10">{exp.statusCode}</div>

                                        <div className="col-sm-2 fw-semibold">Enforce Warning Fee:</div>
                                        <div className="col-sm-10">$ {exp.enforceWarningNoticeFeeAmt}</div>

                                        <div className="col-sm-2 fw-semibold">Penalty Amount:</div>
                                        <div className="col-sm-10">$ {exp.offencePenaltyAmt}</div>

                                        <div className="col-sm-2 fw-semibold">Levy Amount:</div>
                                        <div className="col-sm-10">$ {exp.offenceLevyAmt}</div>

                                        <div className="col-sm-2 fw-semibold">Corporate Amount:</div>
                                        <div className="col-sm-10">$ {exp.corporateFeeAmt}</div>

                                        <div className="col-sm-2 fw-semibold">Total Fee Amount:</div>
                                        <div className="col-sm-10">$ {exp.totalFeeAmt}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}