import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  z-index: -1;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`;

export const Icon = styled(FeatherIcon)``;
