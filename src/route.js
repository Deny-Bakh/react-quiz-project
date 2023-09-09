import App from "./App";

import {
    createBrowserRouter,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about-us",
      element: <div>Hello Myxa!</div>,
    },
    {
      path: "/contact-us",
      element: <div>Hello Den!</div>,
    }
  ]);

  export default router;