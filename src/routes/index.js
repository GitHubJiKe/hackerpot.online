import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Waitting from "../components/Waitting";
const App = lazy(() => import("../pages/App"));
const Post = lazy(() => import("../pages/Post"));
const Tools = lazy(() => import("../pages/Tools"));
const Quote = lazy(() => import("../pages/Quote"));


// 定义一个高阶组件来封装 Suspense 逻辑
const withSuspense = (Component) => (props) => (
    <Suspense fallback={<Waitting />}>
        <Component {...props} />
    </Suspense>
);

// 使用高阶组件包装组件
const routes = [
    { path: "/", element: withSuspense(App) },
    { path: "/post/:postId", element: withSuspense(Post) },
    { path: "/tools", element: withSuspense(Tools) },
    { path: "/quote", element: withSuspense(Quote) },
];

const router = createBrowserRouter(routes.map(route => ({
    ...route,
    element: <route.element />,
})));

export default function Router() {
    return <RouterProvider router={router} />;
}

