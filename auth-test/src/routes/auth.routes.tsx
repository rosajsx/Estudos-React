import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from '../containers/SignIn/index';
import SignUp from '../containers/SignUp/index';

/*  Rotas que o usuario vai poder navegar enquanto ele não estiver autenticado na aplicação 
 */


 const AuthRoutes:React.FC = () => (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/register" component={SignUp}/>
      </Switch>
    </BrowserRouter>
   )



 export default AuthRoutes;
