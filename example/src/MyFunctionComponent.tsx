import {makeStyles} from '@idkman/react-native-styles';
import React from 'react';
import {Text, View} from 'react-native';

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
