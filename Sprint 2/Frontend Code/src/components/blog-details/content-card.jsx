import { Carousel, Image } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { BlogDetailsContext } from '../../pages/blog/blog-details-page';
import blogsData from '../../data/blogs.json'

const contentStyle = {
  height: '450px',
  backgroundColor: '#364d79',
};

function ContentCard(props) {
  const { blogId } = useContext(BlogDetailsContext)
  const [blog, setBlog] = useState({})

  useEffect(() => {
    if (!blogId) return

    setBlog(blogsData.find(({ id }) => id === blogId))
  }, [blogId])

  return (
    <div>
      <div className={'flex flex-row'}>
        <Image src={`../media/${blogId}/picture-1.jpg`}/>
        <Image src={`../media/${blogId}/picture-2.jpg`}/>
        <Image src={`../media/${blogId}/picture-3.jpg`}/>
      </div>
      <div className={'mt-10'}>
        <div className={'text-center my-20'}>
          <h1 className={'text-5xl font-wonderful-branding'}>{blog.title}</h1>
        </div>
        <div
          className={'text-lg'}
          dangerouslySetInnerHTML={{ __html: blog.content }}/>
      </div>
    </div>
  )
}

export default ContentCard