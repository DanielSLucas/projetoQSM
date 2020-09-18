import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import CreateCharacters from '../pages/CreateCharacters';
import Game from '../pages/Game';
import ScoreBoard from '../pages/ScoreBoard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#0B8F82' },
    }}
  >
    <Auth.Screen name="Main" component={Main} />
    <Auth.Screen name="CreateCharacters" component={CreateCharacters} />
    <Auth.Screen name="Game" component={Game} />
    <Auth.Screen name="ScoreBoard" component={ScoreBoard} />
  </Auth.Navigator>
);

export default AuthRoutes;
