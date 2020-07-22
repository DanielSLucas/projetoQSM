import React, { useRef, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Form } from '@unform/mobile';

import {
  Container,
  ScreenTitle,
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

import Input from '../../components/input';
import { FormHandles } from '@unform/core';


const CreateCharacters: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);


  }, []);

  return (
    <>
      <Container>
        <ScrollView>
        <ScreenTitle>CRIAÇÃO DE PERSONAGENS</ScreenTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CharacterContainer>
              <CharacterNum>PERSONAGEM 1</CharacterNum>
              <CharacterName>
                <CharacterNameText>Nome: </CharacterNameText>
                <Input name="1characterName" />
              </CharacterName>

              <Divisor></Divisor>

              <Hints>
                <HintsTitle>DICAS</HintsTitle>
                <Hint>
                  <HintNum>1 - </HintNum>
                  <Input name="1hint1" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>2 - </HintNum>
                  <Input name="1hint2" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>3 - </HintNum>
                  <Input name="1hint3" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>4 - </HintNum>
                  <Input name="1hint4" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>5 - </HintNum>
                  <Input name="1hint5" placeholder="Dica sobre seu personagem"/>
                </Hint>

              </Hints>

              <CurrentPageContainer>

                <PageNum> 1 </PageNum>
                <ArrowButton>
                  <Icon name="arrow-right" size={24} color="#FFF"/>
                </ArrowButton>
              </CurrentPageContainer>
            </CharacterContainer>

            <CharacterContainer>
              <CharacterNum>PERSONAGEM 2</CharacterNum>
              <CharacterName>
                <CharacterNameText>Nome: </CharacterNameText>
                <Input name="2characterName"/>
              </CharacterName>

              <Divisor></Divisor>

              <Hints>
                <HintsTitle>DICAS</HintsTitle>
                <Hint>
                  <HintNum>1 - </HintNum>
                  <Input name="2hint1" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>2 - </HintNum>
                  <Input name="2hint2" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>3 - </HintNum>
                  <Input name="2hint3" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>4 - </HintNum>
                  <Input name="2hint4" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>5 - </HintNum>
                  <Input name="2hint5" placeholder="Dica sobre seu personagem"/>
                </Hint>

              </Hints>

              <CurrentPageContainer>
                <ArrowButton disabled>
                  <Icon name="arrow-left" size={24} color="#FFF"/>
                </ArrowButton>
                <PageNum> 2 </PageNum>
                <ArrowButton>
                  <Icon name="arrow-right" size={24} color="#FFF"/>
                </ArrowButton>
              </CurrentPageContainer>
            </CharacterContainer>

            <CharacterContainer>
              <CharacterNum>PERSONAGEM 3</CharacterNum>
              <CharacterName>
                <CharacterNameText>Nome: </CharacterNameText>
                <Input name="3characterName"/>
              </CharacterName>

              <Divisor></Divisor>

              <Hints>
                <HintsTitle>DICAS</HintsTitle>
                <Hint>
                  <HintNum>1 - </HintNum>
                  <Input name="3hint1" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>2 - </HintNum>
                  <Input name="3hint2" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>3 - </HintNum>
                  <Input name="3hint3" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>4 - </HintNum>
                  <Input name="3hint4" placeholder="Dica sobre seu personagem"/>
                </Hint>
                <Hint>
                  <HintNum>5 - </HintNum>
                  <Input name="3hint5" placeholder="Dica sobre seu personagem"/>
                </Hint>

              </Hints>

              <CurrentPageContainer>

                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  <ButtonText>JOGAR</ButtonText>
                </Button>

              </CurrentPageContainer>
            </CharacterContainer>
          </ScrollView>
        </Form>
        </ScrollView>
      </Container>
    </>
  );
};

export default CreateCharacters;
