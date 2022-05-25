import mysql from 'mysql2/promise';
import config from '../config.js';

export async function query(sql, params) {
  console.log(`SQL: "${sql}"`, params);
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}