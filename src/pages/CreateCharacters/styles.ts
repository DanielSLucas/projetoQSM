import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
  margin-top: ${height * 0.0263}px;
`;

export const ButtonsContainer = styled.View`
  margin: auto;
  margin-left: ${width * 0.07639}px;
  margin-right: ${width * 0.07639}px;
  width: ${width * 0.865756}px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${width * 0.81482}px;
  height: ${height * 0.08429149051062204}px;
  margin-top: ${height * 0.0131}px;
  margin-right: ${width * 0.0254}px;
  margin-bottom: ${height * 0.0131}px;
  margin-left: ${width * 0.0254}px;

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
