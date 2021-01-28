import {createStyles, makeStyles} from '@idkman/react-native-styles';
import React from 'react';
import {Text, View} from 'react-native';

import {MyTheme} from './theme';

interface IProps {
  fontSize: number;
}

const styles = createStyles({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: (props: IProps) => ({
    color: 'red',
    fontSize: props.fontSize,
    fontWeight: 'bold',
  }),
});

/*const useStyles = makeStyles(styles);

export default function UseStylesFunctionComponent(props: IProps) {
  const stylesheet = useStyles(props);

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.text}>Hey! This is a green text on blue background.</Text>
    </View>
  );
}*/
