import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';



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
        let router = getCurrentRouterMap(routes, location.pathname);
        if (!isLogin && router.auth) {
            navigate('/login')
        }
    }, [location.pathname])


    return children;
}