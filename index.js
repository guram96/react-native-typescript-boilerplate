/**
 * @guram_soselia
 * This file should have .js extension
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";
import {Provider} from 'react-redux';

import {configureStore} from './src/redux/store';

export const store = configureStore()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});

Navigation.registerComponentWithRedux(`navigation.playground.WelcomeScreen`, () => App, Provider, store);
