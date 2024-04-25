import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Waitting from "../components/Waitting";
const App = lazy(() => import("../pages/App"));
const Post = lazy(() => import("../pages/Post"));

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
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
