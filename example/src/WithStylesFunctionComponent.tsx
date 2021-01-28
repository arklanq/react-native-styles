import {withStyles, WithStylesProps} from '@idkman/react-native-styles';
import React from 'react';
import {Text, View} from 'react-native';

import createStyles from '../../src/createStyles';
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

function WithStylesFunctionComponent(props: IProps) {
  const {stylesheet} = props;

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is a green text on blue background.</Text>
    </View>
  );
}

export default withStyles(styles)(WithStylesFunctionComponent);
