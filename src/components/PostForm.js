import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !body) return;

    dispatch(addPost({ title, body, userId: 1 }));

    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            />
        </div>
      <div>
      <textarea
        value={body}
        placeholder="Body"
        onChange={e => setBody(e.target.value)}
      />
      </div>
      <div>
      <button type="submit">Add</button>
        </div>
    </form>
  );
};

export default PostForm;
