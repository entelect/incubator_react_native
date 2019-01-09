import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import loginScreenNavigation from '../login-screen/login-screen.navigation';
import homeScreenNavigation from '../home-screen/home-screen.navigation';
import { dimensionsService, accountService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';
import loadingAnimation from '../../assets/animations/entelect-gears-loader';

const { width } = dimensionsService.getScreenDimensions();

export default class SplashScreenView extends Component {
    constructor(props) {
        super(props);

        this.navigateTo = this.navigateTo.bind(this);
        this.handleAutoLogin = this.handleAutoLogin.bind(this);
    }

    componentDidMount() {
        // TODO: This setTimeout should be replaced with a asynchronous method that loads all of the data and state you app needs (such as from a CMS)
        setTimeout(this.handleAutoLogin, 2500);
    }

    render() {
        return (
            <View style={styles.splashScreenWrapper}>
                <LottieView source={loadingAnimation} autoPlay loop />
                <Text style={[textStyle.header1, styles.textStyle]}>
                    {'Welcome to Entelect React Native'}
                </Text>
            </View>
        );
    }

    handleAutoLogin() {
        accountService
            .getUserToken()
            .then(token => {
                if (!token) {
                    this.navigateTo(loginScreenNavigation);
                } else {
                    // TODO: Use the token to log the user in and fetch all his/her information - then navigate to the home screen
                    this.navigateTo(homeScreenNavigation);
                }
            })
            .catch(() => this.navigateTo(loginScreenNavigation));
    }

    navigateTo(navigationObject) {
        return this.props.navigation.navigate(navigationObject.id);
    }
}

SplashScreenView.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    splashScreenWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
        padding: width * 0.15
    },
    textStyle: {
        paddingTop: width * 0.5,
        textAlign: 'center'
    }
});
