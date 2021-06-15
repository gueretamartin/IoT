
import React, { Component } from 'react';
import { SmoothieChart } from 'smoothie';
const { default: SmoothieComponent, TimeSeries } = require('react-smoothie');
// import SmoothieComponent, { TimeSeries } from 'react-smoothie';

export default function Graph(props) {



// setInterval(() => {
  var time = new Date().getTime();
  props.ts1.append(time, props.temp);
  console.log(props.temp)
  console.log(props.ts1)
  // props.ts2.append(time, props.temp);
// }, 500);

// var TestComponent = React.createClass({
//   render() {
    return (
      <SmoothieComponent
        responsive
        minValue = {0}
        maxValue = {100}
        height={300}
        timestampFormatter={SmoothieChart.timeFormatter}
        series={[
          {
            data: props.ts1,
            strokeStyle: { g: 255 },
            fillStyle: { g: 255 },
            lineWidth: 4,
          },
          // {
          //   data: props.ts2,
          //   strokeStyle: { r: 255 },
          //   fillStyle: { r: 255 },
          //   lineWidth: 4,
          // },
        ]}
      />
    );
//   },
// });
};
 