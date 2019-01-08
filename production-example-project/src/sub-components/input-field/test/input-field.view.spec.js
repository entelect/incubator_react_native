import React from 'react';
import { shallow, mount } from 'enzyme';

import InputFieldView from '../input-field.view';

describe('InputFieldView - DOES IT RENDER', () => {
    const registerInputRef = jest.fn().mockName('registerInputRef');
    const onChange = jest.fn().mockName('onChange');
    const props = {
        title: 'title',
        placeholder: 'placeholder',
        value: 'value',
        isSecure: true,
        isOptional: true,
        shouldValidate: true,
        valid: true,
        errorMessage: 'error message',
        keyboardType: 'numeric',
        registerInputRef,
        onChange
    };

    beforeEach(() => {
        registerInputRef.mockClear();
        onChange.mockClear();
    });

    it('should render without crashing with no props', () => {
        shallow(<InputFieldView />);
    });

    it('should render without crashing with all props', () => {
        shallow(<InputFieldView {...props} />);
    });

    it('should register the input reference', () => {
        mount(<InputFieldView {...props} />);

        expect(registerInputRef).toHaveBeenCalledTimes(1);
    });

    it('should call the onChange method when the input is changed', () => {
        shallow(<InputFieldView {...props} />)
            .find('TextInput')
            .first()
            .simulate('ChangeText', 'Johny');

        expect(onChange).toHaveBeenCalledWith('Johny');
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
