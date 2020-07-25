import React from 'react';

import {
  CharacterContainer,
  CharacterName,
  HintsTitle,
  HintContainer,
  HintText,
  Line,
  Hints,
  HintSquare,
  HintNum,
} from './styles';

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
  return (
    <CharacterContainer>
      <CharacterName>{character.characterName}</CharacterName>

      <HintsTitle>DICAS</HintsTitle>

      <HintContainer>
          <HintText>1 - Seu ator já foi o super homem</HintText>
          <Line/>
      </HintContainer>

      <Hints>
        {/* <HintSquare>
          <HintNum>1</HintNum>
        </HintSquare> */}
        <HintSquare>
          <HintNum>2</HintNum>
        </HintSquare>
        <HintSquare>
          <HintNum>3</HintNum>
        </HintSquare>
        <HintSquare>
          <HintNum>4</HintNum>
        </HintSquare>
        <HintSquare>
          <HintNum>5</HintNum>
        </HintSquare>
      </Hints>
    </CharacterContainer>
  );
}

export default Character;
