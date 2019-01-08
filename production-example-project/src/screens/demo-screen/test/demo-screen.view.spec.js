import React from 'react';
import { shallow } from 'enzyme';

import DemoScreenView from '../demo-screen.view';

describe('DemoScreenView - DOES IT RENDER', () => {
    it('should render without crashing', () => {
        shallow(<DemoScreenView />);
    });
});
