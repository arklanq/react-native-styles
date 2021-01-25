import {makeStyles} from '@idkman/react-native-styles';
import React from 'react';
import {Text, View} from 'react-native';

import {MyTheme} from './theme';

interface IProps {
  fontSize: number;
}

const useStyles = makeStyles((theme: MyTheme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: (props: IProps) => ({
    color: theme.colors.primary,
    fontSize: props.fontSize,
    fontWeight: 'bold',
  }),
}));

export default function UseStylesTestComponent(props: IProps) {
  const stylesheet = useStyles(props);

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is primary text ({props.fontSize}px).</Text>
    </View>
  );
}
