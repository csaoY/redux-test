
import * as constants from './constants';

const defaultState = {
    list:'hahahha'
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LIST:
            return state.set('list', action.value);
        default:
            return state;
    }
}