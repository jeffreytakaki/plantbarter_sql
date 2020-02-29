import React from 'react';
import { getPlantById } from '../actions/plantActions';
import { connect } from 'react-redux';


class Plant extends React.Component {
    constructor(props, dispatch) {
        super(props);

        this.renderPlantPage = this.renderPlantPage.bind(this);
        this.renderCommunityPage = this.renderCommunityPage.bind(this);
    }

    componentWillMount(props) {
        const plant_id = this.props.match.params.plant_id;
        this.props.fetchPlant(plant_id)
    }

    renderPlantPage(plant) {
        // const plantDetails = (plant.plant.length) ? plant.plant[0] : false;
        // console.log('plantDetails',plantDetails)
        // if(plantDetails) {
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
        // }
        
    }

    renderCommunityPage(community) {

        const day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        let user = community[0].map((user,i) => {
            const date = new Date(user.created_at);
            const getDayOfTheWeek = day_names[date.getDay()];
            const getMonth = month_names[date.getMonth()];
            const getMonthDate = date.getDate();
    

            let dateString = `Posted on: ${getDayOfTheWeek}, ${getMonth} ${getMonthDate}`;
            console.log('user', user)

            return (
                <li key={i} className="community-user">
                    <div class="community-section"><h2>{user.username}</h2></div>
                    <div class="community-section">{dateString}</div>
                    
                </li>
            )
        });

        return user;
    }


    render() {
        let plantBody = (this.props.plant.plant && this.props.plant.plant.length) ? this.renderPlantPage(this.props.plant.plant[0]) : '';
        let communityBody = (this.props.plant.community && this.props.plant.community.length) ? this.renderCommunityPage(this.props.plant.community) : '';

        return (
            <div className="plant-wrapper">
                <div className="plant-body">
                    <div className="page-section">{plantBody}</div>
                    <div className="page-section">
                        <ul className="community-list">{communityBody}</ul>
                    </div>
                </div>
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






