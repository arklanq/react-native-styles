import {StyleSheet} from 'react-native';

type NamedStyles<T> = StyleSheet.NamedStyles<T>;

export type MakeStylesFunc<T extends object, S extends NamedStyles<T> | NamedStyles<any>> = (theme: T) => S;

export {default as makeStyles} from './makeStyles';
export {StylesContext, StylesProvider, StylesProviderProps} from './StylesContext';
export {default as useTheme} from './useTheme';
export {default as withStyles, WithStylesProps} from './withStyles';
