import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export type NamedStyles<SO extends object = object> = StyleSheet.NamedStyles<SO>;

export type VariousStyles = ViewStyle | TextStyle | ImageStyle;
export type InlineStyles<P extends object> = (props: P) => VariousStyles;

export type StylesObject<P extends object, SK extends string> = Record<SK, VariousStyles | InlineStyles<P>>;
export type MakeStylesObjectFn<T extends object, P extends object, SK extends string> = (
  theme: T
) => StylesObject<P, SK>;

export type Styles<T extends object, P extends object = object, SK extends string = string> = (
  theme: T
) => StylesObject<P, SK> | MakeStylesObjectFn<T, P, SK>;

export type UseStylesHook<P extends object, SO extends NamedStyles<SO> | NamedStyles<any>> = (
  props: P
) => NamedStyles<SO>;
