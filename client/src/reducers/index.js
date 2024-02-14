import {combineReducers} from 'redux';
import postReducer from './postReducers';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    post:postReducer,
    error:errorReducer,
    auth:authReducer
});