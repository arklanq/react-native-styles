import {StylesProvider} from '@idkman/react-native-styles';
import React from 'react';

import {theme} from './theme';
import UseStylesFunctionComponent from './UseStylesTestComponent';
import WithStylesTestComponent from './WithStylesTestComponent';

export default function App() {
  return (
    <StylesProvider theme={theme}>
      <UseStylesFunctionComponent fontSize={32} />
      <WithStylesTestComponent fontSize={16} />
    </StylesProvider>
  );
}
