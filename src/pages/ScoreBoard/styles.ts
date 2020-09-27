import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenTitle = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 48px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-top: 0px;
`;

export const ScoreText = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 124px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-top: ${height * 0.02634}px;
`;

export const ScoreDetails = styled.View`
  margin-top: ${height * 0.03951}px;
  margin-right: ${width * 0.07639}px;
  margin-bottom: ${height * 0.03951}px;
  margin-left: ${width * 0.07639}px;
  width: ${width * 0.8148299042574862}px;
`;

export const ScoreDetailsText = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${height * 0.01317}px;
`;

export const CharacterScore = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  margin-top: ${height * 0.006585}px;
  margin-right: ${width * 0.01273}px;
  margin-bottom: ${height * 0.006585}px;
  margin-left: ${width * 0.01273}px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${width * 0.6518}px;
  height: ${height * 0.08429}px;

  margin-top: ${height * 0.1053}px;
  margin-right: ${width * 0.02546}px;
  margin-bottom: ${height * 0.01317}px;
  margin-left: ${width * 0.02546}px;

  background: ${(props) => props.theme.colors.primary};
  border: 1.5px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RubikMonoOne-Regular';
  font-size: 20px;
  text-align: center;
`;
