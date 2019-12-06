/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView, StatusBar,
 
} from 'react-native';


const App: React.FC<any> = () => {
  return(
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="blue"/>
    </SafeAreaView>
  );
}

export default App;
