import React, { FC } from 'react';
import Svg, {G, Rect, Line, Text} from 'react-native-svg';
import {scalePoint, NumberValue, scaleLinear, max} from 'd3';

interface GraphProps {
    data:Array<{label:string, value:number}>;
}

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 5;
const colors = {
    axis: '#000000',
    bars: '#15AD13'
}


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

    return (
        <Svg width={SVGWidth} height={SVGHeight}>
            <G y={graphHeight}>
                <Text>hello</Text>
                {/* bars */}
                {data.map(item => (
                    <Rect 
                        key={item.label} 
                        x={(x(item.label) || 0) - GRAPH_BAR_WIDTH / 2} 
                        y={(y(item.value) || 0) * -1} 
                        rx={2.5}
                        width={GRAPH_BAR_WIDTH}
                        height={y(item.value)}
                        fill={colors.bars}
                    />
                ))}
                {/* bottom axis */}
                <Line
                    x1="0"
                    y1="2"
                    x2={graphWidth}
                    y2="2"
                    stroke={colors.axis}
                    strokeWidth="0.5"
                />
            </G>
        </Svg>
    );
};

export default Graph;
