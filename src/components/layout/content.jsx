import { Suspense } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { USERS_PATH, DASHBOARD_PATH, ADMINUSERS_PATH, SETTINGS_PATH } from '../../constants/routes';

const routeSources = [
  {
    path: DASHBOARD_PATH,
    component: lazy(() => import('../../pages/dashboard'))
  },
  {
    path: USERS_PATH,
    component: lazy(() => import('../../pages/user'))
  },
  {
    path: ADMINUSERS_PATH,
    component: lazy(() => import('../../pages/adminusers'))
  },
  {
    path: SETTINGS_PATH,
    component: lazy(() => import('../../pages/settings'))
  }
];

export default function Content() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeSources.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path={'*'} element={<div>No path found!!</div>} />
      </Routes>
    </Suspense>
  );
}
