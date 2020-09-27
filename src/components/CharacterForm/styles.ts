import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const CharacterContainer = styled.View`
  margin-top: ${height * 0.0316}px;
  margin-left: auto;
  margin-right: auto;
  width: ${width * 0.8759}px;
  height: ${height * 0.7375}px;
  background: ${(props) => props.theme.colors.primary};
  border: 1.5px solid ${(props) => props.theme.colors.text};
  border-radius: 16px;

  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const CharacterNum = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const CharacterName = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 0.0632}px;
  margin-right: auto;
  margin-bottom: ${height * 0.02107}px;
  margin-left: auto;
  width: ${width * 0.6365}px;
`;

export const Hints = styled.View``;

export const HintsTitle = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  margin-top: ${height * 0.0237}px;
  margin-bottom: ${height * 0.02107}px;
  text-align: center;
`;

export const Hint = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const HintNum = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 22px;
  color: ${(props) => props.theme.colors.text}; ;
`;

export const CurrentPageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${height * 0.0684}px;
  margin-right: ${width * 0.1324}px;
  margin-bottom: -${height * 0.0263}px;
  margin-left: ${width * 0.1324}px;
`;

export const PageNum = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  color: ${(props) => props.theme.colors.text}; ;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
`;
