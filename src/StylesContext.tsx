import React, {createContext, ReactNode} from 'react';

export const StylesContext = createContext<object>({});

export interface StylesProviderProps<T extends object> {
  children: ReactNode;
  theme: T;
}

export function StylesProvider<T extends object>(props: StylesProviderProps<T>) {
  return <StylesContext.Provider value={props.theme}>{props.children}</StylesContext.Provider>;
}
