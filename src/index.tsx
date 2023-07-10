import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="chess-react-ts">
    <RouterProvider router={router} />

    {/* <App></App> */}
  </BrowserRouter>
  // </React.StrictMode>
);
