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
        <div className="bg-white rounded border border-secondary shadow-sm mt-4 mb-4 p-3">
            <ul class="nav nav-tabs" id="resultPanel" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="expListTab" data-bs-toggle="tab" data-bs-target="#expListPane" type="button" role="tab" aria-controls="expListPane" aria-selected="true">List of offences</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="expStatsTab" data-bs-toggle="tab" data-bs-target="#expStatsPane" type="button" role="tab" aria-controls="expStatsPane" aria-selected="false">Aggregated stats</button>
                </li>
            </ul>

            <div class="tab-content" id="resultPanelContent">
                <div class="tab-pane fade show active p-3" id="expListPane" role="tabpanel" aria-labelledby="list-tab" tabindex="0">
                    {expiationList.length > 0 ? <>
                        <ExpiationTable expiationList={expiationList} />
                    </> : <></>}
                </div>
                <div class="tab-pane fade p-3" id="expStatsPane" role="tabpanel" aria-labelledby="stats-tab" tabindex="0">
                    {!isEmpty(expiationStats) ? <>
                        <ExpiationStats expiationStats={expiationStats} />
                    </> : <></>}
                </div>
            </div>
        </div>
    )
}