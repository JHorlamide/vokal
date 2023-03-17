import React from "react";
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "configs/AppConfig";

export const publicRoutes = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/login")
    ),
  },
  {
    key: "login-1",
    path: `${AUTH_PREFIX_PATH}/login-1`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/login-1")
    ),
  },
  {
    key: "register-1",
    path: `${AUTH_PREFIX_PATH}/register-1`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/register-1")
    ),
  },
  {
    key: "forgot-password",
    path: `${AUTH_PREFIX_PATH}/forgot-password`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/forgot-password")
    ),
  },
  {
    key: "error-page-1",
    path: `${AUTH_PREFIX_PATH}/error-page-1`,
    component: React.lazy(() => import("views/auth-views/errors/error-page-1")),
  },
  {
    key: "error-page-2",
    path: `${AUTH_PREFIX_PATH}/error-page-2`,
    component: React.lazy(() => import("views/auth-views/errors/error-page-2")),
  },
];

export const protectedRoutes = [
  {
    key: "dashboard.dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    component: React.lazy(() => import("views/app-views/dashboards/default")),
  },
  {
    key: "dashboard.report",
    path: `${APP_PREFIX_PATH}/dashboards/report`,
    component: React.lazy(() => import("views/app-views/dashboards/analytic")),
  },
  {
    key: "dashboard.sales",
    path: `${APP_PREFIX_PATH}/dashboards/sales`,
    component: React.lazy(() => import("views/app-views/dashboards/sales")),
  },
  {
    key: "login-1",
    path: `${APP_PREFIX_PATH}/login-1`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/login-1")
    ),
    meta: {
      blankLayout: true,
    },
  },
  // {
  //   key: "login-2",
  //   path: `${APP_PREFIX_PATH}/login-2`,
  //   component: React.lazy(() =>
  //     import("views/auth-views/authentication/login-2")
  //   ),
  //   meta: {
  //     blankLayout: true,
  //   },
  // },
  {
    key: "register-1",
    path: `${APP_PREFIX_PATH}/register-1`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/register-1")
    ),
    meta: {
      blankLayout: true,
    },
  },
  // {
  //   key: "register-2",
  //   path: `${APP_PREFIX_PATH}/register-2`,
  //   component: React.lazy(() =>
  //     import("views/auth-views/authentication/register-2")
  //   ),
  //   meta: {
  //     blankLayout: true,
  //   },
  // },
  {
    key: "forgot-password",
    path: `${APP_PREFIX_PATH}/forgot-password`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/forgot-password")
    ),
    meta: {
      blankLayout: true,
    },
  },
  {
    key: "error-page-1",
    path: `${APP_PREFIX_PATH}/error-page-1`,
    component: React.lazy(() => import("views/auth-views/errors/error-page-1")),
  },
  {
    key: "error-page-2",
    path: `${APP_PREFIX_PATH}/error-page-2`,
    component: React.lazy(() => import("views/auth-views/errors/error-page-2")),
    meta: {
      blankLayout: true,
    },
  },
];
