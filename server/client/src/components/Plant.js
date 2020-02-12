import React from 'react';

export const Plant = props => {
    
    return (
        <li className='plant-card' id={props.plant.plant_id}>
             <div className='delete-card' onClick={props.handleDelete}>X</div>
            <h4>{props.plant.name}</h4>
        </li>
    )
}
