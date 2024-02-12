/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import HomePage from "../components/home/HomePage";
import React from "react";
import { hot } from "react-hot-loader";
import CounterPage from "../components/counter/CounterPage";
import Header from "./Header";
import { Container } from "../styles/Container";
import BlogPage from "../components/blog/BlogPage";
import PostDetails from "../components/blog/PostDetails";

const App = (props) =>{
  return(
      <Container>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/post/1" component={PostDetails} />
        </Switch>
      </Container>
  )
}

export default hot(module)(App);
