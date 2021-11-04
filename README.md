# @idkman/react-native-styles

* 💪 Ultimate styling solution for React-Native.
* 🎨 Out of box theming solution.
* 😱 Dynamically changing styles based on props.
* 📘 First-class TypeScript support.
* 😃 Easy and intuitive API.

## Installation

```sh
npm install @idkman/react-native-styles
```

or 

```sh
yarn add @idkman/react-native-styles
```

## Usage

#### Create your own theme

```typescript
export interface MyTheme {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const theme: MyTheme = {
  colors: {
    primary: 'blue',
    secondary: 'green',
  },
};

```

#### Insert `<StylesProvider>` as high as possible in your React tree.

Also pass the newly created theme.

```typescript jsx
import React from 'react';
import {StylesProvider} from '@idkman/react-native-styles';
import {theme} from './theme';

export default function App() {
  return (
    <StylesProvider theme={theme}>
      ...
    </StylesProvider>
  );
}

```

#### Style your components with a breeze

Use the power of `useStyles` hook.

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

#### Alternative way - using ad-hoc

Simple `withStyles` ad-hoc, especially tailored for class-based components.

```typescript jsx
import {withStyles, WithStylesProps, createStyles} from '@idkman/react-native-styles';
import React from 'react';
import {Text, View} from 'react-native';
import {MyTheme} from './theme';

interface IProps extends WithStylesProps<MyTheme> {
  fontSize: number;
}

const styles = createStyles((theme: MyTheme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: (props: IProps) => ({
    color: theme.colors.secondary,
    fontSize: props.fontSize,
    fontWeight: 'bold',
  }),
}));

function UseStylesTestComponent(props: IProps) {
  const {stylesheet} = props;

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is secondary text ({props.fontSize}px).</Text>
    </View>
  );
}

export default withStyles(styles)(UseStylesTestComponent);

```

## Note on TypeScript

If you are using TypeScript it's highly recommended for you to use `createStyles` utility function.

This tiny method will help you construct your style rules object easily, preventing TS's `type widening` problem.

Under the hood it does literally nothing more than instructing TypeScript to correctly narrow types.

```typescript jsx
import {createStyles} from '@idkman/react-native-styles';

const styles = createStyles((theme: MyTheme) => ({ ... }));
```

## License

MIT
