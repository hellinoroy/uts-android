import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

type info = {
    id: number;
    nama: string;
};

export default function NumberBar({ id, nama }: info) {
    const router = useRouter();

    return (
        <Pressable
            className={`flex flex-row mx-5 my-3 p-5 justify-between rounded bg-blue-300`}
            onPress={() => {
                router.navigate(`./detail/${id}`);
            }}
        >
            <View className="flex flex-col gap-3 w-full">
                <Text className="text-custom-text text-xl font-bold">
                    {nama}
                </Text>
            </View>
        </Pressable>
    );
}
