import styled, { css } from 'styled-components/native';

interface TextInputProps {
  centered: boolean;
}

export const Container = styled.View`
  height: 45px;
  width: 240px;
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
  width: 230px;
  background: ${(props) => props.theme.colors.text};
`;

export const DashedLineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const LittleLine = styled.View`
  height: 1px;
  width: 16px;
  background: ${(props) => props.theme.colors.text};
`;
