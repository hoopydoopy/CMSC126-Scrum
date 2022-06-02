import { Comment, Tooltip, List, Form, Input } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';
import { sortBy } from 'lodash'
import { useCallback, useContext, useEffect, useState } from 'react';
import { BlogDetailsContext } from '../../pages/blog/blog-details-page';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

function CommentsCard() {
  const { blogId } = useContext(BlogDetailsContext)
  const [comments, setComments] = useState([])

  useEffect(() => {
    handleGetComments()
  }, [blogId])

  const handleOnComment = async (e) => {
    try {
      e.preventDefault()

      const { data } = await axios.post(
        'http://localhost:3333/api/comments',
        {
          blog_id: blogId,
          comment: e.target.value
        }
      )

      setComments((oldData) => ([{
        content: data.comment,
        datetime: dayjs(data.created_at).format('L LT'),
        avatar: 'https://joeschmoe.io/api/v1/random',
        author: 'Anonymous'
      }, ...oldData]))
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => e.target.value = null, 0)
    }
  }

  const handleGetComments = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:3333/api/comments/${blogId}`)

      const commentsData = data.map(value => ({
        content: value.comment,
        datetime: dayjs(value.created_at).format('L LT'),
        avatar: 'https://joeschmoe.io/api/v1/random',
        author: 'Anonymous'
      }))

      setComments(sortBy(commentsData, ['datetime']).reverse())
    } catch (e) {
      console.log(e)
    }
  }, [blogId])

  return (
    <div>
      <div className={'mb-5'}>
        <h1 className={'text-xl font-medium'}>Comments</h1>
      </div>
      <Form>
        <Form.Item>
          <Input.TextArea onPressEnter={handleOnComment} rows={3}/>
        </Form.Item>
      </Form>
      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={item => (
          <li>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
      <Form/>
    </div>
  )
}

export default CommentsCard