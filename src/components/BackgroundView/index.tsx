import React, { useCallback, useContext, useState } from 'react';
import { StatusBar, Switch } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { Container } from './styles';

interface BackgroundViewProps {
  toggleTheme(): void;
}

export const BackgroundView: React.FC<BackgroundViewProps> = ({
  toggleTheme,
  children,
}) => {
  const { colors, title } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = useCallback(() => {
    setIsEnabled(!isEnabled);
    toggleTheme();
  }, [isEnabled, toggleTheme]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Container>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
        {children}
      </Container>
    </>
  );
};

export default BackgroundView;
