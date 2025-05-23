﻿import InsightChart from './charts/InsightChart';

export default function ExpiationStats({ expiationStats }) {
    function convertUnixTimeToDate(unixTime) {
        return (new Date(unixTime * 1000)).toLocaleDateString('en-AU');
    }

    return (
        <div className="mt-4 mb-4">
            <h3 className="text-center fw-bold mb-3">Highlights</h3>
            <p className="text-center text-muted">The cards below describe the key highlights about the current search criteria.</p>

            <div className="row mt-4">
                <div className="col-4">
                    <div className="card border-secondary text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-muted">First Expiation</h5>
                            <p className="card-text fw-semibold fs-4">{convertUnixTimeToDate(expiationStats.firstExpiationInSet)}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card border-secondary text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-muted">Last Expiation</h5>
                            <p className="card-text fw-semibold fs-4">{convertUnixTimeToDate(expiationStats.lastExpiationInSet)}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card border-secondary text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-muted">Total Offences</h5>
                            <p className="card-text fw-semibold fs-4">{expiationStats.totalOffencesCount}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card border-secondary text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-muted">Total Demerits</h5>
                            <p className="card-text fw-semibold fs-4">{expiationStats.totalDemerits}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card border-secondary text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-muted">Total Fee</h5>
                            <p className="card-text fw-semibold fs-4">${expiationStats.totalFeeSum.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card border-secondary text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-muted">Average Fee/Day</h5>
                            <p className="card-text fw-semibold fs-4">${expiationStats.avgFeePerDay.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card border-secondary text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-muted">Average Demerit/Day</h5>
                            <p className="card-text fw-semibold fs-4">{expiationStats.avgDemeritsPerDay.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-center fw-bold mt-4 mb-3">Insights</h3>
            <p className="text-center text-muted">The chart below describes the total number of offences (<strong>{expiationStats.totalOffencesCount}</strong>) distributed over the weekdays.</p>

            <div className="row">
                <div className="col-12">
                    <InsightChart data={expiationStats.expiationDaysOfWeek} id="" />
                </div>
            </div>
        </div>
    )
}