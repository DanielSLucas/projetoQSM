import styled from "styled-components/native";
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenTitle = styled.Text`
  font-family: "RubikMonoOne-Regular";
  font-size: 36px;
  text-align: center;
  color: #FFF;
  margin-top: 20px;
`;

export const CharacterContainer = styled.View`
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  width: 340px;
  height: 540px;
  background: #1ABC9C;
  border: 1.5px solid #FFF;
  border-radius: 19px;

  justify-content: center;
  align-items: center;
`;

export const CharacterNum = styled.Text`
  font-family: "RubikMonoOne-Regular";
  font-size: 24px;
  color: #FFF;
`;

export const CharacterName = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CharacterNameText = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 22px;
  margin: 32px auto 32px 24px;
  color: #FFF;
`;

export const CharacterNameinput = styled.TextInput`
  width: 70%;
  font-size: 18px;
  font-family: "Roboto-Bold";
  color: #FFF;
`;

export const Divisor = styled.View`
  width: 90%;
  height: 3px;
  background: #F9F3F3;
`;

export const Hints = styled.View``;

export const HintsTitle = styled.Text`
  font-family: "RubikMonoOne-Regular";
  font-size: 24px;
  color: #FFF;
  margin-top: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Hint = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const HintNum = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 22px;
  color: #FFF;
`;


export const CurrentPageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 52px;
  margin-bottom: -20px;
`;

export const ArrowButton = styled.TouchableOpacity``;

export const PageNum = styled.Text`
  font-family: "RubikMonoOne-Regular";
  font-size: 24px;
  color: #FFF;
`;

export const Icon = styled(FeatherIcon)``;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: #FFF;
  font-family: "RubikMonoOne-Regular";
  font-size: 24px;
`;
