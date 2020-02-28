import {combineReducers} from 'redux';
import plants from './plantsReducer';
import plant from './plantReducer';
import users from './userReducer';
import userPlants from './userPlantReducer';
import searchResults from './searchReducer'

export default combineReducers({plants, plant, users, userPlants, searchResults})