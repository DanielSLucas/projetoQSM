import React, { useCallback, useRef, useState } from 'react';

import {
  CharacterContainer,
  ScoreContainer,
  ScoreTitle,
  ScoreText,
  CharacterNameContainer,
  CharacterName,
  HintContainer,
  HintText,
  Hints,
  HintNum,
  ButtonsGroup,
  Button,
  Icon,
  Line,
} from './styles';

import { useCharacter } from '../../hooks/character';
import HintSquare from '../HintSquare';

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
  const [showScore, setShowScore] = useState(false);

  const [localScore, setLocalScore] = useState(6);

  const [showCharacterName, setShowCharacterName] = useState(false);
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showHint3, setShowHint3] = useState(false);
  const [showHint4, setShowHint4] = useState(false);
  const [showHint5, setShowHint5] = useState(false);
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

    setLocalScore((state) => state - 1);
  }, []);

  const handleWrongPress = useCallback(async () => {
    setLocalScore(0);
    await setScore(0, character.id);
    setShowScore(true);
  }, [character.id, setScore]);

  const handleRightPress = useCallback(async () => {
    await setScore(localScore, character.id);
    setShowScore(true);
  }, [localScore, character.id, setScore]);

  const toggleShowCharacterName = useCallback(() => {
    setShowCharacterName(!showCharacterName);
  }, [showCharacterName]);

  return (
    <CharacterContainer>
      {showScore ? (
        <ScoreContainer>
          <ScoreTitle>{character.characterName}</ScoreTitle>
          <ScoreText>{localScore}pts</ScoreText>
        </ScoreContainer>
      ) : (
        <>
          <CharacterNameContainer onPress={toggleShowCharacterName}>
            {showCharacterName ? (
              <>
                <Icon name="eye-off" size={24} color="#FFF" />
                <CharacterName>{character.characterName}</CharacterName>
              </>
            ) : (
              <>
                <Icon name="eye" size={24} color="#FFF" />
                <Line />
              </>
            )}
          </CharacterNameContainer>

          <Hints>
            <HintContainer onPress={() => handleHintPress(1)}>
              <HintText>{character.hint1}</HintText>
              <HintSquare hintPressed={showHint1}>
                <HintNum>1</HintNum>
              </HintSquare>
            </HintContainer>

            <HintContainer onPress={() => handleHintPress(2)}>
              <HintText>{character.hint2}</HintText>
              <HintSquare hintPressed={showHint2}>
                <HintNum>2</HintNum>
              </HintSquare>
            </HintContainer>

            <HintContainer onPress={() => handleHintPress(3)}>
              <HintText>{character.hint3}</HintText>
              <HintSquare hintPressed={showHint3}>
                <HintNum>3</HintNum>
              </HintSquare>
            </HintContainer>

            <HintContainer onPress={() => handleHintPress(4)}>
              <HintText>{character.hint4}</HintText>
              <HintSquare hintPressed={showHint4}>
                <HintNum>4</HintNum>
              </HintSquare>
            </HintContainer>

            <HintContainer onPress={() => handleHintPress(5)}>
              <HintText>{character.hint5}</HintText>
              <HintSquare hintPressed={showHint5}>
                <HintNum>5</HintNum>
              </HintSquare>
            </HintContainer>
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
      )}
    </CharacterContainer>
  );
};

export default Character;
