import React from 'react';
import { connect } from 'react-redux';
import { PlantCard } from './Plant-Card';
import { getCommonlyTradedPlants } from '../actions/commonlyTradedPlantsActions';

class CommonlyTraded extends React.Component {
    constructor(props) {
        super(props)
       
    }

    componentWillMount() {
        this.props.getCommonPlants();
    }

    render() {
        
        let plantList = this.props.commonlyTradedPlants.map((plant, i) => {
            return (
            <PlantCard key={i} plant={plant} handleAddPlant={this.handleAddPlant} userLoggedIn={Object.entries(this.props.users).length}/>
            )
        });

        return (

            <div className="commonly-traded sections">
                <div className="commonly-traded--plants">
                    <div className="sections--title">
                        <h1>Most commonly traded plants</h1>
                    </div>
                    <ul>
                        {plantList}
                    </ul>
                </div>
          </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        commonlyTradedPlants: state.commonlyTraded
    }
};
const mapDispatchToEvents = (dispatch) => {
    return {
        getCommonPlants: () => {
            dispatch(getCommonlyTradedPlants());
        }
    };
};

const CommonlyTradedConnected = connect(mapStateToProps,mapDispatchToEvents)(CommonlyTraded)
export default CommonlyTradedConnected

