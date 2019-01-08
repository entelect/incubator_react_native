import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import validator from 'validator';

import ToolbarWrapperView from '../../sub-components/toolbar-wrapper/toolbar-wrapper.view';
import ButtonView from '../../sub-components/button/button.view';
import InputFieldView from '../../sub-components/input-field/input-field.view';
import secretScreenNavigation from '../secret-screen/secret-screen.navigation';
import { dimensionsService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';
import entelectColors from '../../assets/colors/entelect-colors';
import borderStyle from '../../assets/styles/border.style';

const { width } = dimensionsService.getScreenDimensions();

export default class DemoScreenView extends Component {
    constructor(props) {
        super(props);

        this.renderButtons = this.renderButtons.bind(this);
        this.renderInputFields = this.renderInputFields.bind(this);
        this.renderColorsSlider = this.renderColorsSlider.bind(this);
        this.renderColorItem = this.renderColorItem.bind(this);
        this.setInputField = this.setInputField.bind(this);
        this.registerInputFieldRef = this.registerInputFieldRef.bind(this);
        this.setActiveColor = this.setActiveColor.bind(this);

        this.state = {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            activeColor: colors.limeGreen50 || '#F3FFE6',
            activeColorKey: 'limeGreen50'
        };

        this.inputRefs = { input2: null, input3: null, input4: null, input5: null };
    }

    render() {
        return (
            <ToolbarWrapperView
                title="Demo"
                navigation={this.props.navigation}
                style={styles.demoScreenWrapper}
            >
                {DemoScreenView.renderHeader()}
                {DemoScreenView.renderSeparator()}
                {DemoScreenView.renderResponsiveness()}
                {DemoScreenView.renderSeparator()}
                {this.renderButtons()}
                {DemoScreenView.renderSeparator()}
                {this.renderInputFields()}
                {DemoScreenView.renderSeparator()}
                {this.renderColorsSlider()}
            </ToolbarWrapperView>
        );
    }

    static renderHeader() {
        return (
            <View style={styles.header}>
                <MaterialIcon name="pets" color={colors.secondaryColor1} size={width * 0.3} />
                <View>
                    <Text style={[textStyle.header1, styles.headerText]}>
                        {'Welcome to the Demo Screen'}
                    </Text>
                    <Text style={[textStyle.header4, styles.headerText]}>
                        {'This screen will demonstrate a few of this apps features and components'}
                    </Text>
                </View>
            </View>
        );
    }

    static renderResponsiveness() {
        return (
            <View style={styles.section}>
                {DemoScreenView.renderTitleText('RESPONSIVENESS')}
                {DemoScreenView.renderTitleText(
                    'This app scales device rotation and with multi-window mode',
                    true
                )}
                <View style={styles.iconWrapper}>
                    <MaterialIcon
                        name="screen-rotation"
                        color={colors.secondaryColor1}
                        size={width * 0.1}
                    />
                    {DemoScreenView.renderTitleText('Give it a try!', true)}
                </View>
            </View>
        );
    }

    renderButtons() {
        return (
            <View style={styles.section}>
                {DemoScreenView.renderTitleText('BUTTONS')}
                {DemoScreenView.renderTitleText('Working button', true)}
                <ButtonView
                    title="NAVIGATE TO THE SECRET SCREEN"
                    onPress={() => this.props.navigation.navigate(secretScreenNavigation.id)}
                />
                {DemoScreenView.renderTitleText('Disabled button', true)}
                <ButtonView title="DISABLED" disabled onPress={() => null} />
                {DemoScreenView.renderTitleText('Loading button', true)}
                <ButtonView title="LOADING" isLoading onPress={() => null} />
                {DemoScreenView.renderTitleText('Button with custom style', true)}
                <ButtonView
                    title="CUSTOM STYLE"
                    onPress={() => null}
                    style={styles.customStyleButton}
                    titleStyle={[textStyle.header4, textStyle.shadow, textStyle.alternateColor]}
                />
                {DemoScreenView.renderTitleText('Button with custom children', true)}
                <ButtonView onPress={() => null} contentStyle={styles.customChildButton}>
                    <MaterialIcon
                        name="extension"
                        color={colors.alternateTextColor}
                        size={width * 0.1}
                    />
                    <Text style={[textStyle.header3, textStyle.alternateColor]}>
                        {'CUSTOM CHILDREN'}
                    </Text>
                </ButtonView>
            </View>
        );
    }

    renderInputFields() {
        const { input1, input2, input3, input4, input5 } = this.state;
        return (
            <View style={styles.section}>
                {DemoScreenView.renderTitleText('INPUT FIELDS')}
                {DemoScreenView.renderTitleText('Regular input with a placeholder', true)}
                <InputFieldView
                    title="Username"
                    placeholder="Please enter your username"
                    value={input1}
                    onChange={this.setInputField(1)}
                    nextFocusRef={this.inputRefs.input2}
                />
                {DemoScreenView.renderTitleText('Password input without a placeholder', true)}
                <InputFieldView
                    title="Password"
                    isSecure
                    value={input2}
                    onChange={this.setInputField(2)}
                    registerInputRef={this.registerInputFieldRef(2)}
                    nextFocusRef={this.inputRefs.input3}
                />
                {DemoScreenView.renderTitleText('Optional phone-pad input with validation', true)}
                <InputFieldView
                    title="Mobile number"
                    placeholder="Enter your ZA mobile number (e.g. 082 491 0069)"
                    isOptional
                    shouldValidate
                    valid={validator.isMobilePhone(input3, ['en-ZA'])}
                    keyboardType="phone-pad"
                    value={input3}
                    onChange={this.setInputField(3)}
                    registerInputRef={this.registerInputFieldRef(3)}
                    nextFocusRef={this.inputRefs.input4}
                />
                {DemoScreenView.renderTitleText('Password input with validation', true)}
                <InputFieldView
                    title="Password"
                    placeholder="Enter a password between 6 and 12 characters"
                    isSecure
                    shouldValidate
                    valid={validator.isLength(input4, { min: 6, max: 12 })}
                    value={input4}
                    onChange={this.setInputField(4)}
                    registerInputRef={this.registerInputFieldRef(4)}
                    nextFocusRef={this.inputRefs.input5}
                />
                {DemoScreenView.renderTitleText('Input with an error message', true)}
                <InputFieldView
                    title="Username"
                    placeholder="Please enter your new username"
                    errorMessage="Something went wrong while trying to update your username"
                    value={input5}
                    onChange={this.setInputField(5)}
                    registerInputRef={this.registerInputFieldRef(5)}
                />
            </View>
        );
    }

    renderColorsSlider() {
        const { activeColor, activeColorKey } = this.state;
        const selectedColorStyle = [
            styles.selectedColor,
            borderStyle.radiusOnlyBorder,
            { backgroundColor: activeColor }
        ];
        return (
            <View style={styles.sectionWrapper}>
                <View style={styles.section}>
                    {DemoScreenView.renderTitleText('COLOUR PALLET SLIDER')}
                    {DemoScreenView.renderTitleText('Pick a colour', true)}
                </View>
                <ScrollView
                    contentContainerStyle={styles.horizontalScroll}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {_.map(entelectColors, this.renderColorItem)}
                </ScrollView>
                <View style={selectedColorStyle}>
                    <Text style={[textStyle.header1, textStyle.alternateColor, textStyle.shadow]}>
                        {activeColor}
                    </Text>
                    <Text style={[textStyle.header4, textStyle.alternateColor, textStyle.shadow]}>
                        {activeColorKey}
                    </Text>
                </View>
            </View>
        );
    }

    static renderSeparator() {
        return <View style={styles.separator} />;
    }

    static renderTitleText(text, secondary) {
        return (
            <Text
                style={[
                    textStyle.header2,
                    styles.sectionText,
                    secondary && [textStyle.header4, styles.sectionSecondaryText]
                ]}
            >
                {text}
            </Text>
        );
    }

    renderColorItem(item, key) {
        if (item === colors.transparent) {
            return null;
        }
        const style = [
            styles.colorPickerItem,
            borderStyle.radiusOnlyBorder,
            { backgroundColor: item }
        ];
        return (
            <TouchableOpacity key={key} style={style} onPress={this.setActiveColor(item, key)} />
        );
    }

    setInputField(index) {
        return value => this.setState({ [`input${index}`]: value });
    }

    registerInputFieldRef(index) {
        return ref => (this.inputRefs[`input${index}`] = ref);
    }

    setActiveColor(color, key) {
        return () => {
            this.setState({ activeColor: color });
            this.setState({ activeColorKey: key });
        };
    }
}

DemoScreenView.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    demoScreenWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: width * 0.1
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: width * 0.1
    },
    headerText: {
        paddingHorizontal: width * 0.1,
        paddingVertical: width * 0.02,
        textAlign: 'center'
    },
    section: {
        width: '100%'
    },
    separator: {
        width: '90%',
        borderTopWidth: 1,
        borderTopColor: colors.secondaryColor3,
        marginVertical: width * 0.04
    },
    sectionWrapper: {
        width: '100%'
    },
    sectionText: { paddingBottom: width * 0.02, marginHorizontal: '5%' },
    sectionSecondaryText: { paddingTop: width * 0.03 },
    iconWrapper: {
        paddingHorizontal: '5%',
        paddingVertical: width * 0.04,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    customStyleButton: {
        backgroundColor: colors.secondaryColor3,
        borderWidth: width * 0.005,
        borderColor: colors.primaryColor3,
        shadowColor: colors.shadowColor,
        shadowOffset: { width: width * 0.002, height: width * 0.002 },
        shadowRadius: width * 0.01,
        shadowOpacity: 0.5,
        elevation: width * 0.01,
        zIndex: 5
    },
    customChildButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontalScroll: {
        paddingHorizontal: width * 0.01
    },
    colorPickerItem: {
        height: width * 0.1,
        width: width * 0.1,
        margin: width * 0.01,
        shadowColor: colors.shadowColor,
        shadowOffset: { width: width * 0.001, height: width * 0.001 },
        shadowRadius: width * 0.005,
        shadowOpacity: 0.5,
        elevation: width * 0.005
    },
    selectedColor: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.25,
        width: '90%',
        marginTop: width * 0.05,
        shadowColor: colors.shadowColor,
        shadowOffset: { width: width * 0.001, height: width * 0.001 },
        shadowRadius: width * 0.005,
        shadowOpacity: 0.5,
        elevation: width * 0.005
    }
});
