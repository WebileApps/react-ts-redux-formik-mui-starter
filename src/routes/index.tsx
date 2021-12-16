/* eslint-disable no-unused-vars */
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import { history } from '../store';
import ProtectedRoute from './ProtectedRoute';
import Home from '../components/dashboard/index';
import Login from '../components/auth/Login';

function AppRoutes(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props: any) => (
            <Redirect {...props} to="/dashboard" from={props.location.pathname} />
          )}
        />
        <ProtectedRoute path="/dashboard" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
