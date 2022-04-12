import React from 'react';
import Guest from '../Layouts/Guest';

export default function Post({ post }) {
  return (
    <Guest>
      <div>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
      </div>
    </Guest>
  );
}
