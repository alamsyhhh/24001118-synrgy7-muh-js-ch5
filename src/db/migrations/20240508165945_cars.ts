import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cars', (table: Knex.TableBuilder) => {
    table.string('id').primary();
    table.string('name', 255).notNullable();
    table.string('category').notNullable();
    table.float('price').notNullable();
    table.string('image').notNullable();
    table.date('startRent');
    table.date('finishRent');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cars');
}
