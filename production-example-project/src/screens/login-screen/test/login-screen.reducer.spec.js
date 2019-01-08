import loginScreenReducer, {
    setIsLoadingAction,
    setUsernameAction,
    setPasswordAction,
    setErrorMessageAction,
    clearStateAction,
    loginAsyncAction,
    initialState
} from '../login-screen.reducer';

describe('loginScreenReducer - Unit Test', () => {
    function stateBefore() {
        return {
            ...initialState
        };
    }

    it('should return initial state when action is undefined', () => {
        const action = {};

        const actual = loginScreenReducer(undefined, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    it('should return current state when unknown action is dispatched', () => {
        const action = { type: 'SOME_UNKNOWN_ACTION' };

        const currentState = {
            ...stateBefore()
        };

        const actual = loginScreenReducer(currentState, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    describe('setIsLoading', () => {
        it('should set the loading state', () => {
            const action = setIsLoadingAction(true);

            const actual = loginScreenReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                isLoading: true
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('setUsernameAction', () => {
        it('should set the username', () => {
            const action = setUsernameAction('username');

            const actual = loginScreenReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                username: 'username'
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('setPasswordAction', () => {
        it('should set the password', () => {
            const action = setPasswordAction('password');

            const actual = loginScreenReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                password: 'password'
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('setErrorMessageAction', () => {
        it('should set the error message', () => {
            const action = setErrorMessageAction('error message');

            const actual = loginScreenReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                errorMessage: 'error message'
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('clearStateAction', () => {
        it('should set the error message', () => {
            const action = clearStateAction('error message');

            const actual = loginScreenReducer({ some: 'changed state' }, action);

            const expected = stateBefore();

            expect(actual).toEqual(expected);
        });
    });

    describe('loginAsyncAction', () => {
        it('should call the account service with the current username and password state', () => {
            const getState = jest.fn().mockImplementation(() => ({
                loginScreenReducer: { username: 'username', password: 'password' }
            }));
            const dispatch = jest.fn().mockImplementation();

            loginAsyncAction()(dispatch, getState);

            // TODO: Implement and test account service login
        });

        it('should not do anything if username is empty', () => {
            const getState = jest.fn().mockImplementation(() => ({
                loginScreenReducer: { username: 'username', password: '' }
            }));
            const dispatch = jest.fn().mockImplementation();

            loginAsyncAction()(dispatch, getState);

            // TODO: Implement and test account service login
        });

        it('should not do anything if password is empty', () => {
            const getState = jest.fn().mockImplementation(() => ({
                loginScreenReducer: { username: '', password: 'password' }
            }));
            const dispatch = jest.fn().mockImplementation();

            loginAsyncAction()(dispatch, getState);

            // TODO: Implement and test account service login
        });

        it('should not do anything if username and password are empty', () => {
            const getState = jest.fn().mockImplementation(() => ({
                loginScreenReducer: { username: '', password: '' }
            }));
            const dispatch = jest.fn().mockImplementation();

            loginAsyncAction()(dispatch, getState);

            // TODO: Implement and test account service login
        });
    });
});
