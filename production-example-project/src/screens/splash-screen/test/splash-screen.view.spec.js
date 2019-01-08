import React from 'react';
import { shallow } from 'enzyme';

import SplashScreenView from '../splash-screen.view';

describe('SplashScreenView - DOES IT RENDER', () => {
    it('should render without crashing', () => {
        shallow(<SplashScreenView />);
    });
});
