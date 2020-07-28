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

export const ButtonsContainer = styled.View`
  margin: auto;
  margin-left: 30px;
  margin-right: 30px;
  width: 340px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 320px;
  height: 64px;
  margin: 10px;

  background: #1ABC9C;
  border: 1.5px solid #FFF;
  border-radius: 16px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-family: "RubikMonoOne-Regular";
  font-size: 24px;
  text-align: center;
`;
