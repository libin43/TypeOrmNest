import { Document } from "src/entities/document.entity";
import { User } from "src/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '1234',
    username: 'postgres',
    database: 'city_v1',
    entities: ['dist/src/entities/*.js'],
    migrations: ['dist/db/migrations/*.js'],
    migrationsTableName: 'city_v1_migration_table',
    // synchronize: true,
}

 export const AppDataSource = new DataSource(dataSourceOptions)

