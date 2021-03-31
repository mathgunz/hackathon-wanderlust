import {ConnectionOptions} from 'typeorm';

const config: ConnectionOptions = {
  schema: 'wanderlust',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
};

export = config;