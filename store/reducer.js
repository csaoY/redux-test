import {reducer as todoReducer} from '../src/components/todo/store';
import { combineReducers } from 'redux-immutable';

const reducer = combineReducers({
    todo: todoReducer
});
export default reducer