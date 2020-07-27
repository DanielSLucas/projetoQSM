import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const CharacterContainer = styled.View`
  margin:  0 30px;
  width: 340px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CharacterName = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-family: "Roboto-Bold";
  text-align: center;
`;

export const HintsTitle = styled.Text`
  margin-top: 10px;
  margin-bottom: 20px;
  color: #FFF;
  font-size: 22px;
  font-family: "RubikMonoOne-Regular";
`;

export const HintContainer = styled.View`
  padding: 5px;
`;

export const HintText = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-family: "Roboto-Bold";
  padding:0;
`;

export const Line = styled.View`
  height: 1px;
  background: #FFF;
`;

export const Hints = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const HintSquare = styled.TouchableOpacity`
  height: 120px;
  width: 120px;
  background: #1ABC9C;
  border: 1.5px solid #FFF;
  border-radius: 15px;

  margin: 15px 10px;

  justify-content: center;
  align-items: center;
`;

export const HintNum = styled.Text`
  color: #FFF;
  font-size: 72px;
  font-family: "RubikMonoOne-Regular";
`;

export const ButtonsGroup = styled.View`
  flex-direction: row;
  margin-top: 24px;
`;

export const Button = styled.TouchableOpacity`
  margin: 0px 20px;
`;

export const Icon = styled(FeatherIcon)``;
