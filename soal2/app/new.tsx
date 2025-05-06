import { View, Text, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import { DatabaseContext } from "./_layout";

export default function TaskScreen() {
    const [nama, setNama] = useState("");
    const [nomor, setNomor] = useState("");
    const router = useRouter();
    const db = useContext(DatabaseContext);

    return (
        <SafeAreaView className="bg-white flex flex-col h-full">
            <Text className="text-4xl font-bold text-custom-text py-8 self-center">
                Tambah Kontak
            </Text>

            <View className="bg-custom-grey mx-5 my-3 py-5 px-3 rounded">
                <TextInput
                    className="px-2 text-custom-text"
                    placeholder="Nama"
                    value={nama}
                    onChangeText={setNama}
                />
            </View>

            <View className="bg-custom-grey mx-5 my-3 py-5 px-3 rounded">
                <TextInput
                    className="px-2 text-custom-text"
                    placeholder="Nomor"
                    value={nomor}
                    onChangeText={setNomor}
                />
            </View>

            <Pressable
                className="bg-custom-dark mx-5 my-3 py-5 px-3 rounded"
                onPress={async () => {
                    try {
                        if (!db) {
                            throw new Error("Database context doesn't exist");
                        }

                        const result = await db.runAsync(
                            "INSERT INTO uts (uts_nama, uts_nomor) VALUES (?, ?)",
                            [nama, Number(nomor)]
                          );
                        

                        await router.back();
                    } catch (error) {
                        console.error("Error fetching rows:", error);
                    }
                }}
            >
                <Text className="text-white text-center font-bold text-2xl">
                    Simpan
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}
