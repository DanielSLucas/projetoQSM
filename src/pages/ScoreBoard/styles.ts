import styled from 'styled-components/native';

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
  margin-top: 20px;
`;

export const ScoreDetails = styled.View`
  margin: 30px;
  width: 320px;
`;

export const ScoreDetailsText = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 10px;
`;

export const CharacterScore = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  margin: 5px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 256px;
  height: 64px;
  margin: 10px;
  margin-top: 80px;

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
