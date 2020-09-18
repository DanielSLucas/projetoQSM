import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const CharacterContainer = styled.View`
  margin-top: 24px;
  margin-left: 32px;
  margin-right: 32px;
  width: 344px;
  height: 560px;
  background: #1abc9c;
  border: 1.5px solid #fff;
  border-radius: 19px;

  justify-content: center;
  align-items: center;
`;

export const CharacterNum = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

export const CharacterName = styled.View`
  justify-content: center;
  align-items: center;
  margin: 48px auto 16px auto;
  width: 250px;
`;

export const Hints = styled.View``;

export const HintsTitle = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  color: #fff;
  margin-top: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Hint = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const HintNum = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 22px;
  color: #fff;
`;

export const CurrentPageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 52px;
  margin-bottom: -20px;
`;

export const ArrowButton = styled.TouchableOpacity``;

export const PageNum = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  color: #fff;
`;

export const Icon = styled(FeatherIcon)``;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
`;
