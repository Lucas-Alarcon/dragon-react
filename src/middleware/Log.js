import { ADD_DRAGON, DELETE_DRAGON, ADD_CHEVALIER, DELETE_CHEVALIER } from '../constants/actions';
import { logAdd, logDelete } from '../actions/actions-types';

const Log = store => next => action => {

    if(action.type === ADD_DRAGON) {
        store.dispatch(logAdd({array: store.getState().dragon.dragons, value: action.payload}))
    }

    if(action.type === ADD_CHEVALIER) {
        store.dispatch(logAdd({array: store.getState().chevalier.chevaliers, value: action.payload}))
    }

    if(action.type === DELETE_DRAGON || action.type === DELETE_CHEVALIER) {
        store.dispatch(logDelete(action.payload))
    }
  
    const returnAction = next(action)

    return returnAction;

  }


  export default Log;