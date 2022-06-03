import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment';

export default class CommentsController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.body()

      const comment = await Comment.create(data)

      return response.json(comment)
    } catch (e) {
      return response.internalServerError(e.message)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()

      const comments = await Comment.query().where('blog_id', id)

      return response.json(comments)
    } catch (e) {
      return response.internalServerError(e.message)
    }
  }
}
