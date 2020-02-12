import React from 'react';
import plants from '../reducers/plantReducer';

// export default class Plant extends React.Component {
//     constructor(props) {
//         super(props);

//         this.props = props;
//         this.showDelete = this.showDelete.bind(this);
//     }
    
//     showDelete(props) {
//         if (this.props['handleDelete'] !== undefined) {
//             return <div className='delete-card' onClick={this.props.handleDelete} delete-id={this.props.plant.plant_id}>X</div>
//         }
//     }

//     render() {


//         return (
//             <li className='plant-card' id={this.props.plant.plant_id}>
//                 {this.showDelete()}
//                 <h4>{this.props.plant.name}</h4>
//             </li>
//         )
//     }
// }







export const Plant = props => {

    const showDelete = (props['handleDelete'] !== undefined) ? <div className='delete-card' onClick={props.handleDelete} delete-id={props.plant.plant_id}>X</div> : '';
    const showAddButton = (props['handleAddPlant'] !== undefined) ? <button className='btn btn-primary' onClick={props.handleAddPlant} add-id={props.plant.plant_id}>Add</button> : ''; 
    
    return (
        <li className='plant-card' id={props.plant.plant_id}>
            {showDelete}
            <h4>{props.plant.name}</h4>
            {showAddButton}
        </li>
    )
}
