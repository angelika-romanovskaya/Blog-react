import * as React from 'react';
import { CommentDiv, CommentInput, SaveComment } from '../../styles/Comment';

export interface ICommentProps {
}

export default function Comment (props: ICommentProps) {
  return (
    <CommentDiv>
      <CommentInput name="comment" id="comment"></CommentInput>
      <SaveComment>Comment</SaveComment>
    </CommentDiv>
  );
}
