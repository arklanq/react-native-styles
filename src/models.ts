import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export type NamedStyles<S extends object = object> = StyleSheet.NamedStyles<S>;

export type VariousStyles = ViewStyle | TextStyle | ImageStyle;
export type PropsBasedStyles<P extends object> = (props: P) => VariousStyles;

export type StylesObject<P extends object, S extends StylesObject<P, S> | StylesObject<P, any>> = {
  [K in keyof S]: VariousStyles | PropsBasedStyles<P>;
};

export type MakeStylesObjectFn<
  T extends object,
  P extends object,
  S extends StylesObject<P, S> | StylesObject<P, any>
> = (theme: T) => StylesObject<P, S>;

export type Styles<T extends object, P extends object, S extends StylesObject<P, S> | StylesObject<P, any>> = (
  theme: T
) => StylesObject<P, S> | MakeStylesObjectFn<T, P, S>;

export type UseStylesHook<P extends object, S extends StylesObject<P, S>> = keyof P extends never
  ? (props?: unknown) => NamedStyles<S>
  : (props: P) => NamedStyles<S>;
