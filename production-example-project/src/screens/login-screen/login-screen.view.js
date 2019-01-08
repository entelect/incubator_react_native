import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';

import InputFieldView from '../../sub-components/input-field/input-field.view';
import ButtonView from '../../sub-components/button/button.view';
import homeScreenNavigation from '../home-screen/home-screen.navigation';
import { dimensionsService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';

const { width } = dimensionsService.getScreenDimensions();

export default class LoginScreenView extends Component {
    constructor(props) {
        super(props);

        this.registerPasswordRef = this.registerPasswordRef.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.passwordRef = null;
    }

    render() {
        const {
            isLoading,
            username,
            password,
            errorMessage,
            setUsernameAction,
            setPasswordAction
        } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.loginScreenWrapper}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/entelect-logo.png')}
                    resizeMode="contain"
                />
                <Text style={[textStyle.header1, styles.logoText]}>
                    {'Entelect React Native Demo'}
                </Text>
                <InputFieldView
                    title="Username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={setUsernameAction}
                    errorMessage={errorMessage}
                    nextFocusRef={this.passwordRef}
                />
                <InputFieldView
                    title="Password"
                    placeholder="Enter your password"
                    isSecure
                    value={password}
                    onChange={setPasswordAction}
                    errorMessage={errorMessage}
                    registerInputRef={this.registerPasswordRef}
                />
                <ButtonView title="LOGIN" isLoading={isLoading} onPress={this.handleLogin} />
            </ScrollView>
        );
    }

    registerPasswordRef(ref) {
        if (ref) {
            this.passwordRef = ref;
        }
    }

    handleLogin() {
        const { loginAsyncAction, navigation } = this.props;
        loginAsyncAction().then(success => {
            if (success) {
                navigation.navigate(homeScreenNavigation.id);
            }
        });
    }
}

LoginScreenView.propTypes = {
    navigation: PropTypes.object,

    isLoading: PropTypes.bool,
    username: PropTypes.string,
    password: PropTypes.string,
    errorMessage: PropTypes.string,

    setUsernameAction: PropTypes.func,
    setPasswordAction: PropTypes.func,
    loginAsyncAction: PropTypes.func
};

const styles = StyleSheet.create({
    loginScreenWrapper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: width * 0.05,
        backgroundColor: colors.backgroundColor
    },
    logo: { width: width * 0.3, height: width * 0.3, marginBottom: width * 0.05 },
    logoText: {
        flex: 0.2
    }
});
