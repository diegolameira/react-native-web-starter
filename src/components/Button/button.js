import React from 'react';

import { STouchable, SText } from './styles';

export default ({onPress, title, children, ...props}) =>
  <STouchable {...props} onClick={onPress} onPress={onPress}>
    <SText {...props}>{ title || children }</SText>
  </STouchable>;
