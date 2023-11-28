import { StackActions } from '@react-navigation/native';
import * as React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current?.navigate(name, params);
    }
}

export function stackFirst(routeName, params) {
    // console.log(navigationRef.current);
    if (isReadyRef.current && navigationRef.current) {
        if (navigationRef.current?.canGoBack()){
            navigationRef.current?.setParams(params);
            navigationRef.current?.dispatch(StackActions.popToTop());
        }
    }
}