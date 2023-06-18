import {createBrowserRouter} from 'react-router-dom';
import{About, Home, Skills, NotFound, Shorts} from "../pages";


import {  Notification, Profile } from '../modules';

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
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/Shorts",
    element: <Shorts />,
  },
  {
    path: "/Shorts",
    element: <Shorts />,
  },
  {
    path: "/Shorts/:video_id/:author_id",
    element: <Shorts />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
