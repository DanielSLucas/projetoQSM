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
import darkTheme from './styles/themes/darkTheme';

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    switch (theme.title) {
      case 'default':
        setTheme(lightTheme);
        break;
      case 'light':
        setTheme(darkTheme);
        break;
      case 'dark':
        setTheme(defaultTheme);
        break;
      default:
        setTheme(defaultTheme);
        break;
    }
  }, [theme.title]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={{ ...theme, toggleTheme }}>
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
