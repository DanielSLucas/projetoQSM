import React from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  ScreenTitle,
  CharacterContainer,
  CharacterName,
  Hints,
  HintSquare,
  HintText,
} from './styles';

const Game: React.FC = () => {
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ScreenTitle>ADIVINHE O PERSONAGEM</ScreenTitle>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex: 1}}>

          <CharacterContainer>
            <CharacterName>Geralt de Rívia</CharacterName>
            <Hints>
              <HintSquare>
                <HintText>1</HintText>
              </HintSquare>
              <HintSquare>
                <HintText>2</HintText>
              </HintSquare>
              <HintSquare>
                <HintText>3</HintText>
              </HintSquare>
              <HintSquare>
                <HintText>4</HintText>
              </HintSquare>
              <HintSquare>
                <HintText>5</HintText>
              </HintSquare>
            </Hints>
          </CharacterContainer>

        </ScrollView>

      </ScrollView>
    </Container>
  );
};

export default Game;
