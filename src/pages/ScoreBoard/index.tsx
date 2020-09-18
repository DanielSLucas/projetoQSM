import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
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
import { useCharacter } from '../../hooks/character';

const ScoreBoard: React.FC = () => {
  const { characters, score } = useCharacter();
  const { navigate } = useNavigation();

  const handlePress = useCallback(() => {
    navigate('Main');
  }, [navigate]);

  return (
    <Container>
      <ScreenTitle>PONTOS</ScreenTitle>

      <ScoreText>{score}</ScoreText>

      <ScoreDetails>
        <ScoreDetailsText>PERSONAGENS</ScoreDetailsText>

        {characters.map((character) => (
          <CharacterScore key={character.id}>
            {character.id} - {character.characterName} ....... {character.score}
          </CharacterScore>
        ))}
      </ScoreDetails>

      <Button onPress={handlePress}>
        <ButtonText>JOGAR NOVAMENTE</ButtonText>
      </Button>
    </Container>
  );
};

export default ScoreBoard;
