import { useState, useEffect, createContext } from "react";
import { Stack } from "expo-router";
import * as SQLite from "expo-sqlite";
import { getDb } from "../config/database";
import "./global.css";

export const DatabaseContext = createContext<SQLite.SQLiteDatabase | null>(null);

export default function RootLayout() {
    const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
    const [isDbReady, setIsDbReady] = useState(false);
    useEffect(() => {
        const initDatabase = async () => {
            try {
                const database = await getDb();
                setDb(database); 
                setIsDbReady(true);  
                console.log("Database initialized", database);
            } catch (error) {
                console.error("Failed to initialize database:", error);
            }
        };

        initDatabase();
    }, []);

    if (!isDbReady) {
        return null; 
    }

    return (
        <DatabaseContext.Provider value={db}>
            <Stack />
        </DatabaseContext.Provider>
    );
}