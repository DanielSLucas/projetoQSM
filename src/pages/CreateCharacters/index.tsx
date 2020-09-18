import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ScreenTitle,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

import CharacterForm from '../../components/CharacterForm';

const CreateCharacters: React.FC = () => {
  const navigation = useNavigation();

  const [characters, setCharacters] = useState([1, 2]);

  const handlePress = useCallback(() => {
    navigation.navigate('Game');
  }, [navigation]);

  const handleAddCharacter = useCallback(() => {
    const nextID = characters.length + 1;
    setCharacters([...characters, nextID]);
  }, [characters]);

  const characterFormArray = useMemo(() => {
    return characters.map((character) => (
      <CharacterForm key={character} id={character} />
    ));
  }, [characters]);

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <ScreenTitle>CRIAÇÃO DE PERSONAGENS</ScreenTitle>
        <Swiper
          loop={false}
          paginationStyle={{ bottom: 16 }}
          dotColor="#FFF"
          dotStyle={{ opacity: 0.4 }}
          activeDotColor="#FFF"
          style={{ height: 630 }}
        >
          {/* {characterFormArray} */}
          <CharacterForm id={1} />
          <CharacterForm id={2} />
          <CharacterForm id={3} />
          <ButtonsContainer>
            <Button onPress={handleAddCharacter}>
              <ButtonText>+ personagem</ButtonText>
            </Button>

            <Button onPress={handlePress}>
              <ButtonText>Jogar</ButtonText>
            </Button>
          </ButtonsContainer>
        </Swiper>
        {/* <ScrollView horizontal>
          {characterFormArray}

          <ButtonsContainer>
            <Button onPress={handleAddCharacter}>
              <ButtonText>+ personagem</ButtonText>
            </Button>

            <Button onPress={handlePress}>
              <ButtonText>Jogar</ButtonText>
            </Button>
          </ButtonsContainer>
        </ScrollView> */}
      </ScrollView>
    </Container>
  );
};

export default CreateCharacters;
