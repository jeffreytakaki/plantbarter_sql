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
                <ul>
                    <li><h1>hi, {this.props.users.username}</h1></li>
                    <li><Link to="/profile/edit">edit profile</Link></li>
                </ul>
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






