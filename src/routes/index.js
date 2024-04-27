import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Waitting from "../components/Waitting";
const App = lazy(() => import("../pages/App"));
const Post = lazy(() => import("../pages/Post"));
const Tools = lazy(() => import("../pages/Tools"));
const Quote = lazy(() => import("../pages/Quote"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Waitting />}>
                <App />
            </Suspense>
        ),
    },
    {
        path: "/post/:postId",
        element: (
            <Suspense fallback={<Waitting />}>
                <Post />
            </Suspense>
        ),
    },
    {
        path: "/tools",
        element: (
            <Suspense fallback={<Waitting />}>
                <Tools />
            </Suspense>
        ),
    },
    {
        path: "/quote",
        element: (
            <Suspense fallback={<Waitting />}>
                <Quote />
            </Suspense>
        ),
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
