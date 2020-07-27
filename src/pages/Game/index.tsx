import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  ScreenTitle,
} from './styles';

import Character from '../../components/Character';

import { useCharacter } from '../../hooks/character';

const Game: React.FC = () => {
  const { characters } = useCharacter();

  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ScreenTitle>ADIVINHE O PERSONAGEM</ScreenTitle>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex: 1}}>

        {characters.map( character => (
          <Character key={character.id} character={character} />
        ))}

        </ScrollView>

      </ScrollView>
    </Container>
  );
};

export default Game;
