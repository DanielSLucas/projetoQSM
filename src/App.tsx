import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0B8F82" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: "#0B8F82" }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}

export default App;
