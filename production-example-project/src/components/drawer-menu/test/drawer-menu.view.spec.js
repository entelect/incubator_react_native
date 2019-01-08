import React from 'react';
import { shallow } from 'enzyme';

import DrawerMenuView from '../drawer-menu.view';
import loginScreenNavigation from '../../../screens/login-screen/login-screen.navigation';
import { accountService } from '../../../services/services';

describe('DrawerMenuView - DOES IT RENDER', () => {
    accountService.logout = jest
        .fn()
        .mockName('accountService.logout')
        .mockImplementation(() => Promise.resolve());

    const navigation = {
        navigate: jest.fn().mockName('navigate')
    };
    const props = {
        navigation,
        items: [{ key: 'home' }, { key: 'demo' }],
        descriptors: { home: { options: { hidden: true } }, demo: null },
        inactiveTintColor: '#F0F',
        itemStyle: { flex: 1 },
        labelStyle: { flex: 1 },
        iconContainerStyle: { flex: 1 }
    };

    beforeEach(() => {
        accountService.logout.mockClear();
        navigation.navigate.mockClear();
    });

    it('should render without crashing with no props', () => {
        shallow(<DrawerMenuView />);
    });

    it('should render without crashing with all props', () => {
        shallow(<DrawerMenuView {...props} />);
    });

    it('should log the user out on logout press', done => {
        shallow(<DrawerMenuView {...props} />)
            .find('TouchableOpacity')
            .simulate('press');
        setTimeout(() => {
            expect(accountService.logout).toHaveBeenCalledTimes(1);
            expect(navigation.navigate).toHaveBeenCalledWith(loginScreenNavigation.id);
            expect(navigation.navigate).toHaveBeenCalledTimes(1);
            done();
        }, 100);
    });
});
