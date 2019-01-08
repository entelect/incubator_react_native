import { createNavigationObject } from '../../navigation/navigation-creator/navigation-utilities';
import LoginScreenContainer from './login-screen.container';

const screenId = 'LoginScreen';

const navigationObject = createNavigationObject(screenId, LoginScreenContainer);

export default navigationObject;
