import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = {
  1: {
    title: "is crypto really bad for the environment",
    date: "May 25th, 2024",
    content: "This is the content of the first blog post. Here I will elaborate more on the topic discussed in the title..."
  },
  2: {
    title: "innovation creates the wealth gap",
    date: "April 17th, 2024",
    content: "This is the content of the second blog post."
  },
};

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="BlogPost">
      <h2>{post.title}</h2>
      <p><em>{post.date}</em></p>
      <div>{post.content}</div>
    </div>
  );
}

export default BlogPost;
