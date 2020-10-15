import React, { FC } from 'react';
import Svg, {G, Line, Polyline, Path} from 'react-native-svg';
import {scalePoint, NumberValue, scaleLinear, max, line} from 'd3';

interface SparklineProps {
    data:Array<{label:string, value:number}>;
}

const GRAPH_MARGIN = 20;

const Sparkline:FC<SparklineProps> = ({ data }) => {
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

    const lineStuff = data.map((item, index) => (
            [(x(item.label) || 0) / 2, y(item.value) * -1]
    ))
    console.log('line stuff', lineStuff)

    const formattedLineStuff = line()(lineStuff)
    console.log('formatted', formattedLineStuff)

    return (
        <Svg width={SVGWidth} height={SVGHeight}>
            <G y={graphHeight}>

                <Path
                  d={formattedLineStuff}
                  fill="none"
                  stroke="red"
                  strokeWidth="3"
                />
            </G>
        </Svg>
    );
};

export default Sparkline;

// This is actually what is used in sparkline btw
// <Polyline
//   points={lineStuff}
//   fill="none"
//   stroke="orange"
//   strokeWidth="3"
// />
