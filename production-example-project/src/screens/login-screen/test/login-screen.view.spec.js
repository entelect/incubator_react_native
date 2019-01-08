import React from 'react';
import { shallow, mount } from 'enzyme';

import LoginScreenView from '../login-screen.view';
import homeScreenNavigation from '../../home-screen/home-screen.navigation';

describe('LoginScreenView - DOES IT RENDER', () => {
    const navigation = {
        navigate: jest.fn().mockName('navigate')
    };
    const setUsernameAction = jest.fn().mockName('setUsernameAction');
    const setPasswordAction = jest.fn().mockName('setPasswordAction');
    const loginAsyncAction = jest.fn().mockName('loginAsyncAction');
    const props = {
        navigation,
        isLoading: true,
        username: 'username',
        password: 'password',
        errorMessage: 'errorMessage',
        tintColor: '#F0F',
        setUsernameAction,
        setPasswordAction,
        loginAsyncAction
    };

    beforeEach(() => {
        navigation.navigate.mockClear();
        setUsernameAction.mockClear();
        setPasswordAction.mockClear();
        loginAsyncAction.mockClear();
        loginAsyncAction.mockImplementation(() => Promise.resolve(true));
    });

    it('should render without crashing with no props', () => {
        shallow(<LoginScreenView />);
    });

    it('should render without crashing with all props', () => {
        shallow(<LoginScreenView {...props} />);
    });

    it('should render without crashing when mounting', () => {
        mount(<LoginScreenView {...props} />);
    });

    it('should navigate to home on successful login', done => {
        shallow(<LoginScreenView {...props} />)
            .find('ButtonView')
            .simulate('press');
        setTimeout(() => {
            expect(loginAsyncAction).toHaveBeenCalledTimes(1);
            expect(navigation.navigate).toHaveBeenCalledWith(homeScreenNavigation.id);
            expect(navigation.navigate).toHaveBeenCalledTimes(1);
            done();
        }, 100);
    });

    it('should not navigate to home on failed login', done => {
        loginAsyncAction.mockImplementation(() => Promise.resolve(false));
        shallow(<LoginScreenView {...props} />)
            .find('ButtonView')
            .simulate('press');
        setTimeout(() => {
            expect(loginAsyncAction).toHaveBeenCalledTimes(1);
            expect(navigation.navigate).toHaveBeenCalledTimes(0);
            done();
        }, 100);
    });
});
