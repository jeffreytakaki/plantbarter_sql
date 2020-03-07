import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import UserPlantCollectionConnected from '../components/User-Plant-Collection'

class Profile extends React.Component {
    constructor(props, dispatch) {
        super(props);
       
    }

    render() {  
        return (
            <div>
              <h1>My Plants</h1>
              <UserPlantCollectionConnected />   
            </div>
            

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        // register: (user) => {
        //     dispatch(registerUser(user));
        // }
    };
};

const ProfileConnected = connect(mapStateToProps,mapDispatchToEvents)(Profile)
export default ProfileConnected






