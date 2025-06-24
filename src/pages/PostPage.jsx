import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/fetchPosts';
import Card from '../components/Card';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Fetched Posts</h2>
      <input
        type="text"
        className="border px-3 py-2 mb-4 w-full"
        placeholder="Search posts..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(post => (
          <Card key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PostsPage;