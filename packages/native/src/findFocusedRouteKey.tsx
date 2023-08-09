import { findFocusedRoute, NavigationState } from '@react-navigation/core';

export const findFocusedRouteKey = (state: NavigationState) => {
  // @ts-ignore
  return findFocusedRoute(state)?.key;
};
