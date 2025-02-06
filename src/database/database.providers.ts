import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'root',
        password: 'root',
        database: 'gestao_facil_db',
        entities: [__dirname + '/../**/*.entity.{ts,js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
