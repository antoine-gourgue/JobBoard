import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email').unique().notNullable()
      table.string('first_name').notNullable()
      table.string('name').notNullable()
      table.string('phone').nullable()
      table.string('address').nullable()
      table.integer('role_id').unsigned().references('id').inTable('user_roles')
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
