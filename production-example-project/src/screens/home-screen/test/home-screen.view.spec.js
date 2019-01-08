import React from 'react';
import { shallow } from 'enzyme';

import HomeScreenView from '../home-screen.view';

describe('HomeScreenView - DOES IT RENDER', () => {
    it('should render without crashing', () => {
        shallow(<HomeScreenView />);
    });
});
