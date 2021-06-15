
import React from 'react';
import { SmoothieChart } from 'smoothie';
const { default: SmoothieComponent } = require('react-smoothie');

export default function Graph(props) { 
  props.ts1.append(props.time, props.temp); 
  return (
    <SmoothieComponent
      responsive
      minValue={0}
      maxValue={100}
      height={300}
      timestampFormatter={SmoothieChart.timeFormatter}
      series={[
        {
          data: props.ts1,
          strokeStyle: { g: 255 },
          fillStyle: { g: 255 },
          lineWidth: 4,
        },
      ]}
    />
  );
};
