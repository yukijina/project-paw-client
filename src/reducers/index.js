import { combineReducers } from 'redux';
import searchPetForm from './searchPetForm';
import petsReducer from './petsReducer';


const rootReducer = combineReducers({
    searchPetForm,
    pets: petsReducer   
});

export default rootReducer;
