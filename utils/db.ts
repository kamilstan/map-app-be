import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: "root",
    password: "root",
    database: "map_app",
    namedPlaceholders: true,
    decimalNumbers: true,
})