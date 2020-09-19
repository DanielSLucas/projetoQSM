import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  hintSquare: {
    position: 'absolute',
    left: 0,
    height: 64,
    width: 344,
    backgroundColor: '#1abc9c',
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#FFF',
    borderRadius: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface HintSquareProps {
  hintPressed: boolean;
}

export const HintSquare: React.FC<HintSquareProps> = ({
  hintPressed,
  children,
}) => {
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
    <Animated.View style={[styles.hintSquare, { width: widthAnimation }]}>
      {children}
    </Animated.View>
  );
};

export default HintSquare;
