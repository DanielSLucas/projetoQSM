import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface TextInputProps {
  centered: boolean;
}

export const Container = styled.View`
  height: ${height * 0.05926}px;
  width: ${width * 0.6111}px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-family: 'Roboto-Bold';
  padding: 0;

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
      font-size: 24px;
    `}
`;

export const Line = styled.View`
  height: 1px;
  width: ${width * 0.5856}px;
  background: ${(props) => props.theme.colors.text};
`;

export const DashedLineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const LittleLine = styled.View`
  height: 1px;
  width: ${width * 0.04447}px;
  background: ${(props) => props.theme.colors.text};
`;
