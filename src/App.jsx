import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import Service from './components/Service/Service';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ToDoApp from './components/ToDoApp/ToDoApp';
import Profile from './components/Profile/Profile';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Problems from './components/Problems/Problems';
import AuthProvider from "./Context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Team from "./components/Team/Team";
import { QueryClient, QueryClientProvider } from "react-query";
import BologDetails from "./components/BologDetails/BologDetails";
import { Symbol } from "./components/Symbole/Symbol";


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
      },

      {
        path: "problemsolution",
        element: (
          <ProtectedRoute>
            <Problems />
          </ProtectedRoute>
        ), //Q&A
      },

      {
        path: "todoapp",
        element: (
          <ProtectedRoute>
            <ToDoApp />
          </ProtectedRoute>
        ),
      },

      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
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
            <Symbol/>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
