import { createNavigationObject } from '../../navigation/navigation-creator/navigation-utilities';
import SecretScreenView from './secret-screen.view';

const screenId = 'SecretScreen';
const navigationOptions = { drawerLockMode: 'locked-closed', hidden: true };

const navigationObject = createNavigationObject(screenId, SecretScreenView, navigationOptions);

export default navigationObject;
