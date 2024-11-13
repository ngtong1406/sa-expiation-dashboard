import { useEffect, useState } from 'react';

import fullarton from '../assets/fullarton.png'
import fullarton_chart from '../assets/fullarton_chart.png'
import hindleyst_westterrace from '../assets/hindleyst_westterrace.png'
import hindleyst_westterrace_chart from '../assets/hindleyst_westterrace_chart.png'
import search_filters_used from '../assets/search_filters_used.png'
import StackedBarChart from '../components/charts/StackedBarChart'

function Report() {

    const locationId1 = 65;
    const locationId2 = 658;

    const [expStats1, setFirstStats] = useState({});
    const [expStats2, setSecondStats] = useState({});
    function isEmpty(obj) {
        if (obj.totalOffencesCount === 0) { return true; }

        return Object.keys(obj).length === 0;
    }

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=65&cameraTypeCode=M&startTime=0&endTime=2147483647`)
            .then(response => { return response.json() })
            .then(data => { setFirstStats(data); })
            .catch(err => { console.log("An error occurred while retrieving the first expiation stats: " + err) })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5147/api/Get_ExpiationStatsForLocationId?locationId=658&cameraTypeCode=M&startTime=0&endTime=2147483647`)
            .then(response => { return response.json() })
            .then(data => { setSecondStats(data); })
            .catch(err => { console.log("An error occurred while retrieving the second expiation stats: " + err) })
    }, [])

    return (
        <div className="container mt-4 mb-4">
            <div className="bg-white border border-secondary-subtle p-4">
                <div className="text-center fs-2 fw-bold">
                    DATA ANALYSIS REPORT <br />
                </div>

                <h1>Introduction</h1>
                <p>Nowadays, ensuring road safety is extremely important to any community, and the strategic placement of Mobile Phone Detection Cameras (MPDC) plays a crucial role in mitigating traffic violations. This report aims to identify two key sites for the installation of MPDC based on an analysis of expiation data and relevant statistics provided by this MPDC location search tool. The selected sites are two locations from <strong>West Terrace/Hindley Street</strong> and <strong>Fullarton</strong> in Adelaide, which represent areas with high risks of frequent violations, significant demerit points, and outstanding fine amounts. It is believed that installing cameras at these locations will effectively prevent traffic violations, promote road safety, and improve compliance with traffic regulations. This report will provide a detailed overview of the data gathered for each site, the filters and methods used to select them, visual insights, and additional location-based considerations that make these sites an ideal candidate for MPDC installation.</p>

                <h1>Body Content</h1>
                <h2>Data Analysis</h2>

                <p className="fw-semibold mb-0">First site: Fullarton</p>
                <p><i>Figure 1</i> shows the area of the first site, namely Fullarton, which is identified through a thorough review of expiation data, with offences recorded between January 28, 2024, and June 30, 2024. Over this short period, the site reported a total of 52 offences, leading to a substantial $31,012 in fines and accumulating 113 demerit points. Particularly, the average fee per day at this site is $2,701.26, with an average of 9.84 demerit points per day, which indicates consistent violations at a very high rate. A closer look at offence distribution graph as shown in the below figure (<i>Figure 2</i>) suggests that the violations mostly occurred on Tuesdays with 21 offences and Saturdays with 31 offences. This pattern implies that these specific days may experience increased traffic volumes or specific traffic events, hence leading to increased cases of non-compliance. Overall, this site’s high offence and fee rates make it an ideal candidate for camera installation due to the recurring violations, which suggest that intervention is necessary to prevent the continuing unlawful behaviours.</p>
                <div className="row row-cols-2 mb-3">
                    <div className="col">
                        <img src={fullarton} alt="A screenshot of Fullarton's area on Google Maps" className="border border-secondary" style={{width: "100%"}} />
                        <small>Figure 1: A screenshot of Fullarton's area on Google Maps.</small>
                    </div>
                    <div className="col">
                        <img src={fullarton_chart} alt="A screenshot of Fullarton's insight chart" className="border border-secondary" style={{ width: "100%" }} />
                        <small>Figure 2: A screenshot of Fullarton's insight chart.</small>
                    </div>
                </div>

                <p className="fw-semibold mb-0">Second site: West Terrace/Hindley Street</p>
                <p>The second site, West Terrace/Hindley Street, as seen in <i>Figure 3</i> has a wider data range from January 28, 2024, to June 30, 2024, which shows a more consistent trend over several months. During this period, the site reported 55 offences, with $32,513 in total fines and 98 demerit points. Despite the lower average fee per day at the second site, which is $211.26 per day, the sustained frequency of offences over a long period suggests that non-compliance has been a persistent issue rather than a short-term spike. The average demerit points per day at the second site are lower than the first one, with 0.64 points per day, indicating that individual offences may be less severe but are steadily accumulated. Hence, this points out a lack of adherence to traffic regulations over time in this area. </p>
                <div className="row row-cols-2 mb-3">
                    <div className="col">
                        <img src={hindleyst_westterrace} alt="A screenshot of West Terrace/Hindley Street's area on Google Maps" className="border border-secondary" style={{ width: "100%" }} />
                        <small>Figure 3: A screenshot of West Terrace/Hindley Street's area on Google Maps.</small>
                    </div>
                    <div className="col">
                        <img src={hindleyst_westterrace_chart} alt="A screenshot of West Terrace/Hindley Street's insight chart" className="border border-secondary" style={{ width: "100%" }} />
                        <small>Figure 4: A screenshot of West Terrace/Hindley Street's insight chart.</small>
                    </div>
                </div>
                <p>According to <i>Figure 4</i>, the distribution of offences across the weekdays provides further insight into driving behaviour at this location. Sundays report the highest number of offences, with 20 cases, which indicate a peak in non-compliance on weekends. Similarly, Fridays and Saturdays also show increased violation, with 12 and 7 offences, respectively. In contrast, mid-weekdays such as Wednesday report no offences, whereas Monday, Tuesday, and Thursday show somewhat low numbers, respectively 8, 4, and 4 cases. This pattern of weekend peaks suggests a more relaxed attitude to traffic rules among drivers during these times, highlighting the need for monitoring on these high-risk days.</p>
                <p>Overall, the above findings indicate that the second site’s offence rates and a significant spike during weekends make it an appropriate candidate for MPDC installation. Having suitable monitoring equipment at this area, especially weekends, addresses the issue of non-compliance, hence improving the safety at this site over the long term.</p>

                <h2>Method</h2>
                <p className="fw-semibold mb-0">Filters and Search Options Used</p>
                <p>To identify the above two high-priority locations, several filters were applied in the dashboard analysis. First, a drop-down list was used to filter by location’s name, which allows for targeted analysis of specific areas. Next, a radio selection was employed to choose camera type codes, focusing on locations monitored by mobile cameras to ensure it is suitable for the MPDC installation. Other available filters as seen in <i>Figure 5</i>, such as a search box for offence type descriptions and a date picker for selecting the start and end date of incidents were not utilised in this particular selection. The reasoning is because focusing on location and camera type, particularly mobile cameras (M), facilitates the discovery of the above two sites with high offence records and significant daily fee and demerit averages, which suggest persistent non-compliance behaviours related to mobile use while driving. These filtered metrics were used to highlight the most optimal sites for MPDC services.</p>
                <div className="row row-cols-1 justify-content-center mt-3 mb-3">
                    <div className="col-8">
                        <img src={search_filters_used} alt="A screenshot of the search filters, with ones that were used in the selection" className="border border-secondary" style={{ width: "100%" }} />
                        <small>Figure 5: A screenshot of the search filters, with ones that were used in the selection..</small>
                    </div>
                </div>

                <h2>D3 Visualisations</h2>
                {!isEmpty(expStats1) && !isEmpty(expStats2) ? <>
                    <StackedBarChart dataSet1={expStats1.expiationDaysOfWeek} dataSet2={expStats2.expiationDaysOfWeek} />
                </> : <></>}

                <h2>Discussion</h2>
                <p className="fw-semibold mb-0">Considerations around the locations</p>
                <p>Apart from the above-mentioned statistical analysis, several considerations assisted in selecting the two locations. Both sites West Terrace/Hindley Street and Fullarton are either positioned at or have intersections that frequently experience heavy traffic flow. Several factors such as road design, namely lane merges, sharp turns, and limited visibility at these sites, usually contribute to the high offence rates. Hence, mobile camera setup can help address these design challenges by preventing risky driving behaviours, specifically using mobile phones while driving, that can become life-threatening by confusing road layouts. In addition, both sites have adequate physical space for camera installations, as visible in <i>Figure 1</i> and <i>Figure 3</i>, without impacting the regular traffic flow, which ensures that this traffic solution will not lead to newer traffic issues.</p>
                <p>The presence of mobile cameras could play a preventative role not only in reducing offences related to driving mobile users, but also in lowering the possibility of severe accidents. With the first site, its peak violation days may suggest the need for targeted camera operations on Tuesdays and Saturdays, whereas the second site, with its long-term violation pattern, is suitable for continuous monitoring to impact the long-term driving behaviours.</p>

                <h1>Conclusion</h1>
                <p>In conclusion, the analysis in this report demonstrates that the two sites West Terrace/Hindley Street and Fullarton are well-suited for MPDC installation, each for distinct reasons. The first site’s high offence count on specific days makes it suitable for targeted interventions, while the second site’s steady accumulation of offences over a long period suggests continuous monitoring. By installing mobile cameras at these sites, the solution aims to minimise violations, promote compliance, and enhance road safety in these high-risk areas. The incorporation of statistical data, visual insights, and location-based considerations provides an appropriate justification for selecting these sites for MPDC. As monitoring and analysis continue, the impact of these interventions will be assessed over time to ensure their effectiveness in meeting the solution’s goals.</p>
            </div>
        </div>
    );
}

export default Report;