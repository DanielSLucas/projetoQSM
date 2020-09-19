import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const CharacterContainer = styled.View`
  margin: 0 30px;
  width: 340px;
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
  color: #fff;
  margin-top: 0px;
`;

export const ScoreText = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 36px;
  text-align: center;
  color: #fff;
  margin-top: 16px;
`;

export const CharacterNameContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CharacterName = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto-Bold';
  margin-top: 32px;
  margin-bottom: 30px;
  margin-left: 12px;
`;

export const HintContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

export const HintText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto-Bold';
  padding: 0;
  position: relative;
  max-width: 245px;
  left: 72px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100px;
  background: #fff;
  margin-top: 47.5px;
  margin-bottom: 45.5px;
  margin-left: 12px;
`;

export const Hints = styled.View`
  width: 100%;
`;

export const HintSquare = styled.View`
  position: absolute;
  left: 0;
  height: 64px;
  width: 344px;
  background: #1abc9c;
  border: 1.5px solid #fff;
  border-radius: 8px;

  margin: 8px 0;

  justify-content: center;
  align-items: center;
`;

export const HintNum = styled.Text`
  color: #fff;
  font-size: 36px;
  font-family: 'RubikMonoOne-Regular';
`;

export const ButtonsGroup = styled.View`
  flex-direction: row;
  margin-top: 24px;
`;

export const Button = styled.TouchableOpacity`
  margin: 0px 20px;
`;

export const Icon = styled(FeatherIcon)``;
