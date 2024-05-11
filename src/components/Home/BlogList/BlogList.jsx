import React from 'react';
import "./BlogList.css"
import BlogItem from './BlogItem/BlogItem';

const BlogList = ({blogs}) => {
  return (
    <>
        <div className='blogList-wrapper'>
            {blogs.map(blog => <BlogItem blog={blog} key={blog.id} />)}
        </div>
    </>
  )
}

export default BlogList