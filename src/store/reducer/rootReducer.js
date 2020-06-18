import designReducer from './designReducer'
import javascriptReducer from './javascriptReducer'
import finalReducer from './finalReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    webDesign: designReducer,
    javascript: javascriptReducer,
    final: finalReducer
});

export default rootReducer