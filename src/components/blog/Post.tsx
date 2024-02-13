import * as React from 'react';
import { TitleH3 } from '../../styles/Title';
import { Date } from '../../styles/Date';
import { Description, Img, Links, PostDiv } from '../../styles/Post';;

const Post = ({post}) => {
  return (
    <Links key={post.id} to={"/post/" + post.id}>
      <PostDiv>
        <div>
          <Img src={post.image} alt={post.title} />
        </div>
        <div>
          <TitleH3>{post.title}</TitleH3>
          <Date>{post.publishedAt}</Date>
          <Description>{post.content} </Description>
        </div>
      </PostDiv>
    </Links>
  );
}

export default Post;
