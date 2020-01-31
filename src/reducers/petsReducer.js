import { FETCH_PETS } from '../actions/types';

export default (state = { }, action) => {
        console.log(action.payload)
        switch(action.type) {
            case FETCH_PETS: 
                return action.payload
            default:
                return state
        }
}

// id: "",
//     species: "",
//     name : "",
//     age : "",
//     gender: "",
//     color: "",
//     coatLength: "",
//     personality: [],
//     description: "",
//     healthInformation: []