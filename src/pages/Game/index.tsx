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

  useEffect(() => {
    console.log(characters)
  }, []);

  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ScreenTitle>ADIVINHE O PERSONAGEM</ScreenTitle>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex: 1}}>

        {characters.map( arrayItem => (
          <Character key={arrayItem.id} character={arrayItem} />
        ))}

        </ScrollView>

      </ScrollView>
    </Container>
  );
};

export default Game;
