import React, { useCallback, useContext, useMemo, useState } from 'react';
import { StatusBar, Switch } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { Container, Button, Icon } from './styles';

interface BackgroundViewProps {
  toggleTheme(): void;
}

export const BackgroundView: React.FC<BackgroundViewProps> = ({
  toggleTheme,
  children,
}) => {
  const { colors, title } = useContext(ThemeContext);

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
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Container>
        <Button onPress={toggleTheme}>{buttonIcon}</Button>
        {children}
      </Container>
    </>
  );
};

export default BackgroundView;
