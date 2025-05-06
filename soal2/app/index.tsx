import { ScrollView, View, Text, Pressable } from "react-native";
import { useState, useContext, useCallback } from "react";
import { useRouter, useFocusEffect } from "expo-router";

import { DatabaseContext } from "./_layout";

import TaskBar from "@/assets/components/NumberBar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    type Row = {
        rowid: number;
        uts_nama: string;
        uts_nomor: number;
    };

    const [data, setData] = useState<Row[]>([]);
    const router = useRouter();

    const db = useContext(DatabaseContext);

    const fetchAndLogRows = async () => {
        try {
            if (!db) {
                throw new Error("Database context doesn't exist");
            }

            const allRows = (await db.getAllAsync(
                "SELECT rowid, * FROM uts"
            )) as Row[];
            setData(allRows);
            // console.log(allRows);
        } catch (error) {
            console.error("Error fetching rows:", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            if (db) {
                fetchAndLogRows();
            }
        }, [db])
    );

    return (
        <SafeAreaView className="bg-white flex-1 flex-col">
            <View className="flex flex-col items-center bg-custom-grey rounded-2xl m-5">
                <Text className="text-4xl font-bold text-custom-text p-5">
                    Buku Kontak
                </Text>
            </View>
            <ScrollView className="flex flex-col last:mb-40">
                {data.map((item) => (
                    <TaskBar
                        key={item.rowid}
                        id={item.rowid}
                        nama={item.uts_nama}
                    ></TaskBar>
                ))}
            </ScrollView>

            <View className="absolute bottom-10 left-0 right-0 items-center">
                <Pressable
                    className="bg-custom-dark flex items-center justify-center size-28 rounded-full"
                    onPress={() => router.navigate(`./new`)}
                >
                    <FontAwesomeIcon icon={faPlus} color="#FFFFFF" size={40} />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
