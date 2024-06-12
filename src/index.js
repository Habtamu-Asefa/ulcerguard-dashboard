// src/index.js
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import "assets/css/App.css";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import theme from "theme/theme";
// import { AuthProvider } from 'context/AuthContext';
import ProtectedRoute from "components/protectedroute/ProctedRoute";
import { AuthProvider, useAuth } from "context/AuthContext";

const Routes = () => {
  const { isAuthenticated } = useAuth();
  console.log("checking in root: ", isAuthenticated);

  return (
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <ProtectedRoute path={`/admin`} component={AdminLayout} />
      <Redirect
        from="/"
        to={isAuthenticated ? "/admin/default" : "/auth/sign-in"}
      />
    </Switch>
  );
};

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <AuthProvider>
        <ThemeEditorProvider>
          <HashRouter>
            <Routes />
          </HashRouter>
        </ThemeEditorProvider>
      </AuthProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
