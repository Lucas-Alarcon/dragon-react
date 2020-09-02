import { 
    DRAGON_NAME, ADD_DRAGON, DELETE_DRAGON, INVERSION_DRAGON, 
    CHEVALIER_NAME, ADD_CHEVALIER, DELETE_CHEVALIER, INVERSION_CHEVALIER, 
    LOG_ADD, LOG_DELETE, RESET_LOG 
} from '../constants/actions';

export const dragonName = payload => {
    return {
        type: DRAGON_NAME, payload
    }
};

export const addDragon = payload => {
    return {
        type: ADD_DRAGON, payload
    }
};

export const deleteDragon = payload => {
    return {
        type: DELETE_DRAGON, payload
    }
};

export const inversionDragon = () => {
    return {
        type: INVERSION_DRAGON
    }
};
export const chevalierName = payload => {
    return {
        type: CHEVALIER_NAME, payload
    }
};

export const addChevalier = payload => {
    return {
        type: ADD_CHEVALIER, payload
    }
};

export const deleteChevalier = payload => {
    return {
        type: DELETE_CHEVALIER, payload
    }
};

export const inversionChevalier = () => {
    return {
        type: INVERSION_CHEVALIER
    }
};

export const logAdd = payload => {
    return {
        type: LOG_ADD, payload
    }
};

export const logDelete = payload => {
    return {
        type: LOG_DELETE, payload
    }
};

export const resetLog = () => {
    return {
        type: RESET_LOG
    }
};