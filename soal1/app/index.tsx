import { View, Text, Button, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    const [viewImage, setViewImage] = useState(false);

    return (
        <SafeAreaView className="bg-white flex-1 flex-col items-center">
            <View>
                <View
                    className={
                        viewImage
                            ? "flex flex-col items-center gap-4"
                            : "hidden"
                    }
                >
                    <Image
                        className="size-[300px]"
                        source={require("../assets/images/Futurino_Dinosino.webp")}
                    />
                    <Text>Ini adalah Fragment A</Text>
                </View>

                <View
                    className={
                        !viewImage
                            ? "flex flex-col items-center gap-4"
                            : "hidden"
                    }
                >
                    <Image
                        className="size-[300px]"
                        source={require("../assets/images/Capuchino_Assassino.webp")}
                    />
                    <Text>Ini adalah Fragment B</Text>
                </View>
            </View>

            <View className="flex flex-row justify-center gap-4 mt-4 rounded">
                <Button
                    title="Fragment A"
                    onPress={() => setViewImage(!viewImage)}
                    disabled={viewImage}
                />

                <Button
                    title="Fragment B"
                    onPress={() => setViewImage(!viewImage)}
                    disabled={!viewImage}
                />
            </View>
        </SafeAreaView>
    );
}
