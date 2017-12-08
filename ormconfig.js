module.exports = {
  type: 'mysql',
  host: process.env.dbHost,
  port: process.env.dbPort,
  username: process.env.dbUsername,
  password: process.env.dbPassword,
  database: process.env.dbName,
  entities: [
    __dirname + '/../**/*.entity{.ts,.js}',
  ],
  migrations: [
    'src/app/modules/database/migrations/*.js',
  ],
  synchronize: false,
  cli: {
    migrationsDir: 'src/app/modules/database/migrations',
  },
};
