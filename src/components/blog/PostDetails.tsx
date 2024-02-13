import * as React from 'react';
import { TitleH3 } from '../../styles/Title';
import { Details, Img } from '../../styles/Post';
import { Date } from '../../styles/Date';
import Comment from './Comment';

const PostDetails = ({post}) => {
  return (
    <Details>
        <TitleH3>{post.title}</TitleH3>
        <Date>{post.publishedAt}</Date>
        <Img src={post.image} alt={post.title} />
        <p style={{marginBottom:150}}>{post.content}</p>
        <Comment/>
    </Details>
  );
}

export default PostDetails
