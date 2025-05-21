// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";

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
      // Tambahkan routes lain sesuai kebutuhan
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
