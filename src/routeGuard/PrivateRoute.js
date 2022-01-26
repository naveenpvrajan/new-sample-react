import { Navigate } from 'react-router-dom';

import { LOGIN_PATH } from '../constants/routes';
import useIsAuth from './useIsAuth';

export default function PrivateRoute({ component: Component, ...props }) {
  const isAuth = useIsAuth();
  return isAuth ? <Component {...props} /> : <Navigate to={LOGIN_PATH} />;
}
