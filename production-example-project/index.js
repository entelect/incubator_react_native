import { AppRegistry } from 'react-native';
import App from './src/app';
import appNameData from './app.json';

AppRegistry.registerComponent(appNameData.name, () => App);
