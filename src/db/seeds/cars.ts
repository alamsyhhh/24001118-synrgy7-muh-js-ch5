import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Truncate the table to reset ID sequence to 1
  await knex.raw('TRUNCATE TABLE cars RESTART IDENTITY');

  // Inserts seed entries
  await knex('cars').insert([
    {
      id: uuidv4(),
      name: 'Nissan Altima',
      category: 'Medium',
      price: 10000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Chevrolet Camaro',
      category: 'Small',
      price: 100.05,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Volkswagen Golf',
      category: 'large',
      price: 20000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Tesla Model S',
      category: 'Small',
      price: 30000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'BMW X5',
      category: 'large',
      price: 400.05,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Audi Q7',
      category: 'small',
      price: 50.05,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Mercedes-Benz C-Class',
      category: 'large',
      price: 500000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Toyota RAV4',
      category: 'medium',
      price: 30000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Ford F-150',
      category: 'small',
      price: 30000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Honda Accord',
      category: 'small',
      price: 40000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'ferrari',
      category: 'large',
      price: 4000000,
      image:
        'https://res.cloudinary.com/dmuuypm2t/image/upload/v1710400118/img_car_lhk3me.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
