import React from 'react';
import {StylesProvider} from 'react-native-styles';

import MyFunctionComponent from './MyFunctionComponent';
import {theme} from './theme';

export default function App() {
  return (
    <StylesProvider theme={theme}>
      <MyFunctionComponent />
    </StylesProvider>
  );
}
