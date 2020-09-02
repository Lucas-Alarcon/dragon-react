import { CHEVALIER_NAME, ADD_CHEVALIER, DELETE_CHEVALIER, INVERSION_CHEVALIER } from '../constants/actions';

let stateInit = {
    chevaliers: [],
    chevalier: ''
}

const reducer = (state = stateInit, action = {}) => {
    
    switch (action.type) {
        
        case CHEVALIER_NAME:

            return { ...state, chevalier: action.payload, message: "" }

        case ADD_CHEVALIER:

            if (action.payload.trim() === '')
                return { ...state, message: "La valeur est vide", chevalier: '' }

            if (state.chevaliers.includes(action.payload.trim()))
                return { ...state, message: "Le chevalier existe déjà", chevalier: '' }

            return { ...state, chevaliers: [...state.chevaliers, action.payload], message: `Chevalier ${state.chevalier} ajouté !`, chevalier: '' }

        case DELETE_CHEVALIER:
            const chevaliers_delete = state.chevaliers.filter(chevalier => chevalier !== action.payload);
            return { ...state, chevaliers: chevaliers_delete }

        case INVERSION_CHEVALIER:
            const chevaliers_inversion = state.chevaliers.reverse();
            return { ...state, chevaliers: chevaliers_inversion }

        default:
            return state;
    }
}

export default reducer;