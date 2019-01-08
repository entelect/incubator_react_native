import React from 'react';
import _ from 'lodash';

import DrawerIconView from '../../sub-components/drawer-icon/drawer-icon.view';

export function createNavigationObject(id, component, navigationOptions = null) {
    return {
        id,
        component,
        navigationOptions
    };
}

export function createRouteConfigs(navigationObjects) {
    const routeConfigs = {};
    _.forEach(
        navigationObjects,
        navigationObject =>
            (routeConfigs[navigationObject.id] = navigationObject.navigationOptions
                ? {
                      screen: navigationObject.component,
                      navigationOptions: navigationObject.navigationOptions
                  }
                : navigationObject.component)
    );
    return routeConfigs;
}

export function getDrawerIcon(icon) {
    return props => <DrawerIconView icon={icon} {...props} />;
}
