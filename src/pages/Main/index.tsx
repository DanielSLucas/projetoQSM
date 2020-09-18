import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Button, ButtonText } from './styles';

import { useCharacter } from '../../hooks/character';

const Main: React.FC = () => {
  const navigation = useNavigation();
  const { removeAllCharacters } = useCharacter();

  const handlePress = useCallback(() => {
    removeAllCharacters();
    navigation.navigate('CreateCharacters');
  }, [navigation, removeAllCharacters]);

  return (
    <Container>
      <Button>
        <ButtonText onPress={handlePress}>JOGAR</ButtonText>
      </Button>
    </Container>
  );
};

export default Main;
