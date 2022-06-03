import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comments extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('blog_id').notNullable()
      table.string('comment')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      //table.timestamp('created_at', { useTz: false }).defaultTo
      //table.timestamp('updated_at', { useTz: false }).defaultTo
      table.timestamps(true, true)

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
