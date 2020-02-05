import React from 'react';

const Plant = props => {
    
    return (
        <li className='plant-card' id={props.plant.plant_id}>

            <h4>{props.plant.name}</h4>
        </li>
    )
}

export default Plant; 