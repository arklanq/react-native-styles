import {StyleSheet} from 'react-native';

import {NamedStyles, Styles, StylesObject, VariousStyles} from './models';
import {isMakeStylesFunc, isPropsBasedStyles} from './utils/guards';

export default function processStyles<
  T extends object, // theme
  P extends object = object, // props
  S extends StylesObject<P, S> = object // styles
>(theme: T, props: P, styles: Styles<T, P, S>): NamedStyles<S> {
  const rawStyles: StylesObject<P, S> = (isMakeStylesFunc(styles) ? styles(theme) : styles) as StylesObject<P, S>;

  const generatedStyles: Partial<NamedStyles<S>> = {};
  const stylesKeys = Object.keys(rawStyles) as (keyof S)[];

  let key: keyof S;
  for (key of stylesKeys) {
    const inlineStyles = rawStyles[key];
    generatedStyles[key] = isPropsBasedStyles(inlineStyles) ? inlineStyles(props) : (inlineStyles as VariousStyles);
  }

  return StyleSheet.create(generatedStyles as NamedStyles<S>);
}
