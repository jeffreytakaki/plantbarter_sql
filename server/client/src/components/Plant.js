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
    const deleteIcon = <svg className="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.646 5.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z" clipRule="evenodd"/><path fillRule="evenodd" d="M14.354 5.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clipRule="evenodd"/></svg>;
    const showDelete = (props['handleDelete'] !== undefined) ? <div className='delete-card' onClick={props.handleDelete} delete-id={props.plant.plant_id}>{deleteIcon}</div> : '';
    const showAddButton = (props['handleAddPlant'] !== undefined) ? <button className='btn btn-primary' onClick={props.handleAddPlant} add-id={props.plant.plant_id}>Add</button> : ''; 
    
    return (
        <li className='plant-card' id={props.plant.plant_id}>
            {showDelete}
            <h4 className='plant-name'>{props.plant.name}</h4>
            {showAddButton}
        </li>
    )
}
