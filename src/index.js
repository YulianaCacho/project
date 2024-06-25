import 'bootstrap/dist/css/bootstrap.min.css'
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./layout/hearder";
import Preguntas from "./layout/preguntas";
import Footer from "./layout/footer";
import Description from "./layout/contactanos";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basic from "./layout/basic";

const feather = require('feather-icons');
setTimeout(() => {
  feather.replace();
}, 1000);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
    children: [
      {
        path: '',
        element: <>
          <div>
            <Preguntas></Preguntas>
          </div>
        </>
      },

      {
        path: "/detalle/:slug",

      },
    ],
  },
]);



const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />

);
