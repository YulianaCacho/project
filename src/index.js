import 'bootstrap/dist/css/bootstrap.min.css'
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./layout/hearder";
import Carrusel from "./layout/carrusel";
import Preguntas from "./layout/preguntas";
import Footer from "./layout/footer";
import Description from "./layout/contactanos";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from "./single";
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
          <div className="conteiner">
            <div className="row">
              <div className="col-md-7 ">
                <Carrusel></Carrusel>
              </div>
              <div className="col-md-5">
                <Preguntas></Preguntas>
              </div>
            </div>
          </div>
        </>
      },

      {
        path: "/detalle/:slug",
        element: <Single />,
      },
    ],
  },
]);



const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />

);
