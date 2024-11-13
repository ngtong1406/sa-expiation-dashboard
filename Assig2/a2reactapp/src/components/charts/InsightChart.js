import * as d3 from "d3";
import { useEffect } from "react";

export default function InsightChart({ data }) {

    useEffect(() => {

        const margin = { top: 20, right: 50, bottom: 50, left: 50 };
        const width = 1200;
        const height = 600;

        const svg = d3.select('svg#insightChart')
            .attr('width', width)
            .attr('height', height);

        const maxDataValue = d3.max(Object.keys(data), d => data[d]);

        // Remove all old content upon loaded.
        svg.selectAll('*').remove();

        // Create an X-Scale
        const x = d3.scaleBand()
            .domain(Object.keys(data).map(d => d))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        // Create a Y-Scale
        const y = d3.scaleLinear()
            .domain([0, maxDataValue])
            .nice()
            .range([height - margin.bottom, margin.top]);

        // Create X-Axis content
        svg.append('g')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end');

        // Create Y-Axis content
        const chartGroup = svg.append('g')
            .classed('chartGroup', true)
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Create bars
        svg.selectAll('.bar')
            .data(Object.keys(data))
            .join('rect')
            .classed('bar', true)
            .attr('x', d => x(d))
            .attr('y', d => y(data[d]))
            .attr('width', x.bandwidth())
            .attr('height', d => y(0) - y(data[d]))
            .style('fill', '#6495ac')
            .style('fill-opacity', (d, i) => (data[d] / maxDataValue)); // Adjusts the fill opacity based on its data value.

        // Assign numeric labels to the bars
        svg.selectAll('.label')
            .data(Object.keys(data))
            .join('text')
            .classed('label', true)
            .attr('x', d => x(d) + x.bandwidth() / 2)
            .attr('y', d => y(data[d]) - 5)
            .attr('text-anchor', 'middle')
            .text(d => data[d]);
    }, [data])

    return (
        <div id="statsContainer" className="bg-white rounded border border-secondary mt-3 mb-3 p-3">
            <svg id="insightChart"></svg>
        </div>
    )
}