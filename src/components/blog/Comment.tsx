import * as React from 'react';
import { CommentDiv, CommentInput, SaveComment } from '../../styles/Comment';

export interface ICommentProps {
}

const Comment = (props: ICommentProps) =>{
  return (
    <CommentDiv>
      <CommentInput name="comment" id="comment"></CommentInput>
      <SaveComment>Comment</SaveComment>
    </CommentDiv>
  );
}

export default Comment
