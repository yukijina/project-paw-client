import { SEARCH_PET, FETCH_PETS } from './types';
import pets from '../apis/pets';
import history from '../history';

export const searchPetFormAction = petData => {
    return  {
        type: SEARCH_PET,
        petData
    }
}

export const searchPet = (petData) => async dispatch => {
    const response = await pets.get(`/animals?species=${petData.species}&gender=${petData.gender}`);
    // response.data.map(({name}) => console.log(name))
        dispatch({
            type: FETCH_PETS,
            payload: response.data
         })
        
        history.push('/pets')

        // dispatch(processingPetsData)
}

//  export const processingPetsData = pets => {
//     let petsData;
//     if(pets.length === 0) {
//         petsData = null
//     } else {
//         petsData = pets.map(pet => {
//             return {
//                 id : pet.id, 
//                 species: pet.species, 
//                 name: pet.name, 
//                 age: pet.age, 
//                 gender: pet.gender, 
//                 color: pet.color,
//                 coatLength: pet.coatLength, 
//                 personality: pet.personality, 
//                 description: pet.description   
//             }
//         })
//         return {
//             type: 'FETCH_PETS',
//             payload: petsData
//         }
//     }
// }
// export const searchPet = petData => {
//     return dispatch => {
//     console.log("clicked", petData)
//         return fetch(`http://localhost:8000/animals?species=${petData.species}&gender=${petData.gender}`)
//         .then(resp=> {console.log(resp.json())})
//     }
// }
