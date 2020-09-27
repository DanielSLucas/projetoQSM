import React, { useEffect, useRef, useContext } from 'react';
import { Animated, Dimensions } from 'react-native';
import { ThemeContext } from 'styled-components/native';

interface HintSquareProps {
  hintPressed: boolean;
}

export const HintSquare: React.FC<HintSquareProps> = ({
  hintPressed,
  children,
}) => {
  const { width, height } = Dimensions.get('window');
  const { colors } = useContext(ThemeContext);
  const widthAnimation = useRef(new Animated.Value(width * 0.8759)).current;

  useEffect(() => {
    if (hintPressed) {
      Animated.timing(widthAnimation, {
        toValue: width * 0.1425,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [widthAnimation, hintPressed, width]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: height * 0.08429,
        width: widthAnimation,
        backgroundColor: colors.primary,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: colors.text,
        borderRadius: 8,
        marginVertical: height * 0.01053,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Animated.View>
  );
};

export default HintSquare;
