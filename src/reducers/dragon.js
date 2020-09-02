import { DRAGON_NAME, ADD_DRAGON, DELETE_DRAGON, INVERSION_DRAGON } from '../constants/actions';

let stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"],
    dragon: ''
}

const reducer = (state = stateInit, action = {}) => {
    
    switch (action.type) {
        
        case DRAGON_NAME:

            return { ...state, dragon: action.payload, message: "" }

        case ADD_DRAGON:

            if (action.payload.trim() === '')
                return { ...state, message: "La valeur est vide", dragon: '' }

            if (state.dragons.includes(action.payload.trim()))
                return { ...state, message: "Le dragon existe déjà", dragon: '' }

            return { ...state, dragons: [...state.dragons, action.payload], message: `Dragon ${state.dragon} ajouté !`, dragon: '' }

        case DELETE_DRAGON:
            const dragons_delete = state.dragons.filter(dragon => dragon !== action.payload);
            return { ...state, dragons: dragons_delete }

        case INVERSION_DRAGON:
            const dragons_inversion = state.dragons.reverse();
            return { ...state, dragons: dragons_inversion }

        default:
            return state;
    }
}

export default reducer;