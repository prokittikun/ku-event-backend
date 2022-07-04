import { Dialect } from 'sequelize/types';

export const config = {
    database: {
        dialect: 'mysql' as Dialect,
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'ku-events',
        logging: false,
    },
    jwtPrivateKey: 'jwtPrivateKey',
};
