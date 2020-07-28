import React, { useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  ScreenTitle,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

import Character from '../../components/Character';

import { useCharacter } from '../../hooks/character';
import { useNavigation } from '@react-navigation/native';

const Game: React.FC = () => {
  const navigation = useNavigation();
  const { characters } = useCharacter();

  const HandleCalculateScore = useCallback(() => {
    navigation.navigate('ScoreBoard')
  }, [])

  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ScreenTitle>ADIVINHE O PERSONAGEM</ScreenTitle>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex: 1}}>

          {characters.map( character => (
            <Character key={character.id} character={character} />
          ))}

          <ButtonsContainer>

            <Button onPress={HandleCalculateScore}>
              <ButtonText>PONTUAÇÃO</ButtonText>
            </Button>
          </ButtonsContainer>

        </ScrollView>

      </ScrollView>
    </Container>
  );
};

export default Game;
