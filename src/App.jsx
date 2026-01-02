import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/appLayout";
import Landing from "./pages/landing";
import BranchPage from "./pages/branchPage";
import Contact from "./pages/contact";
import ReportsResources from "./pages/reports";
import NewsUpdates from "./pages/newsUpdates";
import Dashboard from "./pages/dashboard";
import ScrollToTop from "./components/ScrollToTop.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Landing /> },

      // ✅ Assemblies (dynamic)
      { path: "/assemblies/:slug", element: <BranchPage /> },

      // ✅ Fellowships (dynamic)
      { path: "/fellowships/:slug", element: <BranchPage /> },
      { path: "/contact-us", element: <Contact /> },
      {
        path: "/reports-resources",
        element: <ReportsResources />
      },
      {
        path: "/news-updates",
        element: <NewsUpdates />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ],
  },
]);

const App = () => {
  <ScrollToTop />;
  return <RouterProvider router={router} />;
};

export default App;
