import React, { useCallback, useState } from 'react';

import {
  CharacterContainer,
  ScoreContainer,
  ScoreTitle,
  ScoreText,
  CharacterName,
  HintsTitle,
  HintContainer,
  HintText,
  Line,
  Hints,
  HintSquare,
  HintNum,
  ButtonsGroup,
  Button,
  Icon,
} from './styles';

import { useCharacter } from '../../hooks/character';

interface Character {
  id: number;
  characterName: string;
  hint1: string;
  hint2: string;
  hint3: string;
  hint4: string;
  hint5: string;
}

interface Props {
  character: Character;
}

const Character: React.FC<Props> = ({ character }) => {
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showHint3, setShowHint3] = useState(false);
  const [showHint4, setShowHint4] = useState(false);
  const [showHint5, setShowHint5] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const [localScore, setLocalScore] = useState(6);

  const { setScore } = useCharacter();

  const handleHintPress = useCallback((hintNum: number) => {
    switch (hintNum) {
      case 1:
        setShowHint1(true);
        break;
      case 2:
        setShowHint2(true);
        break;
      case 3:
        setShowHint3(true);
        break;
      case 4:
        setShowHint4(true);
        break;
      case 5:
        setShowHint5(true);
        break;
      default:
        break;
    }
    setLocalScore(state => state - 1);
  }, [])

  const handleWrongPress = useCallback(async () => {
    setLocalScore(0);
    await setScore(0, character.id);
    setShowScore(true);
  }, []);

  const handleRightPress = useCallback(async () => {
    await setScore(localScore, character.id);
    setShowScore(true);
  }, [localScore]);

  return (
    <CharacterContainer>

      {
        showScore ? (

          <ScoreContainer>
            <ScoreTitle>PONTOS</ScoreTitle>
            <ScoreText>{localScore}</ScoreText>
          </ScoreContainer>
        )
          :
          (
            <>
              <CharacterName>{character.characterName}</CharacterName>

              <HintsTitle>DICAS</HintsTitle>

              {showHint1 && (
                <HintContainer>
                  <HintText>1 - {character.hint1}</HintText>
                  <Line />
                </HintContainer>
              )}
              {showHint2 && (
                <HintContainer>
                  <HintText>2 - {character.hint2}</HintText>
                  <Line />
                </HintContainer>
              )}
              {showHint3 && (
                <HintContainer>
                  <HintText>3 - {character.hint3}</HintText>
                  <Line />
                </HintContainer>
              )}
              {showHint4 && (
                <HintContainer>
                  <HintText>4 - {character.hint4}</HintText>
                  <Line />
                </HintContainer>
              )}
              {showHint5 && (
                <HintContainer>
                  <HintText>5 - {character.hint5}</HintText>
                  <Line />
                </HintContainer>
              )}

              <Hints>
                {!showHint1 && (
                  <HintSquare onPress={() => handleHintPress(1)}>
                    <HintNum>1</HintNum>
                  </HintSquare>
                )}
                {!showHint2 && (
                  <HintSquare onPress={() => handleHintPress(2)}>
                    <HintNum>2</HintNum>
                  </HintSquare>
                )}
                {!showHint3 && (
                  <HintSquare onPress={() => handleHintPress(3)}>
                    <HintNum>3</HintNum>
                  </HintSquare>
                )}
                {!showHint4 && (
                  <HintSquare onPress={() => handleHintPress(4)}>
                    <HintNum>4</HintNum>
                  </HintSquare>
                )}
                {!showHint5 && (
                  <HintSquare onPress={() => handleHintPress(5)}>
                    <HintNum>5</HintNum>
                  </HintSquare>
                )}

              </Hints>

              <ButtonsGroup>
                <Button onPress={handleWrongPress}>
                  <Icon name="x" size={64} color="#FFF" />
                </Button>

                <Button onPress={handleRightPress}>
                  <Icon name="check" size={64} color="#FFF" />
                </Button>
              </ButtonsGroup>
            </>
          )
      }




    </CharacterContainer>
  );
}

export default Character;
