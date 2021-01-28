import {createStyles, withStyles, WithStylesProps} from '@idkman/react-native-styles';
import React, {Component} from 'react';
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
    color: theme.colors.primary,
    fontSize: props.fontSize,
    fontWeight: 'bold',
  }),
}));

class WithStylesClassComponet extends Component<IProps> {
  render() {
    const {stylesheet} = this.props;

    return (
      <View style={stylesheet.container}>
        <Text style={stylesheet.text}>Hey! This is a green text on blue background.</Text>
      </View>
    );
  }
}

export default withStyles(styles)(WithStylesClassComponet);
