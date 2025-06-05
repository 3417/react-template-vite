import { useRoutes, Navigate } from 'react-router-dom';
import React, { memo, lazy, Suspense, useState } from 'react';
import Home from '@/views/Home/Home';
import Layout from '../views/Layout/Layout';
import Workbench from '../views/workbench/workbench';
import NotFound from '../views/NotFound/NotFound';
import Login from '@/views/Login/Login';

// 动态加载前端路由列表(该方法不失为一种解决方案)
// const pages = import.meta.glob('../views/*/*.tsx');
// const pages = import.meta.glob('@/views/*/*.tsx');
// const dynamicRoutesVite = Object.entries(pages).map(([path, value]) => {
//   const componentName = path.split('/').pop()?.replace('.tsx', '');
//   const routePath = componentName === 'Home' ? '/' : `/${componentName.toLowerCase()}`
//   const Component = lazy(() => value());
//   return {
//     path: routePath,
//     element: <Component />
//   }
// })】


// 批量生成路由
const dynamicRoutes = () => {
  const pages = import.meta.glob('@/views/*/*.tsx');
  const whiteList = ['Login', 'Workbench', 'Home', 'Layout', 'NotFound'];
  const dynamicRoutes = Object.entries(pages).map(([path, value]) => {
    const componentName = path.split('/').pop()?.replace('.tsx', '');
    if (whiteList.includes(componentName)) return null;
    const routePath = componentName === 'Home' ? '/' : `${componentName.toLowerCase()}`;
    const Component = lazy(() => value());
    return {
      path: routePath,
      element: <Component />
    }
  }).filter(Boolean) as Array<{ path: string; element: JSX.Element }>;

  return dynamicRoutes;
}

// 总路由
const routes = [
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
      ...dynamicRoutes()
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
];


// TODO:该方法可舍去
// const DefineRoutes = () => {
  // const [routesData, setRoutesData] = useState([
  //   {
  //     path: '/table',
  //     name: 'table',
  //     component: '@/views/Table/Table'
  //   },
  //   {
  //     path: '/setting',
  //     name: 'setting',
  //     component: '@/views/Setting/Setting'
  //   }
  // ]);
  // 根据后端动态返回的菜单数据，动态生成路由 (该方式只能component只能使用../的方式引用)
  // const dynamicRoutes = routesData.map((route) => {
  //   const Component = lazy(() => import(/* @vite-ignore */route.component));
  //   return {
  //     path: route.path,
  //     element: <Component />
  //   }
  // })
// }


const DefineRoutes = memo(() => {
  return useRoutes(routes);
});

export {
  routes
}
export default DefineRoutes;
