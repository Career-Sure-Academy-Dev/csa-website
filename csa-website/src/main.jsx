import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import LiveClasses from "./components/LiveClasses";
import Material from "./components/Material";
import Tasks from "./components/Tasks";
import QnA from "./components/QnA";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TaskPage from "./components/TaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/live",
        element: <LiveClasses />,
      },
      {
        path: "/material",
        element: <Material />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/tasks/:taskId",
        element: <TaskPage />,
      },
      {
        path: "/qna",
        element: <QnA />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
