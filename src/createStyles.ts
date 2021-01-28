import {PropsBasedStyles, StylesObject, VariousStyles} from './models';

export default function createStyles<P extends object = object, S extends StylesObject<P, S> = object>(styles: S): S {
  return styles;
}
