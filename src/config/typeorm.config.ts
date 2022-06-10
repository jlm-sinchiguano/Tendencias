import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'jenny2668263',
    database: 'tarea',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
}