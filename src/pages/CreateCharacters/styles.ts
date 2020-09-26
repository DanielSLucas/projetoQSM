import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenTitle = styled.Text`
  font-family: 'RubikMonoOne-Regular';
  font-size: 36px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
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

  background: ${(props) => props.theme.colors.primary};
  border: 1.5px solid ${(props) => props.theme.colors.text};
  border-radius: 16px;

  justify-content: center;
  align-items: center;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RubikMonoOne-Regular';
  font-size: 24px;
  text-align: center;
`;

export const HorizontalView = styled.View`
  flex-direction: row;
`;
