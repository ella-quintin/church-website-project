import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/appLayout"
import Landing from "./pages/landing"


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path: "/", element: <Landing /> }
    ]
      

  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App