import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/appLayout"
import Landing from "./pages/landing"
import AkweleyAssembly from "./pages/akweleyAssembly";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path: "/", element: <Landing /> },
      {path: "/assemblies/akweley", element: <AkweleyAssembly /> }
    ]
      

  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App