import { Divider } from 'antd'
import CommentsCard from './comments-card';
import ContentCard from './content-card';

function BlogDetails() {
  return (
    <div>
      <ContentCard/>
      <Divider/>
      <div>
        <CommentsCard/>
      </div>
    </div>
  )
}

export default BlogDetails