import {StyleSheet} from 'react-native';

import {NamedStyles, Styles, StylesObject, VariousStyles} from './models';
import {isInlineStyles, isMakeStylesFunc} from './utils/guards';

export default function processStyles<
  T extends object, // theme
  P extends object = object, // props
  SK extends string = string // styles
>(theme: T, props: P, styles: Styles<T, P, SK>): NamedStyles<Record<SK, VariousStyles>> {
  const rawStyles: StylesObject<P, SK> = (isMakeStylesFunc(styles) ? styles(theme) : styles) as StylesObject<P, SK>;

  const generatedStyles: Partial<NamedStyles<Record<SK, VariousStyles>>> = {};
  const stylesKeys = Object.keys(rawStyles) as SK[];
  let key: SK;
  for (key of stylesKeys) {
    const inlineStyles = rawStyles[key];
    generatedStyles[key] = isInlineStyles(inlineStyles) ? inlineStyles(props) : (inlineStyles as VariousStyles);
  }

  return StyleSheet.create(generatedStyles as NamedStyles<Record<SK, VariousStyles>>);
}
