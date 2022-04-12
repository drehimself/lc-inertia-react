import { useForm } from '@inertiajs/inertia-react';
import React from 'react';
import Guest from '../Layouts/Guest';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    body: '',
  });

  function createPost(e) {
    e.preventDefault();

    post('/create');
  }

  return (
    <Guest>
      <div>
        <h3>Create Post</h3>
        <form action="#" onSubmit={createPost}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title}
              onChange={e => setData('title', e.target.value)}
            />
            {errors.title && <div>{errors.title}</div>}
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              value={data.body}
              onChange={e => setData('body', e.target.value)}
            ></textarea>
            {errors.body && <div>{errors.body}</div>}
          </div>
          <div>
            <button>Create Post</button>
          </div>
        </form>
      </div>
    </Guest>
  );
}
