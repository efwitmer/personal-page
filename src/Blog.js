import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: "is crypto really bad for the environment", date: "May 25th, 2024" },
  { id: 2, title: "innovation creates the wealth gap", date: "April 17th, 2024" },
  // Add more posts as needed
];

function Blog() {
  return (
    <div className="Blog">
      <h2>Writings</h2>
      {blogPosts.map((post) => (
        <article key={post.id}>
          <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
          <p><em>{post.date}</em></p>
        </article>
      ))}
    </div>
  );
}

export default Blog;
