/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebase } from '@react-native-firebase/auth';
import '@react-native-firebase/app'

console.log(firebase.apps)

AppRegistry.registerComponent(appName, () => App);
