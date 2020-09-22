import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components/native';

import Main from '../pages/Main';
import CreateCharacters from '../pages/CreateCharacters';
import Game from '../pages/Game';
import ScoreBoard from '../pages/ScoreBoard';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="CreateCharacters" component={CreateCharacters} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="ScoreBoard" component={ScoreBoard} />
    </Stack.Navigator>
  );
};

export default Routes;
