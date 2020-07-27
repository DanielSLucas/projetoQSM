import React, { useRef, useCallback, ComponentProps } from 'react';

import {
  CharacterContainer,
  CharacterNum,
  CharacterName,
  CharacterNameText,
  Divisor,
  Hints,
  HintsTitle,
  Hint,
  HintNum,
  CurrentPageContainer,
  ArrowButton,
  PageNum,
  Icon,
  Button,
  ButtonText,
} from './styles';

import Input from '../input';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useCharacter } from '../../hooks/character';

interface CreateCharacterFormData {
  characterName: string;
  hint1: string;
  hint2: string;
  hint3: string;
  hint4: string;
  hint5: string;
}

interface Props  {
  number: number;
}

const CharacterForm: React.FC<Props> = ({ number }) => {
  const formRef = useRef<FormHandles>(null);

  const { addCharacter, characters } = useCharacter();

  const handleSubmit = useCallback((data: CreateCharacterFormData) => {
    const newCharacter = {
      id: number,
      ...data,
      score: 5,
    };

    addCharacter(newCharacter);

  }, []);

  return (
    <CharacterContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <CharacterNum>PERSONAGEM {number}</CharacterNum>
        <CharacterName>
          <CharacterNameText>Nome: </CharacterNameText>
          <Input name="characterName" />
        </CharacterName>

        <Divisor/>

        <Hints>
          <HintsTitle>DICAS</HintsTitle>
          <Hint>
            <HintNum>1 - </HintNum>
            <Input name="hint1" />
          </Hint>
          <Hint>
            <HintNum>2 - </HintNum>
            <Input name="hint2" />
          </Hint>
          <Hint>
            <HintNum>3 - </HintNum>
            <Input name="hint3" />
          </Hint>
          <Hint>
            <HintNum>4 - </HintNum>
            <Input name="hint4" />
          </Hint>
          <Hint>
            <HintNum>5 - </HintNum>
            <Input name="hint5" />
          </Hint>

        </Hints>

        <CurrentPageContainer>

          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            <ButtonText> SALVAR </ButtonText>
          </Button>

          {/* <PageNum> + </PageNum> */}
          {/* <ArrowButton>
            <Icon name="arrow-right" size={24} color="#FFF"/>
          </ArrowButton> */}
        </CurrentPageContainer>
      </Form>
    </CharacterContainer>
  );
}

export default CharacterForm;
