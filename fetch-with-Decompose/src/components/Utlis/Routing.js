import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostForm from '../pages/PostForm';
import PostList from '../pages/PostList';
import Home from '../Home';
import PageNotFound from '../PageNotFound';

export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/PostForm" component={PostForm} exact />
          <Route path="/PostList" component={PostList} exact />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}