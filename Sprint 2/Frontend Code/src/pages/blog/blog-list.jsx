import { useCallback, useEffect, useState } from 'react';
import { Tag } from 'antd'
import { useParams } from 'react-router-dom';
import BlogCard from '../../components/blog-card';
import blogsData from '../../data/blogs.json'

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  useEffect(() => {
    setBlogs(blogsData)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    if (params.has('filter')) {
      setFilterTags(oldData => ([...oldData, params.get('filter')]))
    }
  }, [])


  const handleChangeFilter = useCallback((tag) => () => {
    let filterTag = []

    if (tag === 'all') {
      filterTag = ['biking', 'travel', 'diving']
    } else {
      if (!filterTag.includes(tag)) {
        filterTag.push(tag)
      } else {
        filterTag.splice(filterTag.indexOf(tag), 1);
      }
    }

    setFilterTags(filterTag)
  }, [filterTags])

  return (
    <div>
      <div className={'text-center mt-20 mb-32'}>
        <h1 className={'font-wonderful-branding text-8xl'}>Blogs</h1>
      </div>
      <div className={'mb-5'}>
        <Tag className={'cursor-pointer'} color="gold" onClick={handleChangeFilter('all')}>All</Tag>
        <Tag className={'cursor-pointer'} color="red"
             onClick={handleChangeFilter('biking')}>Biking</Tag>
        <Tag className={'cursor-pointer'} color="volcano"
             onClick={handleChangeFilter('diving')}>Diving</Tag>
        <Tag className={'cursor-pointer'} color="orange"
             onClick={handleChangeFilter('travel')}>Travel</Tag>
      </div>
      <div className={'grid gap-2 grid-cols-4 flex items-center'}>
        {blogs.filter(({ tag }) => {
          if (!filterTags.length) return true
          return filterTags.includes(tag)
        }).map((value) => (
          <BlogCard
            key={value.id}
            id={value.id}
            image={`../media/${value.id}/picture-1.jpg`}
            title={value.title}
            description={value.shortDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
