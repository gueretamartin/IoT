
import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Temperature (ºC)</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const rows = props.datos.map((row, index) => {
        return <tr key={index}>
            <td>{row.date} </td>
            <td>{row.temperature} </td>
            <td><button className="btn btn-secondary" onClick={() => props.eliminar(index)}>Delete</button></td>
        </tr>
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    return (
        <table className="table table-hover" style={{ margin: '20px' }}>
            <TableHead />
            <TableBody datos={props.datos} eliminar={props.eliminar} />
        </table>
    );
}


export default Table;