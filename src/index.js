// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
// import { AuthProvider } from 'context/AuthContext';
import ProtectedRoute from 'components/protectedroute/ProctedRoute';
import { useAuth,AuthProvider } from 'context/AuthContext';


const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <ProtectedRoute path={`/admin`} component={AdminLayout} />
      <Redirect from='/' to={isAuthenticated ? '/admin/default' : '/auth/sign-in'} />
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
  document.getElementById('root')
);