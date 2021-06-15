import React  from 'react';
import {useEffect } from 'react';

export default function Sensor(props) {
    
    useEffect(() => {
        function tick() {
            var time = new Date().getTime();
            props.setTime(time);

            fetch('/getTemperature', { method: 'GET' })
                .then(response => response.text())
                .then(temperature => props.setTemperature(temperature))
                
        }

        const timerId = setInterval(() => tick(), 2000)

        return function cleanUp() {
            clearInterval(timerId);
        }
    })
    return (
        <div>
            <h1>"Hello"</h1>
        </div>
    )
};