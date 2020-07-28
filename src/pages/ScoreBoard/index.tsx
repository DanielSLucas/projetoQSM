import React from 'react';

import {
  Container,
  ScreenTitle,
  ScoreText,
  ScoreDetails,
  ScoreDetailsText,
  CharacterScore,
  Button,
  ButtonText,
} from './styles';

const ScoreBoard: React.FC = () => {
  return (
    <Container>
      <ScreenTitle>PONTOS</ScreenTitle>

      <ScoreText>12</ScoreText>

      <ScoreDetails>
        <ScoreDetailsText>PERSONAGENS</ScoreDetailsText>

        <CharacterScore>1 - Personagem 1 ....... 5</CharacterScore>
        <CharacterScore>2 - Personagem 2 ....... 4</CharacterScore>
        <CharacterScore>3 - Personagem 3 ....... 3</CharacterScore>
      </ScoreDetails>

      <Button>
        <ButtonText>JOGAR NOVAMENTE</ButtonText>
      </Button>
    </Container>
  );
};

export default ScoreBoard;
