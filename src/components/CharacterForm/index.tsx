import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Alert } from 'react-native';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  CharacterContainer,
  CharacterNum,
  CharacterName,
  Hints,
  HintsTitle,
  Hint,
  HintNum,
  CurrentPageContainer,
  Button,
  ButtonText,
} from './styles';

import Input from '../input';
import { useCharacter } from '../../hooks/character';

interface CreateCharacterFormData {
  characterName: string;
  hint1: string;
  hint2: string;
  hint3: string;
  hint4: string;
  hint5: string;
}

interface Props {
  id: number;
}

const CharacterForm: React.FC<Props> = ({ id }) => {
  const formRef = useRef<FormHandles>(null);

  const { addCharacter } = useCharacter();

  const handleSubmit = useCallback(
    async (data: CreateCharacterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          characterName: Yup.string().required('Nome obrigatório'),
          hint1: Yup.string().required(
            'Todas as dicas devem estar preenchidas'
          ),
          hint2: Yup.string().required(
            'Todas as dicas devem estar preenchidas'
          ),
          hint3: Yup.string().required(
            'Todas as dicas devem estar preenchidas'
          ),
          hint4: Yup.string().required(
            'Todas as dicas devem estar preenchidas'
          ),
          hint5: Yup.string().required(
            'Todas as dicas devem estar preenchidas'
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const newCharacter = {
          id,
          ...data,
          score: 5,
        };

        addCharacter(newCharacter);
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        Alert.alert(
          'Erro ao salvar personagem',
          'Verifique se todos os dados foram preenchidos.'
        );
      }
    },
    [addCharacter, id]
  );

  return (
    <CharacterContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <CharacterNum>PERSONAGEM {id}</CharacterNum>
        <CharacterName>
          <Input dashed name="characterName" />
        </CharacterName>

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
        </CurrentPageContainer>
      </Form>
    </CharacterContainer>
  );
};

export default CharacterForm;
