import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenTitle = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 36px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-top: ${height * 0.02634}px;
`;

export const ButtonsContainer = styled.View`
  margin-top: ${height * 0.03}px;
  margin-left: ${width * 0.07639}px;
  margin-right: ${width * 0.07639}px;
  width: ${width * 0.8657567732735791}px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${width * 0.8148299042574862}px;
  height: ${height * 0.08429}px;

  margin-top: ${height * 0.01317054539228469}px;
  margin-right: ${width * 0.02546343450804645}px;
  margin-bottom: ${height * 0.01317054539228469}px;
  margin-left: ${width * 0.02546343450804645}px;

  background: ${(props) => props.theme.colors.primary};
  border: 1.5px solid ${(props) => props.theme.colors.text};
  border-radius: 16px;

  justify-content: center;
  align-items: center;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  text-align: center;
`;
