export default function ResultPanel({ expiationList, expiationStats }) {
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
                <div class="tab-pane fade show active" id="expListPane" role="tabpanel" aria-labelledby="list-tab" tabindex="0">1</div>
                <div class="tab-pane fade" id="expStatsPane" role="tabpanel" aria-labelledby="stats-tab" tabindex="0">2</div>
            </div>
        </div>
    )
}