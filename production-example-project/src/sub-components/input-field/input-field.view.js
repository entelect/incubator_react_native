import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { dimensionsService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import borderStyle from '../../assets/styles/border.style';
import colors from '../../assets/colors/colors';

const { width } = dimensionsService.getScreenDimensions();
const iconSize = width * 0.075;

export default class InputFieldView extends Component {
    constructor(props) {
        super(props);

        this.renderLabel = this.renderLabel.bind(this);
        this.renderValidationIcon = this.renderValidationIcon.bind(this);
        this.renderPasswordVisibilityToggle = this.renderPasswordVisibilityToggle.bind(this);

        this.getInputFieldStyle = this.getInputFieldStyle.bind(this);
        this.toggleSecureTextEntry = this.toggleSecureTextEntry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            isSecureTextVisible: true
        };
    }

    render() {
        const {
            placeholder,
            value,
            isSecure,
            keyboardType,
            nextFocusRef,
            style,
            onChange,
            registerInputRef
        } = this.props;
        const secure = isSecure && this.state.isSecureTextVisible;
        return (
            <View style={[styles.inputFieldWrapper, style]}>
                {this.renderLabel()}
                <View style={this.getInputFieldStyle()}>
                    <TextInput
                        secureTextEntry={secure}
                        value={value}
                        keyboardType={keyboardType}
                        onChangeText={onChange}
                        style={[textStyle.header5, styles.inputText]}
                        underlineColorAndroid="transparent"
                        placeholder={placeholder}
                        placeholderTextColor={colors.secondaryTextColor}
                        ref={registerInputRef}
                        onSubmitEditing={this.onSubmit}
                        blurOnSubmit={!nextFocusRef}
                    />
                    {this.renderValidationIcon()}
                    {this.renderPasswordVisibilityToggle()}
                </View>
                {this.renderErrorMessage()}
            </View>
        );
    }

    renderLabel() {
        const { title, isOptional } = this.props;
        return (
            <View style={styles.labelWrapper}>
                <Text style={textStyle.header4}>{title}</Text>
                <Text style={[textStyle.header4, textStyle.secondaryColor]}>
                    {isOptional ? 'Optional' : null}
                </Text>
            </View>
        );
    }

    renderValidationIcon() {
        const { value, shouldValidate, valid } = this.props;
        if (!shouldValidate || _.isEmpty(value)) {
            return null;
        }
        const icon = valid ? 'check' : 'close';
        const color = valid ? colors.successColor : colors.errorColor;
        return <MaterialIcon name={icon} size={iconSize} color={color} />;
    }

    renderPasswordVisibilityToggle() {
        if (!this.props.isSecure) {
            return null;
        }
        const icon = this.state.isSecureTextVisible ? 'visibility' : 'visibility-off';
        return (
            <TouchableOpacity onPress={this.toggleSecureTextEntry}>
                <MaterialIcon name={icon} size={iconSize} color={colors.secondaryColor1} />
            </TouchableOpacity>
        );
    }

    renderErrorMessage() {
        return (
            <Text style={[textStyle.header6, styles.errorMessage]}>{this.props.errorMessage}</Text>
        );
    }

    getInputFieldStyle() {
        const { value, shouldValidate, valid, errorMessage } = this.props;
        if (!_.isEmpty(errorMessage) || (!_.isEmpty(value) && shouldValidate && !valid)) {
            return [styles.inputWrapper, borderStyle.defaultBorder, styles.invalidInputWrapper];
        }
        if (!_.isEmpty(value) && shouldValidate && valid) {
            return [styles.inputWrapper, borderStyle.defaultBorder, styles.validInputWrapper];
        }
        return [styles.inputWrapper, borderStyle.defaultBorder];
    }

    toggleSecureTextEntry() {
        this.setState({ isSecureTextVisible: !this.state.isSecureTextVisible });
    }

    onSubmit() {
        const { nextFocusRef } = this.props;
        nextFocusRef && nextFocusRef.focus();
    }
}

InputFieldView.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    isSecure: PropTypes.bool,
    isOptional: PropTypes.bool,
    shouldValidate: PropTypes.bool,
    valid: PropTypes.bool,
    errorMessage: PropTypes.string,
    keyboardType: PropTypes.string,
    nextFocusRef: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),

    onChange: PropTypes.func,
    registerInputRef: PropTypes.func
};

InputFieldView.defaultProps = {
    placeholder: '',
    isSecure: false,
    keyboardType: 'default',
    errorMessage: ''
};

const styles = StyleSheet.create({
    inputFieldWrapper: {
        width: '100%',
        paddingHorizontal: '5%'
    },
    labelWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '1%'
    },
    inputWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '2.5%'
    },
    invalidInputWrapper: {
        borderColor: colors.errorColor
    },
    validInputWrapper: {
        borderColor: colors.successColor
    },
    inputText: {
        flex: 1
    },
    errorMessage: { textAlign: 'right', color: colors.errorColor }
});
