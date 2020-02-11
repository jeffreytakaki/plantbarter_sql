import {combineReducers} from 'redux';
import plants from './plantReducer';
import users from './userReducer';
import userPlants from './userPlantReducer';

export default combineReducers({plants, users, userPlants})