import * as React from 'react';
import Post from './Post';

export interface IBlogPageProps {
}

export default function BlogPage (props: IBlogPageProps) {
  return (
    <>
      <Post/>
    </>
  );
}
