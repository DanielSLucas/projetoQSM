import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';

import AppProvider from './hooks';

import Routes from './routes';
import BackgroundView from './components/BackgroundView';

import defaultTheme from './styles/themes/defaultTheme';
import lightTheme from './styles/themes/lightTheme';

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'default' ? lightTheme : defaultTheme);
  }, [theme.title]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <BackgroundView toggleTheme={toggleTheme}>
            <Routes />
          </BackgroundView>
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
