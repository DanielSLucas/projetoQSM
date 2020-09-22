import React, { useContext, useMemo } from 'react';
import { StatusBar } from 'react-native';
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
        return <Icon name="sun" size={16} color={colors.text} />;
      case 'light':
        return <Icon name="moon" size={16} color={colors.text} />;
      case 'dark':
        return <Icon name="circle" size={16} color={colors.text} />;
      default:
        return <Icon name="circle" size={16} color={colors.text} />;
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
