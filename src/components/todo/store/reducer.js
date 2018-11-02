
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    list:'这里是你的心上人'
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LIST:
            return state.set('list', action.value);
        default:
            return state;
    }
}
