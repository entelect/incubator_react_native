import React from 'react';
import { shallow } from 'enzyme';

import ButtonView from '../button.view';

describe('ButtonView - DOES IT RENDER', () => {
    const onPress = jest.fn().mockName('onPress');
    const props = {
        isLoading: false,
        title: 'Hello World',
        style: { color: '#F0F' },
        contentStyle: { color: '#F0F' },
        titleStyle: { color: '#F0F' },
        disabled: false,

        onPress
    };

    beforeEach(() => {
        onPress.mockClear();
    });

    it('should render without crashing with no props', () => {
        shallow(<ButtonView />);
    });

    it('should render without crashing with all props', () => {
        shallow(<ButtonView {...props} />);
    });

    it('should render without crashing when loading', () => {
        shallow(<ButtonView {...props} isLoading={true} />);
    });

    it('should render without crashing when disabled', () => {
        shallow(<ButtonView {...props} disabled={true} />);
    });

    it('should render without crashing with children', () => {
        shallow(<ButtonView {...props}>{'Some Child Component'}</ButtonView>);
    });
});
