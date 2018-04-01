import styled from 'styled-components';

import { Touchable, Text } from './shared.styles';

export const STouchable = styled.button`
  ${Touchable};
  ${ ({theme}) => `
  border-color: ${theme.text};
  background-color: ${theme.background};
  `};
`;

export const SText = styled.span`
  ${Text};
  ${ ({theme}) => `
  color: ${theme.text};
  `};
`;
