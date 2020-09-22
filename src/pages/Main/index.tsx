import React, { useCallback, useContext, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components/native';

import { Image } from 'react-native';
import {
  Container,
  Button,
  ButtonText,
  ThemeSwitcherButton,
  Icon,
} from './styles';

import { useCharacter } from '../../hooks/character';

import questionMarkIcon from '../../assets/whiteQuestionMark.png';
import greenQuestionMarkIcon from '../../assets/greenQuestionMark.png';

const Main: React.FC = () => {
  const { title, colors, toggleTheme } = useContext(ThemeContext);

  const navigation = useNavigation();
  const { removeAllCharacters } = useCharacter();

  const handlePress = useCallback(() => {
    removeAllCharacters();
    navigation.navigate('CreateCharacters');
  }, [navigation, removeAllCharacters]);

  const buttonIcon = useMemo(() => {
    switch (title) {
      case 'default':
        return <Icon name="sun" size={24} color={colors.text} />;
      case 'light':
        return <Icon name="moon" size={24} color={colors.text} />;
      case 'dark':
        return <Icon name="circle" size={24} color={colors.text} />;
      default:
        return <Icon name="circle" size={24} color={colors.text} />;
    }
  }, [title, colors.text]);

  return (
    <Container>
      <ThemeSwitcherButton onPress={toggleTheme}>
        {buttonIcon}
      </ThemeSwitcherButton>
      <Image
        source={title === 'light' ? greenQuestionMarkIcon : questionMarkIcon}
        style={{ width: 182, height: 182 }}
      />
      <Button>
        <ButtonText onPress={handlePress}>JOGAR</ButtonText>
      </Button>
    </Container>
  );
};

export default Main;
