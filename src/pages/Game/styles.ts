import styled from 'styled-components/native';

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

export const HintText = styled.Text`
  color: #FFF;
  font-size: 72px;
  font-family: "RubikMonoOne-Regular";
`;
