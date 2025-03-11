/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import LoginDetails from './src/Screens/LoginDetails';





function App(): React.JSX.Element {
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
          <LoginDetails></LoginDetails>     {/*Login Users Details Page*/}
      </ScrollView>
    </SafeAreaView>
  );

}




export default App;
