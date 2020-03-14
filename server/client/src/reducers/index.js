import {combineReducers} from 'redux';
import plants from './plantsReducer';
import plant from './plantReducer';
import users from './userReducer';
import userPlants from './userPlantReducer';
import searchResults from './searchReducer';
import commonlyTraded from './commonlyTradedReducer';
import globalMsg from './globalMessagesReducer';

export default combineReducers({plants, plant, users, userPlants, searchResults, commonlyTraded, globalMsg})