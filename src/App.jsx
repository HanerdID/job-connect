// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "jobs/:id",
        element: <JobDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "post-job",
        element: <PostJob />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
