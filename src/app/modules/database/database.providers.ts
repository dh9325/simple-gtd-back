import { createConnection } from 'typeorm';
import { environment } from '../../../environments/environment';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: environment.dbHost,
      port: environment.dbPort,
      username: environment.dbUsername,
      password: environment.dbPassword,
      database: environment.dbName,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  },
];
