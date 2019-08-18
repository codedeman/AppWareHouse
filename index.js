/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Product from './components/Product';
import Customer from './components/Customer';


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Customer);
