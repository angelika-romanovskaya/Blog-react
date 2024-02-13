/* eslint-disable import/no-named-as-default */
import { Route,  Switch } from "react-router-dom";

import HomePage from "../components/home/HomePage";
import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import CounterPage from "../components/counter/CounterPage";
import Header from "./Header";
import { Container } from "../styles/Container";
import BlogPage from "../components/blog/BlogPage";
import PostDetails from "../components/blog/PostDetails";
import { TitleH1 } from "../styles/Title";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hook/useTypeSelector";
import { fetchPosts } from "../actions/postAction";
import { fetchUsers } from "../actions/userAction";
import { fetchComments } from "../actions/commentAction";
import Error from "../components/error/Error";
import Form from "./Form";

const App = (props) =>{
  const posts = useTypeSelector(state => state.posts);
  const users = useTypeSelector(state => state.users);
  const comments = useTypeSelector(state => state.comments);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchPosts())
  }, [])

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])

  useEffect(()=>{
    dispatch(fetchComments())
  }, [])

  console.log(posts, users, comments)

  if(posts.loading || users.loading || comments.loading){
    return <TitleH1>Идет загрузка ...</TitleH1>
  }

  if(posts.error){
    return <Error error={posts.error}/>
  }

  if(users.error){
    return <Error error={users.error}/>
  }

  if(comments.error){
    return <Error error={comments.error}/>
  }

  return(
      <Container>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/auth" component={Form} />
          {posts.posts.map(post=> <Route key={post.id} path={'/post/' + post.id} render={()=> (<PostDetails post={post}/>)}/>)}
        </Switch>
      </Container>
  )
}

export default hot(module)(App);
