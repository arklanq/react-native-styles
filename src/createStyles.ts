import {Styles} from './';

export default function createStyles<T extends object, P extends object = object, SK extends string = string>(
  styles: Styles<T, P, SK>
): Styles<T, P, SK> {
  return styles;
}
