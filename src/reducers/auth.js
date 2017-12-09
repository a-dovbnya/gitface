import {handleActions} from 'redux-actions';
import {authorize, logout} from "../actions/auth";

const initiaState = {
    token: null,
    isAutorized: false
}

export default handleActions({
    [authorize]: (state, action) => ({
        ...state, 
        isAutorized: true
    }),
    [logout]: (state, action) => ({
        ...state,
        isAutorized: false
    })
}, initiaState);

export const getToken = state => state.auth.token;
export const getIsAuthorized = state => state.auth.isAutorized;
