import * as d3 from "d3";
import { useEffect } from "react";

export default function InsightChart({ expiationStats }) {

    useEffect(() => {
        const container = d3.select('#statsContainer');

        const margin = { top: 20, right: 30, bottom: 50, left: 50 };
        const width = container.node().getBoundingClientRect().width;
        const height = 600;

        const svg = d3.select('#insightChart')
            .attr('width', width)
            .attr('height', height);
    }, [])

    return (
        <svg id="insightChart"></svg>
    )
}