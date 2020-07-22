import React, { useRef, useCallback } from 'react';

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

const CharacterForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);


  }, []);

  return (
    <CharacterContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <CharacterNum>PERSONAGEM 1</CharacterNum>
        <CharacterName>
          <CharacterNameText>Nome: </CharacterNameText>
          <Input name="characterName" />
        </CharacterName>

        <Divisor></Divisor>

        <Hints>
          <HintsTitle>DICAS</HintsTitle>
          <Hint>
            <HintNum>1 - </HintNum>
            <Input name="hint1" placeholder="Dica sobre seu personagem"/>
          </Hint>
          <Hint>
            <HintNum>2 - </HintNum>
            <Input name="hint2" placeholder="Dica sobre seu personagem"/>
          </Hint>
          <Hint>
            <HintNum>3 - </HintNum>
            <Input name="hint3" placeholder="Dica sobre seu personagem"/>
          </Hint>
          <Hint>
            <HintNum>4 - </HintNum>
            <Input name="hint4" placeholder="Dica sobre seu personagem"/>
          </Hint>
          <Hint>
            <HintNum>5 - </HintNum>
            <Input name="hint5" placeholder="Dica sobre seu personagem"/>
          </Hint>

        </Hints>

        <CurrentPageContainer>

          <PageNum> + </PageNum>
          {/* <ArrowButton>
            <Icon name="arrow-right" size={24} color="#FFF"/>
          </ArrowButton> */}
        </CurrentPageContainer>
      </Form>
    </CharacterContainer>
  );
}
