import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Linking } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('./assets/images/entelect-logo.jpg')}
                    resizeMode="contain"
                />
                <Text style={styles.welcome}>
                    {"Welcome to Entelect's React Native incubator!"}
                </Text>
                <Text style={styles.instructions}>{'To get started, edit src/app.js'}</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={styles.instructions}>
                    {'You can find the incubator documentation '}
                    <Text
                        style={[styles.instructions, styles.link]}
                        onPress={App.openEntelectIncubator}
                    >
                        {'here'}
                    </Text>
                </Text>
            </View>
        );
    }

    static openEntelectIncubator() {
        Linking.openURL('https://confluence.entelect.co.za/pages/viewpage.action?pageId=28147728');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    logo: { width: '80%', height: '20%' },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    link: {
        color: '#3333FF'
    }
});
