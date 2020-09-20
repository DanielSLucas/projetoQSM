import React, { useEffect, useRef, useContext } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { ThemeContext } from 'styled-components/native';

interface HintSquareProps {
  hintPressed: boolean;
}

export const HintSquare: React.FC<HintSquareProps> = ({
  hintPressed,
  children,
}) => {
  const { colors } = useContext(ThemeContext);
  const widthAnimation = useRef(new Animated.Value(344)).current;

  useEffect(() => {
    if (hintPressed) {
      Animated.timing(widthAnimation, {
        toValue: 56,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [widthAnimation, hintPressed]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: 64,
        width: widthAnimation,
        backgroundColor: colors.primary,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: colors.text,
        borderRadius: 8,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Animated.View>
  );
};

export default HintSquare;
