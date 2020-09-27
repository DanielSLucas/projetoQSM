import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${height * 0.2739}px;
  width: ${width * 0.59}px;
  height: ${height * 0.0842}px;

  background: ${(props) => props.theme.colors.primary};
  border: 1.5px solid ${(props) => props.theme.colors.text};
  border-radius: 16px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
`;

export const ThemeSwitcherButton = styled.TouchableOpacity`
  position: absolute;
  top: ${height * 0.02107}px;
  right: ${width * 0.04074}px;
  z-index: 2;
`;

export const Icon = styled(FeatherIcon)``;
