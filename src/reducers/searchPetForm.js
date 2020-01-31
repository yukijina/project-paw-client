import { SEARCH_PET } from '../actions/types';

export default (state = {
    species: "",
    age: 0,
    breed: "",
    gender: "",
    city: ""
}, action) => {
    switch(action.type) {
        case SEARCH_PET:
            return action.petData 
        default:
            return state
    }
}