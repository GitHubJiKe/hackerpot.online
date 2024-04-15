import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../pages/App";
import Post from "../pages/Post";
import Wallpaper from "../pages/Wallpaper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/post/:postId",
        element: <Post />,
    },
    {
        path: "/wallpaper",
        element: <Wallpaper />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
