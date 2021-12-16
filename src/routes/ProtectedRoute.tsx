// eslint-disable-next-line no-use-before-define
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { RootStateType } from '../redux-store/reducers';

export type AuthRoutePropsType = {
  path: string;
  component: React.ComponentType<any>;
  isLoggedIn: boolean;
  exact?: boolean;
};

function ProtectedRoute({
  component: Component,
  isLoggedIn,
  ...rest
}: // eslint-disable-next-line no-undef
AuthRoutePropsType): JSX.Element {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
export default connect(
  ({ auth }: RootStateType) => ({ isLoggedIn: !!auth.token }),
  {}
)(ProtectedRoute);
