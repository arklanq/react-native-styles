import React, {ComponentType, forwardRef} from 'react';
import {StyleSheet} from 'react-native';

import {MakeStylesFunc} from './index';
import {StylesContext} from './StylesContext';
import {getDisplayName} from './utils/components-utils';

type NamedStyles<T> = StyleSheet.NamedStyles<T>;

export interface WithStylesProps<T extends object, S extends NamedStyles<S> | NamedStyles<any>> {
  theme: T;
  stylesheet: S;
}

export default function withStyles<
  T extends object,
  S extends NamedStyles<S> | NamedStyles<any>,
  MakeS extends MakeStylesFunc<T, S>,
  PropsT extends WithStylesProps<T, MakeS>
>(makeStyles: MakeS) {
  return function (WrappedComponent: ComponentType<PropsT>) {
    type Ref = HTMLElement;
    type ForwardRefProps = Omit<PropsT, keyof WithStylesProps<T, MakeS>>;

    const forwardRefFunc = forwardRef<Ref, ForwardRefProps>((props, ref) => (
      <StylesContext.Consumer>
        {(theme: object) => {
          const stylesheet: ReturnType<MakeS> = StyleSheet.create(makeStyles(theme as T));

          return <WrappedComponent forwardedRef={ref} {...(props as PropsT)} theme={theme} stylesheet={stylesheet} />;
        }}
      </StylesContext.Consumer>
    ));

    forwardRefFunc.displayName = `withStyles(${getDisplayName(WrappedComponent)})`;

    return forwardRefFunc;
  };
}

