import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createRouteConfigs } from './navigation-creator/navigation-utilities';
import splashScreenNavigation from '../screens/splash-screen/splash-screen.navigation';
import AuthenticationNavigationStack from './navigation-stacks/authentication-navigation-stack';
import AppNavigationStack from './navigation-stacks/app-navigation-stack';

export default createAppContainer(
    createSwitchNavigator(
        createRouteConfigs([
            splashScreenNavigation,
            AuthenticationNavigationStack,
            AppNavigationStack
        ]),
        {
            initialRouteName: splashScreenNavigation.id
        }
    )
);
