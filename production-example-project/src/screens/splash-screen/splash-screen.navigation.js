import { createNavigationObject } from '../../navigation/navigation-creator/navigation-utilities';
import SplashScreenView from './splash-screen.view';

const screenId = 'SplashScreen';

const navigationObject = createNavigationObject(screenId, SplashScreenView);

export default navigationObject;
