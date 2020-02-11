import React from 'react';
import { connect } from 'react-redux';
import Plant from './Plant';
import { getUserPlantsList } from '../actions/user_plantActions';


class UserPlantCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: []
        };

    }

    componentDidMount() {
        this.props.getUserPlants()
    }

    render() {
        let plantList = this.props.user_plants.map((plant, i) => {
            return ( <Plant key={i} plant={plant} /> )
        });
    
        return (
            <div className="plant-collection">
                <ul>
                    { plantList }
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log('user plant state',state)
    return {
        user_plants: state.userPlant
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        getUserPlants: () => {
            dispatch(getUserPlantsList());
        }
    };
};

const UserPlantCollectionConnected = connect(mapStateToProps,mapDispatchToEvents)(UserPlantCollection)
export default UserPlantCollectionConnected


