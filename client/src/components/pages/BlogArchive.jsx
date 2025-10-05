import React, { useState } from "react";
import Posts from '../Posts';
import BlogPost from '../BlogPost.jsx';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;;

const BlogArchive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [postResults, setPostResults] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/blog/search/?q=${encodeURIComponent(searchQuery)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.detail);
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (data.length > 0) {
        setPostResults(data);
      }
      else {
        setError("No posts found")
        setPostResults([]);
      }

      console.log("Submitted Value:", searchQuery);
      console.log("data:", data);
      setSearchQuery("")
      setLoading(false);
      
    } catch (err) {
      setError('Error, please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <div>Blog Archive</div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts"
          />
          <button className="search-button" type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
        {postResults.length > 0 ? (
          <div className="search-results">
            {postResults.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <Posts />
        )};
    </div>
  )
}

export default BlogArchive