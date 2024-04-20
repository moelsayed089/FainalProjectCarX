import { RouterProvider, createBrowserRouter } from "react-router-dom";

import  { Toaster } from "react-hot-toast";

import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import Service from './components/Service/Service';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from "./Context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Team from "./components/Team/Team";
import { QueryClient, QueryClientProvider } from "react-query";
import BologDetails from "./components/BologDetails/BologDetails";
import { Symbol } from "./components/Symbole/Symbol";
import { Fixed } from "./components/Fixed/Fixed";


function App() { 

const myRouts = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "home", element: <Home /> },

      {
        path: "service",
        element: (
          <ProtectedRoute>
            <Service />
          </ProtectedRoute>
        ),
        errorElement: <h3>looooo</h3>,
      },

      // {
      //   path: "servicedetails",
      //   element: (
      //     <ProtectedRoute>
      //       <ServiceDetails />
      //     </ProtectedRoute>
      //   ),
      // },

      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        errorElement: <h3>looooo</h3>,
      },

      {
        path: "team",
        element: (
          <ProtectedRoute>
            <Team />
          </ProtectedRoute>
        ),
      },

      {
        path: "blog",
        element: (
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        ),
      },

      {
        path: "fixed",
        element: (
          <ProtectedRoute>
            <Fixed />
          </ProtectedRoute>
        ),
      },

      {
        path: "blogdetails/:id",
        element: (
          <ProtectedRoute>
            <BologDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "symbol",
        element: (
          <ProtectedRoute>
            <Symbol />
          </ProtectedRoute>
        ),
      },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);


let clientQuery = new QueryClient()
  
  return (
    <>
      <QueryClientProvider client={clientQuery}>
        <AuthProvider>
          <RouterProvider router={myRouts} />
        </AuthProvider>

        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
