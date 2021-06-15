import React, { useEffect } from 'react';
import { useState } from 'react'; 


export default function History(props) {

useEffect(() => {
    const node = document.createElement("p");
    const t = props.temp;
    const node2 = document.createElement("p");
    const ti = props.time;
    const textnode = document.createTextNode(t);
    const textnode2 = document.createTextNode(ti);
    node2.appendChild(textnode2);
    node.appendChild(textnode);
    document.getElementById("history").appendChild (node) 
    document.getElementById("history").appendChild (node2) 

  })

  return (
    <div id = "history" > 
            Log
    </div>
  )
}