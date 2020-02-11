import React from 'react';

export default class Plant extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        // let deletebutton = () => {
        //     if (this.props.handleDelete) {
        //         return (<div className='delete-card' onClick={this.props.handleDelete}>X</div>)
        //     }
    
        //     return false;
        // }

        let deletebutton = (this.props.handleDelete) ? <div className='delete-card' onClick={this.props.handleDelete}>X</div> : false;
        return (
            <li className='plant-card' id={this.props.plant.plant_id}>
                {deletebutton}
                <h4>{this.props.plant.name}</h4>
            </li>
        )
    }
}

