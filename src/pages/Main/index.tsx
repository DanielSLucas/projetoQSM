import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Button, ButtonText } from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('CreateCharacters');
  }, []);

  return (
    <Container>
      <Button>
        <ButtonText onPress={handlePress}>JOGAR</ButtonText>
      </Button>
    </Container>
  );
};

export default Main;
