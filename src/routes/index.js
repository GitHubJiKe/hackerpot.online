import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../pages/App";
import Post from "../pages/Post";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/post/:postId",
        element: <Post />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
