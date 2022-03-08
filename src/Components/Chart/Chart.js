import React, { useState } from "react";
import './Chart.css'
import ChartBar from "./ChartBar"

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(point => point.value)
    const totalMax = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map(point =>
                <ChartBar
                    value={point.value}
                    maxValue={totalMax}
                    label={point.label}
                    key={point.key}
                />)}
        </div>
    );
}
export default Chart