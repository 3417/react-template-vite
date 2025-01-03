import { useRoutes, Navigate } from 'react-router-dom';
import React, { memo, lazy, Suspense, useState } from 'react';
import Home from '@/views/Home/Home';
import Layout from '../views/Layout/Layout';
import Workbench from '../views/workbench/workbench';
import NotFound from '../views/NotFound/NotFound';

// 动态加载前端路由列表
// const pages = import.meta.glob('../views/*/*.tsx');
// const dynamicRoutesVite = Object.entries(pages).map(([path, value]) => {
//   const componentName = path.split('/').pop()?.replace('.tsx', '');
//   const routePath = componentName === 'Home' ? '/' : `/${componentName.toLowerCase()}`
//   const Component = lazy(() => value());
//   return {
//     path: routePath,
//     element: <Component />
//   }
// })

const DefineRoutes = memo(() => {
  const [routesData,setRoutesData] = useState([
    {
      path: '/table',
      name:'table',
      component: '../views/Table/Table'  //TODO:无法使用别名
    }
  ]);
  // 根据后端动态返回的菜单数据，动态生成路由
  const dynamicRoutes = routesData.map((route) => {
    const Component = lazy(() => import(/* @vite-ignore */route.component));
    return {
      path: route.path,
      element: <Component />
    }
  })
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'home',
          index: true,
          element: <Home />
        },
        {
          path: 'workbench',
          // element:<Suspense fallback={<div>Loading...</div>}><Workbench /> </Suspense>
          element: <Workbench />
        },
        // ...dynamicRoutesVite,
        ...dynamicRoutes
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
