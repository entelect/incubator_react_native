import React from 'react';
import { shallow } from 'enzyme';

import SecretScreenView from '../secret-screen.view';

describe('SecretScreenView - DOES IT RENDER', () => {
    it('should render without crashing', () => {
        shallow(<SecretScreenView />);
    });
});
