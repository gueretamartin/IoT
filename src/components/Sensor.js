import React, { Component } from 'react';
import { useState, useEffect } from 'react';


export default function Sensor() {
    // const [ledOn, setLed] = useState(false);
    const [temperature, setTemperature] = useState("0");
   

    useEffect(() => {
        function tick() {
            fetch('/getTemperature', { method: 'GET' })
                .then(response => response.text())
                .then(temperature => setTemperature(temperature, 0))
        }
        const timerId = setInterval(() => tick(), 1000)
        return function cleanUp() {
            clearInterval(timerId);
        }

    })
    return (
        <div>
            <canvas id="smoothie-chart" width="500" height="100"></canvas>
            <h1>{temperature}</h1>
        </div>
    )
};