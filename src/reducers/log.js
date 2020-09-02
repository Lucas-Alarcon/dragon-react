import { LOG_ADD, LOG_DELETE, RESET_LOG } from '../constants/actions';
import moment from 'moment';

let stateInit = {
    logs: []
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case LOG_ADD:
            const { array, value } = action.payload;
            
            if (value.trim() === '' || array.includes(value.trim()))
                return state;

            return { ...state, logs: [...state.logs, `${value} ajouté le ${moment().format('lll')}`] }

        case LOG_DELETE:

            return { ...state, logs: [...state.logs, `${action.payload} supprimé le ${moment().format('lll')}`] }

        case RESET_LOG:

            return { ...state, ...stateInit }

        default:
            return state;
    }
}

export default reducer;