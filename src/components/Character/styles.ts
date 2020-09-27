import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const CharacterContainer = styled.View`
  margin-top: 0px;
  margin-right: ${width * 0.07639}px;
  margin-bottom: 0px;
  margin-left: ${width * 0.07639}px;
  width: ${width * 0.8657567732735791}px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScoreContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 550px;
`;

export const ScoreTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 36px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-top: 0px;
`;

export const ScoreText = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 36px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-top: ${height * 0.02107}px;
`;

export const CharacterNameContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CharacterName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-family: 'Roboto-Bold';
  margin-top: ${height * 0.04214}px;
  margin-bottom: ${height * 0.03951}px;
  margin-left: ${width * 0.03055}px;
`;

export const HintContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: ${height * 0.1053}px;
`;

export const HintText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-family: 'Roboto-Bold';
  padding: 0;
  position: relative;
  max-width: ${width * 0.6238}px;
  left: ${width * 0.1833}px;
`;

export const Line = styled.View`
  height: 1px;
  width: ${width * 0.2546343450804645}px;
  background: ${(props) => props.theme.colors.text};
  margin-top: ${height * 0.0625600906133523}px;
  margin-bottom: ${height * 0.05992598153489536}px;
  margin-left: ${width * 0.03055}px;
`;

export const Hints = styled.View`
  width: 100%;
`;

export const HintNum = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 36px;
  font-family: 'RubikMonoOne-Regular';
`;

export const ButtonsGroup = styled.View`
  flex-direction: row;
  margin-top: ${height * 0.031609}px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 0px;
  margin-right: ${width * 0.05092}px;
  margin-bottom: 0px;
  margin-left: ${width * 0.05092}px;
`;

export const Icon = styled(FeatherIcon)``;
