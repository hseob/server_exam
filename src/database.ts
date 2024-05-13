import mysql from "mysql2/promise";

async function dbQuery(query: string) {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "hilokal_exam1",
  });

  try {
    const [results] = await connection.query(query);
    return results;
  } catch (error) {
    console.error("Query failed:", error);
    return null;
  } finally {
    await connection.end();
  }
}

export async function getWordCountFromDB(userId: number) {
  const query = `
    SELECT COUNT(*) as c
    FROM (SELECT COUNT(*) FROM user_words WHERE user_id = ${userId} GROUP BY word) as r;
  `;

  const result = await dbQuery(query);
  if (result) {
    // @ts-ignore
    return result[0].c;
  } else {
    return null;
  }
}

export async function insertWordFromDB(userId: number, word: string) {
  const query = `
    INSERT INTO user_words (created_at, user_id, word) VALUES (NOW(), ${userId}, "${word}")
  `;

  await dbQuery(query);
}
