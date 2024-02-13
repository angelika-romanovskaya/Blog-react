import React, {useEffect} from 'react';
import Post from './Post';
import {connect, useDispatch} from 'react-redux';
import * as actions from '../../actions/postAction';
import { useTypeSelector } from '../../hook/useTypeSelector';
import { TitleH3 } from '../../styles/Title';
import { BlogContainer } from '../../styles/BlogContainer';

 const BlogPage = ()=>{
  const {posts, error, loading} = useTypeSelector(state => state.posts)

  if(loading){
    return <TitleH3>Идет загрузка...</TitleH3>
  }
  if(error){
    return <TitleH3>{error}</TitleH3>
  }

  return (
    <BlogContainer>
      {posts.map(post=><Post key={post.id} post={post}/>)
      }
    </BlogContainer>
 
  );
}

export default BlogPage;

