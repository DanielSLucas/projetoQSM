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

            <CharacterForm number={1}/>
            <CharacterForm number={2}/>
            <CharacterForm number={3}/>

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
