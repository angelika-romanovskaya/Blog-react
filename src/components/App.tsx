/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import CounterPage from "./counter/CounterPage";
import { Header } from "./Header";
import { Container } from "../styles/Container";
import BlogPage from "./blog/BlogPage";
import { Navbar } from "./Navbar";
import PostDetails from "./blog/PostDetails";

function App(props) {
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

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
