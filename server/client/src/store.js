import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleWare = [thunk]; // thunk allows us to make async/await calls in the action creators

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;