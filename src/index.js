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
import { AuthProvider } from 'context/AuthContext';
import ProtectedRoute from 'components/protectedroute/ProctedRoute';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <AuthProvider>
        <ThemeEditorProvider>
          <HashRouter>
            <Switch>
              <Route path={`/auth`} component={AuthLayout} />
              <ProtectedRoute path={`/admin`} component={AdminLayout} />
              <Redirect from='/' to='/admin' />
            </Switch>
          </HashRouter>
        </ThemeEditorProvider>
      </AuthProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'assets/css/App.css';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import AuthLayout from 'layouts/auth';
// import AdminLayout from 'layouts/admin';
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from 'theme/theme';
// import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
// import { AuthProvider } from 'context/AuthContext';
// // import ProtectedRoute from 'components/protectedroute/ProctedRoute'; // Remove this import if no longer needed

// ReactDOM.render(
//   <ChakraProvider theme={theme}>
//     <React.StrictMode>
//       <AuthProvider>
//         <ThemeEditorProvider>
//           <HashRouter>
//             <Switch>
//               <Route path={`/auth`} component={AuthLayout} />
//               {/* Replace ProtectedRoute with Route */}
//               <Route path={`/admin`} component={AdminLayout} />
//               <Redirect from='/' to='/admin' />
//             </Switch>
//           </HashRouter>
//         </ThemeEditorProvider>
//       </AuthProvider>
//     </React.StrictMode>
//   </ChakraProvider>,
//   document.getElementById('root')
// );
