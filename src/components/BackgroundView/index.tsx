import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { Container } from './styles';

export const BackgroundView: React.FC<> = ({ children }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle={title === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors.background}
      />
      <Container>{children}</Container>
    </>
  );
};

export default BackgroundView;
