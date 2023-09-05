import React from "react";
import "./App.css";
import Body from "./components/Body";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./components/Login";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
