import {
    createNavigationObject,
    getDrawerIcon
} from '../../navigation/navigation-creator/navigation-utilities';
import DemoScreenView from './demo-screen.view';

const screenId = 'DemoScreen';
const navigationOptions = { drawerLabel: 'Demo', drawerIcon: getDrawerIcon('pets') };

const navigationObject = createNavigationObject(screenId, DemoScreenView, navigationOptions);

export default navigationObject;
