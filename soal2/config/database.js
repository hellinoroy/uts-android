import * as SQLite from "expo-sqlite";

const initDb = async () => {
    const db = await SQLite.openDatabaseAsync("411221221-RyoMarchellino");

    // await db.execAsync(`
    //   PRAGMA journal_mode = WAL;
    //   CREATE TABLE IF NOT EXISTS uts (
    //     uts_nama TEXT NOT NULL,
    //     uts_nomor INTEGER
    //   );
    //   INSERT INTO uts VALUES ("Ryo Marchellino", 411221221);
    //   INSERT INTO uts VALUES ("Tungtungtung Sahur", 411221221);
    //   INSERT INTO uts VALUES ("Tungtungtung Sahur", 411221221);
    //   INSERT INTO uts VALUES ("Ballerina Cappuccina", 411221221);
    // `);

    return db;
};

export const getDb = () => initDb();
