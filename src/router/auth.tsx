import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '@/router';

// 判断是否登录
const isLogin = () => {
    // 这里可以添加实际的登录验证逻辑
    return true; // 假设用户已登录
}

const getCurrentRouterMap = (routes: any[], path: string) => {
    for (let router of routes) {
        if (router.path === path) return router;
        if (router.children) {
            let childRouter = getCurrentRouterMap(router.children, path);
            if (childRouter) return childRouter;
        }
    }

    return routes[routes.length - 1];
}

export const RouterBeforeEach = ({ children }: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        let currentRoute = getCurrentRouterMap(routes, location.pathname);
        // if (currentRoute?.auth && !isLogin) {
        if (!isLogin()) {
            navigate('/login');
        }
    }, [location.pathname])


    return children;
}