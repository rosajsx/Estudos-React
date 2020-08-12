import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../containers/Dashboard/index';



/*  Rotas que o usuário poderá navegar caso esteja autenticado  na aplicação  */

const AppRoutes:React.FC = () => (
  <BrowserRouter>
    <Route exact path="/"component={Dashboard}/>
  </BrowserRouter>
 )



export default AppRoutes;
