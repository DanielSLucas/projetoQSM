import React, { useCallback } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ScreenTitle,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

import Character from '../../components/Character';

import { useCharacter } from '../../hooks/character';

const Game: React.FC = () => {
  const navigation = useNavigation();
  const { characters, score } = useCharacter();

  const HandleCalculateScore = useCallback(() => {
    navigation.navigate('ScoreBoard');
  }, [navigation]);

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <ScreenTitle>ADIVINHE O PERSONAGEM</ScreenTitle>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{ flex: 1 }}
        >
          {characters.map((character) => (
            <View
              key={character.id}
              style={{ width: Dimensions.get('window').width }}
            >
              <Character character={character} />
            </View>
          ))}

          <ButtonsContainer>
            <Button onPress={HandleCalculateScore} disabled={!score}>
              <ButtonText>PONTUAÇÃO</ButtonText>
            </Button>
          </ButtonsContainer>
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

export default Game;
