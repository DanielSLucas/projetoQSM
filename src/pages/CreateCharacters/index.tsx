import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  ScreenTitle,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

import CharacterForm from '../../components/CharacterForm';

const CreateCharacters: React.FC = () => {
  const [numOfCharacters, setNumOfCharacters] = useState(1);

  return (
    <>
      <Container>
        <ScrollView>
          <ScreenTitle>CRIAÇÃO DE PERSONAGENS</ScreenTitle>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            { }

            <CharacterForm number={1}/>
            <CharacterForm number={2}/>
            <CharacterForm number={3}/>

            <ButtonsContainer>
              {/* <Button>
                <ButtonText>Adicionar personagem</ButtonText>
              </Button> */}

              <Button>
                <ButtonText>Jogar</ButtonText>
              </Button>
            </ButtonsContainer>

          </ScrollView>
        </ScrollView>
      </Container>
    </>
  );
};

export default CreateCharacters;
