import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import { Cities } from "../pages/Cities";
import { SignIn } from "../pages/SignIn";
import CityDetails from "../pages/CityDetails";


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
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/cities/:id',
                element: <CityDetails />
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