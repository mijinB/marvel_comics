import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./routes/NotFound";
import Comics from "./routes/Comics";
import Comic from "./routes/Comic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Comics />,
            },
            {
                path: "comics/:comicId",
                element: <Comic />,
            },
        ],
    },
]);

export default router;
