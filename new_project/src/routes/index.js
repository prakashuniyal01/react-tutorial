import {createBrowserRouter} from 'react-router-dom';
import{About, Home, Skills} from "../pages"

export const APP_ROUTER = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: '/skills',
        element: <Skills/>
    },
]);
