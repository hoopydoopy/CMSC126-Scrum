import { Card } from 'antd';
import { useLinkClickHandler } from 'react-router-dom';

function BlogCard(props) {
  let handleClick = useLinkClickHandler(props.id);

  return (
    <Card
      onClick={handleClick}
      hoverable
      cover={<div style={{ height: 225 }} className={'flex justify-center bg-slate-200'}>
        <img
          alt="example"
          src={props.image}/>
      </div>}
    >
      <Card.Meta title={props.title} description={props.description}/>
    </Card>
  )
}

export default BlogCard