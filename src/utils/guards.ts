import {InlineStyles, MakeStylesObjectFn} from '@idkman/react-native-styles';

export function isMakeStylesFunc<P extends object, T extends object, SK extends string>(
  makeStyles: object | Function
): makeStyles is MakeStylesObjectFn<T, P, SK> {
  return typeof makeStyles === 'function';
}

export function isInlineStyles<P extends object>(inlineStyles: object | Function): inlineStyles is InlineStyles<P> {
  return typeof inlineStyles === 'function';
}
