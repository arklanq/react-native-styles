import React, {ComponentType, forwardRef, ForwardRefRenderFunction, PropsWithChildren} from 'react';

import {NamedStyles, Styles, VariousStyles} from './';
import processStyles from './processStyles';
import {StylesContext} from './StylesContext';
import {getDisplayName} from './utils/components-utils';

export interface WithStylesProps<
  T extends object, // theme
  SK extends string = string // styles
> {
  theme: T;
  stylesheet: NamedStyles<Record<SK, VariousStyles>>;
}

type ForwardableProps<
  T extends object, // theme
  P extends object = object, // props
  SK extends string = string // styles
> = Omit<P, keyof WithStylesProps<T, SK>>;

export default function withStyles<
  T extends object, // theme
  P extends object = object, // props
  SK extends string = string // styles
>(makeStyles: Styles<T, P, SK>) {
  return function (WrappedComponent: ComponentType<P>) {
    const forwardRefFunc = forwardRef<HTMLElement, ForwardableProps<T, P, SK>>(
      (
        props: PropsWithChildren<ForwardableProps<T, P, SK>>,
        ref: Parameters<ForwardRefRenderFunction<HTMLElement, ForwardableProps<T, P, SK>>>[1]
      ) => (
        <StylesContext.Consumer>
          {(theme: object) => {
            const stylesheet = processStyles(theme as T, props as P, makeStyles);

            return <WrappedComponent forwardedRef={ref} {...(props as P)} theme={theme} stylesheet={stylesheet} />;
          }}
        </StylesContext.Consumer>
      )
    );

    forwardRefFunc.displayName = `withStyles(${getDisplayName(WrappedComponent)})`;

    return forwardRefFunc;
  };
}
