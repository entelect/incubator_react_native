import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';
import _ from 'lodash';

import DrawerIconView from '../../sub-components/drawer-icon/drawer-icon.view';
import loginScreenNavigation from '../../screens/login-screen/login-screen.navigation';
import { accountService } from '../../services/services';

export default class DrawerMenuView extends Component {
    constructor(props) {
        super(props);

        this.filterDrawerItems = this.filterDrawerItems.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    render() {
        const { itemStyle, labelStyle, iconContainerStyle, inactiveTintColor } = this.props;
        return (
            <View style={styles.drawerWrapper}>
                <DrawerItems {...this.props} items={this.filterDrawerItems()} />
                <TouchableOpacity style={itemStyle} onPress={this.handleLogout}>
                    <DrawerIconView
                        icon="exit-to-app"
                        tintColor={inactiveTintColor}
                        style={iconContainerStyle}
                    />
                    <Text style={labelStyle}>{'Logout'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    filterDrawerItems() {
        const { items, descriptors } = this.props;
        return _.filter(items, ({ key }) => !_.get(descriptors, `${key}.options.hidden`));
    }

    handleLogout() {
        accountService
            .logout()
            .then(() => this.props.navigation.navigate(loginScreenNavigation.id));
    }
}

DrawerMenuView.propTypes = {
    navigation: PropTypes.object,
    items: PropTypes.arrayOf(Object),
    descriptors: PropTypes.object,
    inactiveTintColor: PropTypes.string,
    itemStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    labelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    iconContainerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array])
};

const styles = StyleSheet.create({
    drawerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '100%'
    }
});
