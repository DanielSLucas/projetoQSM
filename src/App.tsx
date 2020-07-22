import React from 'react';
import 'react-native-gesture-handler';

import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#0B8F82" />
    <View style={{ flex: 1, backgroundColor: "#0B8F82" }}>
      <Routes/>
    </View>
  </NavigationContainer>
);

export default App;
