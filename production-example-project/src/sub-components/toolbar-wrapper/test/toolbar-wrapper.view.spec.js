import React from 'react';
import { shallow } from 'enzyme';

import ToolbarWrapperView from '../toolbar-wrapper.view';

describe('ToolbarWrapperView - DOES IT RENDER', () => {
    const navigation = {
        toggleDrawer: jest.fn().mockName('toggleDrawer'),
        goBack: jest.fn().mockName('goBack')
    };
    const props = {
        navigation,
        title: 'title',
        username: 'username',
        password: 'password',
        leftButtonType: ToolbarWrapperView.buttonTypes.toggleDrawer,
        rightButtonType: { icon: 'pets', onPress: () => null },
        style: { backgroundColor: '#F0F' }
    };

    beforeEach(() => {
        navigation.toggleDrawer.mockClear();
        navigation.goBack.mockClear();
    });

    it('should render without crashing with no props', () => {
        shallow(<ToolbarWrapperView>{'Some children components'}</ToolbarWrapperView>);
    });

    it('should render without crashing with all props', () => {
        shallow(<ToolbarWrapperView {...props} />);
    });
});
