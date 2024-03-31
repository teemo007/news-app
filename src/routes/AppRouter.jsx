import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Categories from "../pages/categories/Categories";
import { Outlet } from "react-router-dom";
import ErrorPage from "../components/notfound/ErrorPage";

const router = createBrowserRouter(
  [
    {
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/categories", element: <Categories /> },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
