import { Head, Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function Guest({ children }) {
  return (
    <main>
      <Head>
        <title>My Inertia App</title>
      </Head>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/create">Create</Link>
      </header>
      <article>{children}</article>
    </main>
  );
}
