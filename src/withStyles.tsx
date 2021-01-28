import React, {ComponentType, forwardRef, ForwardRefRenderFunction, PropsWithChildren} from 'react';

import {NamedStyles, Styles, StylesObject} from './models';
import processStyles from './processStyles';
import {StylesContext} from './StylesContext';
import {getDisplayName} from './utils/components-utils';

export interface WithStylesProps<
  S extends Styles<T, P, S> | Styles<T, P, any>, // styles
  T extends object = object, // theme
  P extends object = object // props
> {
  theme: T;
  stylesheet: NamedStyles<S>;
}

type ForwardableProps<
  T extends object, // theme
  P extends object, // props
  S extends Styles<T, P, S> // styles
> = Omit<P, keyof WithStylesProps<S, T, P>>;

export default function withStyles<
  T extends object, // theme
  P extends object = object, // props
  S extends StylesObject<P, S> | StylesObject<P, any> = object // styles
>(makeStyles: Styles<T, P, S>) {
  return function (WrappedComponent: ComponentType<P>) {
    const forwardRefFunc = forwardRef<HTMLElement, ForwardableProps<T, P, typeof makeStyles>>(
      (
        props: PropsWithChildren<ForwardableProps<T, P, typeof makeStyles>>,
        ref: Parameters<ForwardRefRenderFunction<HTMLElement, ForwardableProps<T, P, typeof makeStyles>>>[1]
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
