import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host : 'localhost',
    user : 'root',
    password : 'nessa2609',
    port : '3306',
    database : 'schedule3'
});