import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdLock,
  MdOutlineLibraryBooks,
  MdOutlineViewStream,
  MdPerson,
  MdVerifiedUser,
} from "react-icons/md";

// Admin Imports
import blog from "views/admin/blog";
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import { Stream } from "views/admin/stream";
// import DataTables from "views/admin/dataTables";
// import RTL from "views/admin/rtl";
// Auth Imports
import SignInCentered from "views/auth/signIn";
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
      <Icon as={MdVerifiedUser} width="20px" height="20px" color="inherit" />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Stream",
    layout: "/admin",
    path: "/stream",
    icon: (
      <Icon
        as={MdOutlineViewStream}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Stream,
    secondary: true,
  },

  {
    name: "Blog",
    layout: "/admin",
    path: "/blog",
    icon: (
      <Icon
        as={MdOutlineLibraryBooks}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: blog,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
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
