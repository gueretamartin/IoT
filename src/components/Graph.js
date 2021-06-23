
import React, {useState} from 'react';
import { SmoothieChart } from 'smoothie';
const { default: SmoothieComponent } = require('react-smoothie');
const { TimeSeries } = require('react-smoothie');


export default function Graph(props) { 
    const [ts1] = useState(new TimeSeries({}));
     console.log(props.data); 
    ts1.append(props.time,props.data ); 
    
  return (
      
    <SmoothieComponent
      responsive
      minValue={0}
      maxValue={100}
      height={300}
      timestampFormatter={SmoothieChart.timeFormatter}
      series={[
        {
          data: ts1,
          strokeStyle: { g: 255 },
          fillStyle: { g: 255 },
          lineWidth: 4,
        },
      ]}
    />
  );
};
