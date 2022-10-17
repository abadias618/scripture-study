import { createBrowserRouter } from "react-router-dom";

import Home from './Home/Home';
import ScriptureEntry from "./ScriptureEntry/ScriptureEntry";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/scripture-entry",
        element: <ScriptureEntry />
    }
]

);

export default router;