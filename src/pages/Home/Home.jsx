import React, { useState } from 'react'
import Header from '../../components/Home/Header/Header'
import SearchBar from '../../components/Home/SearchBar/SearchBar'
import BlogList from '../../components/Home/BlogList/BlogList'
import { blogList } from '../../config/data'
import EmptyList from '../../components/common/EmptyList/EmptyList'

const Home = () => {
  const [blogs,setBlogs] = useState(blogList);
  const [searchKey,setSearchKey] = useState('');

  function handleSearchSubmit(e){
    e.preventDefault();
    handleSearchResults();
  }
  function handleSearchResults(){
    const allBlogs = blogList;
    const filterBlogs = allBlogs.filter(blog=> blog.category.toLowerCase().includes(searchKey.toLowerCase()));
    setBlogs(filterBlogs);
  }
  function handleClearSearch(){
    setBlogs(blogList);
    setSearchKey('');
  }

  return (
    <>
       {/* page header */}
        <Header />

       {/* Search Bar */}
        <SearchBar  value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearchKey={(e)=> setSearchKey(e.target.value)}/>


       {/* Blog List and Empty list */}
       {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </>
  )
}

export default Home