import React from 'react';
import { getPlantById } from '../actions/plantActions';
import { connect } from 'react-redux';


class Plant extends React.Component {
    constructor(props, dispatch) {
        super(props);

        this.renderPage = this.renderPage.bind(this);
    }

    componentWillMount(props) {
        const plant_id = this.props.match.params.plant_id;
        this.props.fetchPlant(plant_id)
    }

    renderPage(plant) {
        console.log("this.props.users", this.props.users);
        return (
            <div className="plant-container">
                <div>Plant type: {plant.category_type}</div>
                <h1>{plant.name}</h1>
                <img src={plant.image_url} />
                <h4>{plant.plant_short_description}</h4>
                <div className="plant-content">
                    <article>{plant.plant_long_description}</article>
                </div>
            </div>
        )
    }

    render() {
        console.log("this.props.plant", this.props.plant)
        let page;
        if(this.props.plant.length) {
            console.log('inside')
            page = this.renderPage(this.props.plant[0])
        } else {
            page = '';
        }

        return (
            <div className="plant-body">
                {/* <h1>{this.props.plant[0].name}</h1> */}
                {page}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plant: state.plant,
        users: state.users
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        fetchPlant: (plant_id) => {
            dispatch(getPlantById(plant_id));
        }
    };
};

const PlantConnected = connect(mapStateToProps,mapDispatchToEvents)(Plant)
export default PlantConnected






