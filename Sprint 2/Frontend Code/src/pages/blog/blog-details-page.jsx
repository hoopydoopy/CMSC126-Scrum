import { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../../components/blog-details';
import blogsData from '../../data/blogs.json'

export const BlogDetailsContext = createContext({ blogId: null })

export default function BlogDetailsPage() {
  let { blogId } = useParams();

  return (
    <BlogDetailsContext.Provider value={{ blogId }}>
      <BlogDetails/>
    </BlogDetailsContext.Provider>
  )
}