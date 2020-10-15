import React, { FC } from 'react';
import Svg, {G, Line, Polyline, Path} from 'react-native-svg';
import {scalePoint, NumberValue, scaleLinear, max, line} from 'd3';

interface GraphProps {
    data:Array<{label:string, value:number}>;
}

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 5;

const Graph:FC<GraphProps> = ({ data }) => {
    const SVGHeight = 300
    const SVGWidth = 300
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN

    // X scale point
    const xDomain = data.map(item => item.label);
    const xRange:[NumberValue, NumberValue] = [0, graphWidth];
    const x = scalePoint()
        .domain(xDomain)
        .range(xRange)
        .padding(1)

    // Y scale linear
    const yDomain = [0, max(data, d => d.value) || 0];
    const yRange = [0, graphHeight]
    const y = scaleLinear()
        .domain(yDomain)
        .range(yRange)

    const lineString = data.map(item => (
            [(x(item.label) || 0) - GRAPH_BAR_WIDTH / 2, (y(item.value) || 0) * -1]
    ))

    // I give up for now.
    //const p = line()(lineString.join(' '))

    return (
        <Svg width={SVGWidth} height={SVGHeight}>
            <G y={graphHeight}>
                <Polyline
                  points={lineString}
                  fill="none"
                  stroke="orange"
                  strokeWidth="3"
                />
            </G>
        </Svg>
    );
};

export default Graph;
