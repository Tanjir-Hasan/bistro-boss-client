import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Shared/Login/Login";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "additem",
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: "manageitems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
]);