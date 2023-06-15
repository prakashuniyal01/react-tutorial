import {createBrowserRouter} from 'react-router-dom';
import { Home, About, Skills } from "../pages";

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Skills",
    element: <Skills />,
  },
]);
