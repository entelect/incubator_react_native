import _ from 'lodash';

import CreateAction from '../../redux/action-utilities/action-creator';
import { accountService } from '../../services/services';

const reducerName = 'login-screen';

const setIsLoading = new CreateAction(reducerName, 'SET_IS_LOADING');
export const setIsLoadingAction = setIsLoading.action;

const setUsername = new CreateAction(reducerName, 'SET_USERNAME');
export const setUsernameAction = setUsername.action;

const setPassword = new CreateAction(reducerName, 'SET_PASSWORD');
export const setPasswordAction = setPassword.action;

const setErrorMessage = new CreateAction(reducerName, 'SET_ERROR_MESSAGE');
export const setErrorMessageAction = setErrorMessage.action;

const clearState = new CreateAction(reducerName, 'CLEAR_STATE');
export const clearStateAction = clearState.action;

export function loginAsyncAction() {
    return (dispatch, getState) => {
        const { username, password } = getState().loginScreenReducer;
        if (_.isEmpty(username) || _.isEmpty(password)) {
            dispatch(setErrorMessageAction('Please complete all your login credentials'));
            return Promise.resolve(false);
        }
        dispatch(setErrorMessageAction(''));
        dispatch(setIsLoadingAction(true));
        return accountService
            .login(username, password)
            .then(() => {
                dispatch(clearStateAction());
                return true;
            })
            .catch(error => {
                dispatch(setErrorMessageAction(error));
                dispatch(setIsLoadingAction(false));
                return false;
            });
    };
}

export const initialState = {
    isLoading: false,
    username: '',
    password: '',
    errorMessage: ''
};

export default function loginScreenReducer(state = initialState, action) {
    switch (action.type) {
        case setIsLoading.actionType:
            return { ...state, isLoading: action.payload };
        case setUsername.actionType:
            return { ...state, username: action.payload };
        case setPassword.actionType:
            return { ...state, password: action.payload };
        case setErrorMessage.actionType:
            return { ...state, errorMessage: action.payload };
        case clearState.actionType:
            return initialState;
        default:
            return state;
    }
}
