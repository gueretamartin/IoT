import React, { useState } from "react";
import Table from "./Table";
import Sensor from "./Sensor";
import Graph from "./Graph";

export default function Section() {
    const [data, setData] = useState([]);

function eliminar(index) {
        setData(
          data.filter((fila, i) => {
            return i !== index;
          })
        );
      }

      
function handleSubmit(measure) {
        setData([...data, measure]);
      }
 
      return (
        <section>
          <div className="row justify-content-center" style={{marginTop:'50px'}}>
          <div className="col-lg-6" style={{margin:'10px'}}>
              <Sensor handle={handleSubmit} />

          </div> 
            <div className="jumbotron" style={{margin:'10px'}}>
            <div className="row justify-content-center " > 
            <Graph data={data}  /> 
          <h3>Logs</h3>
          
          <Table datos={data} eliminar={eliminar} />    
          </div>
          </div>   
          </div>
        </section>
      );
    };