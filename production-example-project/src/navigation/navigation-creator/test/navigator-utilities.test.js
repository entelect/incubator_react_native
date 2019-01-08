import React from 'react';
import { View } from 'react-native';

import { createNavigationObject, createRouteConfigs } from '../navigation-utilities';

describe('Navigator Utilities - Unit Test', () => {
    describe('Create Navigation Object - Unit Test', () => {
        it('should return an object containing the correct ID and component when no navigationOptions are supplied', () => {
            const expected = {
                id: 'TestScreen',
                component: <View />,
                navigationOptions: null
            };
            const actual = createNavigationObject('TestScreen', <View />);
            expect(actual).toEqual(expected);
        });

        it('should return an object containing the correct ID, component, and navigationOptions', () => {
            const expected = {
                id: 'TestScreen',
                component: <View />,
                navigationOptions: { some: 'options' }
            };
            const actual = createNavigationObject('TestScreen', <View />, { some: 'options' });
            expect(actual).toEqual(expected);
        });
    });

    describe('Create Route Configs - Unit Test', () => {
        it('should return an object containing the correct route configurations', () => {
            const expected = {
                MyTestScreen1: <View />,
                MyTestScreen2: <View />
            };
            const navigationObjects = [
                createNavigationObject('MyTestScreen1', <View />),
                createNavigationObject('MyTestScreen2', <View />)
            ];
            const actual = createRouteConfigs(navigationObjects);
            expect(actual).toEqual(expected);
        });

        it('should return an object containing the correct route configurations when navigationOptions are provided', () => {
            const expected = {
                MyTestScreen1: {
                    screen: <View />,
                    navigationOptions: { some: 'options' }
                },
                MyTestScreen2: <View />
            };
            const navigationObjects = [
                createNavigationObject('MyTestScreen1', <View />, { some: 'options' }),
                createNavigationObject('MyTestScreen2', <View />)
            ];
            const actual = createRouteConfigs(navigationObjects);
            expect(actual).toEqual(expected);
        });
    });
});
