import {StylesProvider} from '@idkman/react-native-styles';
import React from 'react';

import MyFunctionComponent from './MyFunctionComponent';
import {theme} from './theme';

export default function App() {
  return (
    <StylesProvider theme={theme}>
      <MyFunctionComponent />
    </StylesProvider>
  );
}
