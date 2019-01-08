import { createStackNavigator } from 'react-navigation';

import {
    createNavigationObject,
    createRouteConfigs
} from '../navigation-creator/navigation-utilities';
import loginScreenNavigation from '../../screens/login-screen/login-screen.navigation';
/* Here you can import your authentication screens' navigation objects (signup, forgot-password, etc.) */

const AuthenticationNavigationStack = createNavigationObject(
    'AuthenticationNavigationStack',
    createStackNavigator(
        createRouteConfigs([
            loginScreenNavigation
            /* Here you can add your authentication screens' navigation objects (signup, forgot-password, etc.). */
        ]),
        {
            headerMode: 'none'
        }
    )
);

export default AuthenticationNavigationStack;
