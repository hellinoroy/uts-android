import { SafeAreaView } from "react-native-safe-area-context";
import { DatabaseContext } from "../_layout";
import { useLocalSearchParams, useFocusEffect, useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import { useContext, useState, useCallback } from "react";

type Row = {
    rowid: number;
    uts_nama: string;
    uts_nomor: number;
};

export default function DetailScreen() {
    const db = useContext(DatabaseContext);
    const params = useLocalSearchParams();
    const router = useRouter();
    const [data, setData] = useState<Row | null>(null);

    const fetch = async () => {
        try {
            if (!db) {
                throw new Error("Database context doesn't exist");
            }

            const findRow = (await db.getFirstAsync(
                `SELECT rowid, * FROM uts WHERE rowid = ${params["id"]}`
            )) as Row;
            console.log(findRow);
            setData(findRow);
        } catch (error) {
            console.error("Error fetching rows:", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            if (db) {
                fetch();
            }
        }, [db])
    );

    if (!data) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView className="bg-white flex flex-col h-full">
            <Text className="text-4xl font-bold text-custom-text py-8 self-center">
                Detail Kontak
            </Text>

            <View className="bg-custom-grey mx-5 my-3 py-5 px-3 rounded">
                <TextInput
                    className="px-2 text-custom-text"
                    value={data.uts_nama}
                    readOnly={true}
                />
            </View>

            <View className="bg-custom-grey mx-5 my-3 py-5 px-3 rounded">
                <TextInput
                    className="px-2 text-custom-text"
                    value={String(data.uts_nomor)}
                    readOnly={true}
                />
            </View>

            <Pressable
                className="bg-red-500 mx-5 my-3 py-5 px-3 rounded"
                onPress={async () => {
                    try {
                        if (!db) {
                            throw new Error("Database context doesn't exist");
                        }

                        const result = await db.runAsync(
                            `DELETE FROM uts WHERE rowid = ${params["id"]}`,
                        );

                        await router.back();
                    } catch (error) {
                        console.error("Error fetching rows:", error);
                    }
                }}
            >
                <Text className="text-white text-center font-bold text-2xl">
                    Delete
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}
