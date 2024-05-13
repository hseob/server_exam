// 🚀 Manually create the following query and run this script
/*
  CREATE DATABASE hilokal_exam1;

  USE hilokal_exam1;

  CREATE TABLE user_words (
    id INT NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
    word VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
*/

const mysql = require("mysql2/promise");

async function insertRandomWords(totalRows, chunkSize) {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "hilokal_exam1",
  });

  try {
    await connection.beginTransaction();
    const sql = `INSERT INTO user_words (created_at, user_id, word) VALUES ?`;

    let values = [];
    let processed = 0;

    for (let i = 0; i < totalRows; i++) {
      const wordLength = Math.floor(Math.random() * 9) + 2; // 2 ~ 10
      let word = "";
      for (let j = 0; j < wordLength; j++) {
        word += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
      const timeOffset = Math.floor(Math.random() * 31536000);
      const createdAt = new Date(Date.now() - timeOffset * 1000);
      const userId = Math.floor(Math.random() * 50) + 1;

      values.push([createdAt, userId, word]);

      if (values.length === chunkSize) {
        await connection.query(sql, [values]);
        processed += values.length;
        console.log(`${processed} rows inserted`);
        values = [];
      }
    }

    if (values.length > 0) {
      await connection.query(sql, [values]);
      processed += values.length;
      console.log(`${processed} rows inserted (final batch)`);
    }

    await connection.commit();
    console.log("All data successfully inserted and transaction committed.");
  } catch (error) {
    console.error("Failed to insert data:", error);
    await connection.rollback();
    console.log("Transaction rolled back due to an error.");
  } finally {
    await connection.end();
  }
}

insertRandomWords(6000000, 5000);
