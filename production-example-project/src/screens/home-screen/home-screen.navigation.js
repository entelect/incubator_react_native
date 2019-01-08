import {
    createNavigationObject,
    getDrawerIcon
} from '../../navigation/navigation-creator/navigation-utilities';
import HomeScreenView from './home-screen.view';

const screenId = 'HomeScreen';
const navigationOptions = { drawerLabel: 'Home', drawerIcon: getDrawerIcon('home') };

const navigationObject = createNavigationObject(screenId, HomeScreenView, navigationOptions);

export default navigationObject;
