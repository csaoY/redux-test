import {reducer as todoReducer} from '../components/todo/store';
import {reducer as loginReducer} from '../components/login/store'
import { combineReducers } from 'redux-immutable';

const reducer = combineReducers({
    todo:todoReducer,
    login:loginReducer
});
export default reducer;