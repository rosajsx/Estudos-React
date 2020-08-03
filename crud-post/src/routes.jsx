import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PostList from './pages/PostList/index';
import Post from './pages/Post/index';



const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PostList}/>
      <Route path="/posts/:title" component={Post}/>
    </Switch>
  </BrowserRouter>
);



export default Routes;