import {useMemo} from 'react';

import {Styles, StylesObject, UseStylesHook} from './models';
import processStyles from './processStyles';
import useTheme from './useTheme';

function makeStyles<
  T extends object, // theme
  P extends object = object, // props
  S extends StylesObject<P, S> | StylesObject<P, any> = object // styles
>(makeStyles: Styles<T, P, S>): UseStylesHook<P, S> {
  return function useStyles(props: P) {
    const theme = useTheme<T>();

    return useMemo(() => {
      return processStyles(theme, props, makeStyles);
    }, [theme, props, makeStyles]);
  } as UseStylesHook<P, S>;
}

export default makeStyles;
