import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import AppNavigationStack from './navigation/root-navigation-stack';
import store from './redux/store';
import colors from './assets/colors/colors';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={styles.app}>
                    <StatusBar backgroundColor={colors.primaryColor1} barStyle="light-content" />
                    <AppNavigationStack />
                </SafeAreaView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({ app: { flex: 1 } });
