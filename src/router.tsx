import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./routes/NotFound";
import Comics from "./routes/Comics";
import Comic from "./routes/Comic";
import Characters from "./routes/Characters";
import ComicCharacters from "./routes/ComicCharacters";

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
            {
                path: "/comics/:comicId/characters",
                element: <ComicCharacters />,
            },
            {
                path: "characters",
                element: <Characters />,
            },
        ],
    },
]);

export default router;
