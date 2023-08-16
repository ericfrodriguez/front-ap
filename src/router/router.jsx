import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import { Events } from "../pages/Events";
import { SignIn } from "../pages/SignIn";
import EventDetails from "../pages/EventDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/events',
                element: <Events />
            },
            {
                path: '/events/:id',
                element: <EventDetails />
            },
            {
                path: '*',
                element: <h1 className="text-3xl">Pagina de ERROR</h1>
            },
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
]);

export default router;