import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import blog from"views/admin/blog";
// import DataTables from "views/admin/dataTables";
// import RTL from "views/admin/rtl";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentered from "views/auth/signUp";
import SignOut from "views/auth/signOut/signOut";




const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "/user",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },

  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Blog",
    layout: "/admin",
    path: "/blog",
    icon: <Icon as={MdOutlineShoppingCart} width="20px" height="20px" color="inherit" />,
    component: blog,
  },
  {
    name: "Sign out",
    layout: "/auth",
    path: "/sign-out",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignOut,
  },
  {
    name: "Sign in",
    layout: "/auth",
    path: "/sign-in",
    // icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,

  },

  
];

export default routes;
