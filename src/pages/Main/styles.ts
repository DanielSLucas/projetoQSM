import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 232px;
  height: 64px;

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
`;
