import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import { Events } from "../pages/Events";
import { SignIn } from "../pages/SignIn";
import EventDetails from "../pages/EventDetails";
import ProtectedRoute from "./ProtectedRoute";

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
                path: '/signin',
                element: (<ProtectedRoute path='/'>
                    <SignIn />
                </ProtectedRoute>)
            },
            {
                path: '*',
                element: <h1 className="text-3xl">Pagina de ERROR</h1>
            },
            {
                path: '/404',
                element: <h1 className="text-3xl">Pagina de ERROR</h1>
            },
        ]
    },
]);

export default router;