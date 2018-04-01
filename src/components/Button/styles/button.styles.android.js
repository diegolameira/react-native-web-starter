import styled from 'styled-components/native';

import { Touchable, Text } from './shared.styles';

export const STouchable = styled.View`
  ${Touchable};
  ${ ({theme}) => `
  background-color: ${theme.background};
  border-color: ${theme.text};
  `};
`;

export const SText = styled.Text`
  ${Text};
  ${ ({theme}) => `
  color: ${theme.text};
  `};
`;
