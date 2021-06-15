import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Graph from './Graph'


export default function Sensor(props) {
    // const [ledOn, setLed] = useState(false);
    // const [temperature, setTemperature] = useState("0");
    

    useEffect(() => {
        function tick() {
            fetch('/getTemperature', { method: 'GET' })
                .then(response => response.text())
                .then(temperature => props.setTemperature(temperature, 0)) 
        }
        const timerId = setInterval(() => tick(), 2000)
        return function cleanUp() {
            clearInterval(timerId);
        }

    })
    return (
        <div>
            {/* <Graph />  */}
            {/* <canvas id="smoothie-chart" width="500" height="100"></canvas> */}
            <h1>"Hello"</h1>
            {/* <h1>{props.setTemperature}</h1> */}
        </div>
    )
};