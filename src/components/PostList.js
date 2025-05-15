import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div className="loading-spinner"></div>
      <p style={{ color: '#666', marginTop: '1rem' }}>Loading posts...</p>
    </div>
  );
  
  if (error) return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem',
      color: '#dc3545',
      backgroundColor: '#f8d7da',
      borderRadius: '8px',
      margin: '1rem'
    }}>
      <p>Error: {error}</p>
    </div>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        color: '#2c3e50',
        marginBottom: '2rem',
        textAlign: 'center',
        fontWeight: '600'
      }}>Posts</h2>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {posts.map(post => (
          <div key={post.id} style={{ 
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              color: '#2c3e50',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>{post.title}</h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>{post.body}</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              color: '#888',
              fontSize: '0.9rem'
            }}>
              <span style={{
                backgroundColor: '#e9ecef',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontWeight: '500'
              }}>
                User ID: {post.userId}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
