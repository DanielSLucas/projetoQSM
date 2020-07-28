import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  ScreenTitle,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

import CharacterForm from '../../components/CharacterForm';
import { useNavigation } from '@react-navigation/native';

const CreateCharacters: React.FC = () => {

  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('Game');
  }, []);

  return (
    <>
      <Container>
        <ScrollView>
          <ScreenTitle>CRIAÇÃO DE PERSONAGENS</ScreenTitle>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <CharacterForm id={1}/>
            <CharacterForm id={2}/>
            <CharacterForm id={3}/>

            <ButtonsContainer>
              {/* <Button>
                <ButtonText>Adicionar personagem</ButtonText>
              </Button> */}

              <Button onPress={handlePress}>
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
