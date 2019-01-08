import { bindActionCreators } from 'redux';

import { mapStateToProps, mapDispatchToProps } from '../login-screen.container';
import {
    setUsernameAction,
    setPasswordAction,
    loginAsyncAction,
    initialState
} from '../login-screen.reducer';

describe('loginScreenContainer - Unit test', () => {
    function stateBefore() {
        return {
            loginScreenReducer: {
                ...initialState
            }
        };
    }

    it('should map state to props', () => {
        const actual = mapStateToProps(stateBefore());

        const expected = {
            ...initialState
        };

        expect(actual).toEqual(expected);
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch);

        expect(bindActionCreators).toHaveBeenCalledWith(
            { setUsernameAction, setPasswordAction, loginAsyncAction },
            dispatch
        );
    });
});
