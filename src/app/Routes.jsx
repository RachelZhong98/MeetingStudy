import React from "react";
// import { Redirect } from "react-router-dom";

// const errorRoute = [
//   {
//     component: () => <Redirect to="/404" />,
//   },
// ];

export const rootRoutes = [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("./views/Welcome")),
  },
  {
    path: "/consent-form",
    exact: true,
    component: React.lazy(() => import("./views/Consent")),
  },
  {
    path: "/think-aloud-protocol",
    exact: true,
    component: React.lazy(() => import("./views/ThinkAloud")),
  },
  {
    path: "/exp1",
    exact: true,
    component: React.lazy(() => import("./views/Exp1")),
  },
  {
    path: "/exp2",
    exact: true,
    component: React.lazy(() => import("./views/Exp2")),
  },
  {
    path: "/exp3",
    exact: true,
    component: React.lazy(() => import("./views/Exp3")),
  },
  {
    path: "/survey",
    exact: true,
    component: React.lazy(() => import("./views/SurveyPage")),
  },
  {
    path: "/survey-1",
    exact: true,
    component: React.lazy(() => import("./views/SurveyPage1")),
  },
  {
    path: "/survey-2",
    exact: true,
    component: React.lazy(() => import("./views/SurveyPage2")),
  },
  {
    path: "/survey-3",
    exact: true,
    component: React.lazy(() => import("./views/SurveyPage3")),
  },
  {
    path: "/survey-5",
    exact: true,
    component: React.lazy(() => import("./views/SurveyPage5")),
  },
  {
    path: "/survey-6",
    exact: true,
    component: React.lazy(() => import("./views/SurveyPage6")),
  },
  {
    path: "/thank-you",
    exact: true,
    component: React.lazy(() => import("./views/ThankYou")),
  },
  // {
  //   path: "/admin-web-study",
  //   exact: true,
  //   component: React.lazy(() => import("./views/Admin")),
  // },
  // {
  //   path: "/login",
  //   exact: true,
  //   component: React.lazy(() => import("./views/Login")),
  // },
  // {
  //   path: "/requests",
  //   exact: true,
  //   component: React.lazy(() => import("./views/RequestList")),
  // },
  // ...errorRoute,
];
