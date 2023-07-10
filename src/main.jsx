import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Contact from "./assets/components/contact/Contact.jsx";
import Home from "./assets/components/home/home.jsx";
import Sermons from "./assets/components/sermons/sermons.jsx";
import Events from "./assets/components/events/Events.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "upcoming-events",
        element: <Events/>
      },

      {
        path: 'sermons',
        element: <Sermons></Sermons>
      },
      {
        path: 'contact',
        element: <Contact/>
      }

      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
