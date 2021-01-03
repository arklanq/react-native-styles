# @idkman/react-native-styles

Ulitmate styling solution for react-native

## Installation

```sh
npm install @idkman/react-native-styles
```

or 

```sh
yarn add @idkman/react-native-styles
```

## Usage

App.tsx

```typescript jsx
import React from 'react';
import {StylesProvider} from '@idkman/react-native-styles';

import MyFunctionComponent from './MyFunctionComponent';
import {theme} from './theme';

export default function App() {
  return (
    <StylesProvider theme={theme}>
      <MyFunctionComponent />
    </StylesProvider>
  );
}

```

MyFunctionComponent.tsx

```typescript jsx
import React from 'react';
import {Text, View} from 'react-native';
import {makeStyles} from '@idkman/react-native-styles';

import {MyTheme} from './theme';

const useStyles = makeStyles((theme: MyTheme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

export default function MyFunctionComponent() {
  const stylesheet = useStyles();

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is a blue text.</Text>
    </View>
  );
}
```

## License

MIT
