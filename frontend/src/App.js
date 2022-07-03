import React from 'react';
import { Route, Switch} from "react-router-dom";
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Home"
import Navigation from "./components/Navigation"
import ForgotPassword from "./pages/forgotPassword"




function App() {
  return ( 
    <div>
      <Navigation/>
      <Switch>
        <Route path="/Register">
          <RegisterPage />
        </Route>

        <Route path="/Login">
          <LoginPage />
        </Route>

        <Route path="/ForgotPassword">
          <ForgotPassword />
        </Route>

          <Route path={["/","/Home"]}exact>
            <HomePage />
          </Route>
      </Switch>
    </div>
   );
}

export default App;
