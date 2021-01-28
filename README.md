# @idkman/react-native-styles

* 🏆 Ulitmate styling solution for React-Native.
* 🎨 Out of box theming solution.
* 💪 Dynamically changing styles based on props.
* 🅰️ Easy and intuitive API - built with simplicity in mind.
* 📘 First-class TypeScript support.
* 👻 Heavily inspired by `@material-ui/styles` package

<br /><br />

## Installation

```sh
npm install @idkman/react-native-styles
```

or 

```sh
yarn add @idkman/react-native-styles
```

<br /><br />

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
    backgroundColor: theme.palette.primary,
  },
  text: {
    color: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

export default function MyComponent() {
  const stylesheet = useStyles();

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is a green text on blue background.</Text>
    </View>
  );
}
```

#### Alternative way - using ad-hoc

Simple `withStyles` ad-hoc (works with class-based components).

> Note that in this example we are using `createStyles` utility function - read more in ["Note on TypeScript"](#note-on-typescript) section.

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
    backgroundColor: theme.palette.primary,
  },
  text: {
    color: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function MyComponent(props: IProps) {
  const {stylesheet} = props;

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is a green text on blue background.</Text>
    </View>
  );
}

export default withStyles(styles)(MyComponent);
```

<br /><br />

## Changing styles based on props

#### Using `useStyles` hook

It's as easy as injecting props into the hook call.

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
    backgroundColor: theme.palette.primary,
  },
  text: (props: {textFontSize: number}) => ({ // here we are using dynamic-styles function
    color: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: props.textFontSize, // here we are defining fontSize based on given props
  }),
}));

export default function MyComponent(props: {textFontSize: number}) {
  const stylesheet = useStyles(props); // here we are passing props to our hook

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is a green text on blue background.</Text>
    </View>
  );
}
```

> If you have a sharp eye, you must have noticed that we can use our `useStyles` hook not only with props,
> but also with state and other data types, based on hook call position in our function component.
> Just remember to don't break react hooks rules.

#### Using `withStyles` ad-hoc

You don't have to pass props manually. Ad-hoc will capture props and made them automatically available for styling function.

```typescript jsx
//TODO: ...
```

<br /><br />

## Note on TypeScript

If you are using TypeScript it's highly recommended for you to use `createStyles` utility function.

This tiny method will help you construct your style rules object easily, preventing TS's `type widening` problem.

Under the hood it does literally nothing more than instructing TypeScript to correctly narrow types.

```typescript jsx
import {createStyles} from '@idkman/react-native-styles';

const styles = createStyles((theme: MyTheme) => ({ ... }));
```

<br /><br />

## License

MIT
