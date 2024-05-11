import React from 'react';
import Chip from '../../../common/Chip/Chip';
import { Link } from 'react-router-dom';
import "./BlogItem.css"

const BlogItem = ({blog:{id,cover,description,title,createdAt,authorName,authorAvatar,category}}) => {
  return (
    <>
        <div className='blogItem-wrapper'> 
            <img src={cover} alt="cover" className='blogItem-cover'  />
            <Chip label={category}/>
            <h3>{title}</h3>
            <p className='blogItem-desc'>{description}</p>
            <footer>
                <div className='blogItem-author'>
                    <img src={authorAvatar} alt="author" />
                    <div>
                    <h6>{authorName}</h6>
                    <p>{createdAt}</p>
                    </div>
                </div>
                <Link className='blogItem-link' to={`/blog/${id}`}> →</Link>
            </footer>
        </div>
    </>
  )
}

export default BlogItem