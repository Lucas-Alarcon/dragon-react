import { combineReducers } from 'redux';

import dragon from './dragon';
import log from './log';
import chevalier from './chevalier';

export default combineReducers({
    dragon : dragon,
    log : log,
    chevalier : chevalier
});