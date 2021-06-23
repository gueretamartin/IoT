import React, { useEffect, useState } from 'react';
import Graph from './Graph'; 



export default function Sensor(props) {
    
    const [data, setData] = useState({
        time: "",
        temperature: ""
        // ,
        // humidity:""
      });
    
    // const [ts1] = useState(new TimeSeries({}));
         const [time, setTime] = useState("");
    // const [temperature, setTemperature] = useState("0");

    useEffect(() => {
        function tick() {
             var time = new Date().getTime();
             setTime(time);

            fetch('/getTemperature', { method: 'GET' })
                .then(response => response.text())
                .then(temperature => setData({temperature:temperature,
                                              time: new Date().getTime()}))
       
                //Return data to parent (Section)
                 props.handle(data);
        }

        const timerId = setInterval(() => tick(), 2000)
        return function cleanUp() {
            clearInterval(timerId);
        }
    })
    return (
        <div>
             
        </div>
    )
};