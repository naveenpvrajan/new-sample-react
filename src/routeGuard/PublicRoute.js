import { Navigate } from 'react-router-dom';

import { DASHBOARD_PATH } from '../constants/routes';
import useIsAuth from './useIsAuth';

export default function PublicRoute({ component: Component, ...props }) {
  const isAuth = useIsAuth();
  return isAuth ? <Navigate to={DASHBOARD_PATH} /> : <Component {...props} />;
}
