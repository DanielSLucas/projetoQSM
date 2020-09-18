import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Image } from 'react-native';
import { Container, Button, ButtonText } from './styles';

import { useCharacter } from '../../hooks/character';

import questionMarkIcon from '../../assets/whiteQuestionMark.png';

const Main: React.FC = () => {
  const navigation = useNavigation();
  const { removeAllCharacters } = useCharacter();

  const handlePress = useCallback(() => {
    removeAllCharacters();
    navigation.navigate('CreateCharacters');
  }, [navigation, removeAllCharacters]);

  return (
    <Container>
      <Image source={questionMarkIcon} style={{ width: 182, height: 182 }} />
      <Button>
        <ButtonText onPress={handlePress}>JOGAR</ButtonText>
      </Button>
    </Container>
  );
};

export default Main;
