import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret";
import Privetroute from "./Privetroute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import Allusers from "../Pages/Dashboard/Allusers";
import AddItemms from "../Pages/Dashboard/AddItemms";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems";
import Payment from "../Pages/Dashboard/Payment";
import AdminHome from "../Pages/Dashboard/AdminHome";
import ManageBookings from "../Pages/Dashboard/ManageBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <Privetroute>
            <Secret></Secret>
          </Privetroute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Privetroute>
        <Dashboard></Dashboard>
      </Privetroute>
    ),
    children: [
      // Normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      // Admin Routes
      {
        path: "add-items",
        element: (
          <AdminRoutes>
            <AddItemms></AddItemms>
          </AdminRoutes>
        ),
      },
      {
        path:'admin-home',
        element:<AdminHome></AdminHome>
      },
      {
        path: "manage-items",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <AdminRoutes>
            <ManageBookings></ManageBookings>
          </AdminRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <Allusers></Allusers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
