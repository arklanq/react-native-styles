import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {MakeStylesFunc} from './index';
import useTheme from './useTheme';

type NamedStyles<T> = StyleSheet.NamedStyles<T>;

export default function makeStyles<T extends object, S extends NamedStyles<S>>(makeStylesFunc: MakeStylesFunc<T, S>) {
  return () => {
    const theme = useTheme<T>();

    return useMemo(() => {
      return makeStylesFunc(theme);
    }, [makeStylesFunc, theme]);
  };
}
