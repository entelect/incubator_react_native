import React from 'react';
import { shallow } from 'enzyme';

import DrawerIconView from '../drawer-icon.view';

describe('DrawerIconView - DOES IT RENDER', () => {
    const props = {
        icon: 'menu',
        tintColor: '#F0F'
    };

    it('should render without crashing with no props', () => {
        shallow(<DrawerIconView />);
    });

    it('should render without crashing with all props', () => {
        shallow(<DrawerIconView {...props} />);
    });
});
