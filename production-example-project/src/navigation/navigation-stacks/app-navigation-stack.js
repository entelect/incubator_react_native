import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import DrawerMenuView from '../../components/drawer-menu/drawer-menu.view';
import {
    createNavigationObject,
    createRouteConfigs
} from '../navigation-creator/navigation-utilities';
import homeScreenNavigation from '../../screens/home-screen/home-screen.navigation';
import demoScreenNavigation from '../../screens/demo-screen/demo-screen.navigation';
import secretScreenNavigation from '../../screens/secret-screen/secret-screen.navigation';
/* Here you can import your app's main screens' navigation objects */
import { dimensionsService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';

const { width } = dimensionsService.getScreenDimensions();

const AppNavigationStack = createNavigationObject(
    'AppNavigationStack',
    createDrawerNavigator(
        createRouteConfigs([
            homeScreenNavigation,
            demoScreenNavigation,
            secretScreenNavigation
            /* Here you can add your main app's screens' navigation objects */
        ]),
        {
            drawerWidth: width * 0.6,
            drawerBackgroundColor: colors.backgroundColor,
            contentComponent: renderDrawerMenu,
            contentOptions: {
                activeBackgroundColor: colors.primaryColor1,
                activeTintColor: colors.alternateTextColor,
                inactiveBackgroundColor: colors.backgroundColor,
                inactiveTintColor: colors.primaryColor1,
                itemsContainerStyle: { paddingVertical: 0 },
                itemStyle: { height: width * 0.125, flexDirection: 'row', alignItems: 'center' },
                iconContainerStyle: {
                    opacity: 1,
                    width: width * 0.05,
                    marginHorizontal: width * 0.05,
                    alignItems: 'center'
                },
                labelStyle: [
                    textStyle.header4,
                    textStyle.inactiveDrawerItemColor,
                    {
                        margin: 0,
                        fontWeight: 'bold'
                    }
                ],
                activeLabelStyle: textStyle.activeDrawerItemColor
            }
        }
    )
);

function renderDrawerMenu(props) {
    return <DrawerMenuView {...props} />;
}

export default AppNavigationStack;
