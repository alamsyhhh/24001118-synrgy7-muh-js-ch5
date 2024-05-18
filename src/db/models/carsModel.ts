import { Model, ModelObject } from 'objection';

export class CarsModel extends Model {
  id!: string;
  name!: string;
  category!: string;
  price!: number;
  image!: string;
  startRent?: Date | null;
  finishRent?: Date | null;
  createdAt!: Date;
  updatedAt!: Date;

  static get tableName() {
    return 'cars';
  }
}

export type Cars = ModelObject<CarsModel>;
