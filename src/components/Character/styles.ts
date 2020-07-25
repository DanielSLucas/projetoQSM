import styled from 'styled-components/native';

export const CharacterContainer = styled.View`
  margin: 30px;
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
  color: #FFF;
  font-size: 22px;
  font-family: "RubikMonoOne-Regular";
`;

export const HintContainer = styled.View`
  padding: 5px;
`;

export const HintText = styled.Text`
  color: #FFF;
  font-size: 18px;
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
  justify-content: space-around;
  align-content: space-around;
`;

export const HintSquare = styled.View`
  height: 140px;
  width: 140px;
  background: #1ABC9C;
  border: 1.5px solid #FFF;
  border-radius: 15px;

  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const HintNum = styled.Text`
  color: #FFF;
  font-size: 72px;
  font-family: "RubikMonoOne-Regular";
`;

