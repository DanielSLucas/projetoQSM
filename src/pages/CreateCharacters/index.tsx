import React, { useCallback, useMemo, useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

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

  const [characters, setCharacters] = useState([1]);

  const handlePress = useCallback(() => {
    navigation.navigate('Game');
  }, [navigation]);

  const handleAddCharacter = useCallback(() => {
    const nextID = characters.length + 1;
    setCharacters([...characters, nextID]);
  }, [characters]);

  const characterFormArray = useMemo(() => {
    return characters.map((character) => (
      <View
        key={character}
        style={{
          width: Dimensions.get('window').width,
        }}
      >
        <CharacterForm id={character} />
      </View>
    ));
  }, [characters]);

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <ScreenTitle>CRIAÇÃO DE PERSONAGENS</ScreenTitle>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {characterFormArray}

          <ButtonsContainer>
            <Button onPress={handleAddCharacter}>
              <ButtonText>+ personagem</ButtonText>
            </Button>

            <Button onPress={handlePress}>
              <ButtonText>Jogar</ButtonText>
            </Button>
          </ButtonsContainer>
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

export default CreateCharacters;
