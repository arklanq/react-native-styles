import {useContext} from 'react';

import {StylesContext} from './StylesContext';

export default function useTheme<T extends object>(): T {
  return useContext(StylesContext) as T;
}
