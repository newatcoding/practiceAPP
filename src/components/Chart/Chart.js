import React from 'react';
import ChartBar from './Chartbar';
import './Chart.css';

const Chart= (props)=> {
    // console.log(props.dataPoints);
    const valueArray=props.dataPoints.map(dataPoint => dataPoint.value);
    // console.log(valueArray);
    const totalMaximum=Math.max(...valueArray);
    // console.log(totalMaximum);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
              return  <ChartBar   key={dataPoint.label}
                            value={dataPoint.value} 
                            maxValue={totalMaximum} 
                            label={dataPoint.label} />
            })}
        </div>
    )
}

export default Chart;
