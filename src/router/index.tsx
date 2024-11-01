import { useRoutes, Navigate } from 'react-router-dom';
import React, { memo } from 'react';
import Home from '../views/Home/Home';
import Layout from '../views/Layout/Layout';
import Workbench from '../views/workbench/workbench';
import NotFound from '../views/NotFound/NotFound';

const DefineRoutes = memo(() => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path:'home',
          index: true,
          element:<Home />
        },
        {
          path:'workbench',
          element:<Workbench />
        },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return routes;
});

export default DefineRoutes;
