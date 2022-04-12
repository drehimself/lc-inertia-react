import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import Guest from '../Layouts/Guest';
import { usePage } from '@inertiajs/inertia-react';

export default function Posts({ posts }) {
  const { flash } = usePage().props;

  return (
    <Guest>
      <div>Posts go here</div>
      {flash.message && <div class="alert">{flash.message}</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Guest>
  );
}
