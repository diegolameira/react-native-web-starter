import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { withTheme } from 'styled-components';

import { STouchable, SText } from './styles';

export default ({onPress, title, children, ...props}) =>
  <TouchableNativeFeedback onClick={onPress} onPress={onPress}>
    <STouchable {...props}>
      <SText {...props}>{ title || children }</SText>
    </STouchable>
  </TouchableNativeFeedback>
