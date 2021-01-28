import {MakeStylesObjectFn, PropsBasedStyles, StylesObject} from '@idkman/react-native-styles';

export function isMakeStylesFunc<T extends object, P extends object, S extends StylesObject<P, S>>(
  makeStyles: object | Function
): makeStyles is MakeStylesObjectFn<T, P, S> {
  return typeof makeStyles === 'function';
}

export function isPropsBasedStyles<P extends object>(
  inlineStyles: object | Function
): inlineStyles is PropsBasedStyles<P> {
  return typeof inlineStyles === 'function';
}
