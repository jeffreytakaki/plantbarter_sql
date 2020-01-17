import React from 'react';

const Plant = props => {
    
    return (
        <li id={props.plant.plant_id}>
            {props.plant.name}
        </li>
    )
}

export default Plant; 