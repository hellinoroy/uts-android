import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function TaskBar({name, description, icons:{star, starFull, calendar}, date, bgColor, isActive}: {name: string, description: string, icons:{star: IconDefinition, starFull: IconDefinition ,calendar: IconDefinition}, date: string, bgColor: string, isActive:boolean}) {
    const router = useRouter();
    return(
        
        <Pressable className={`flex flex-row mx-5 my-3 px-5 pt-5 pb-10 justify-between rounded ${bgColor}`} onPress={() => router.navigate(`./task/${name}`)}>

            <View className="flex flex-col gap-5"> 
                <Text className="text-custom-text font-bold">{ name }</Text>
                <Text className="text-custom-text">{ description }</Text>
            </View>

            <View className="flex flex-col gap-10">
                <View className="text-custom-text self-end">
                    <FontAwesomeIcon icon={ isActive ? starFull : star } color="#0D99FF" />
                </View>

                <View className="flex flex-row gap-1">
                    <FontAwesomeIcon icon={ calendar } color="#0D99FF" />
                    <Text className="text-custom-text">{ date }</Text>
                </View>

            </View>

        </Pressable>
    )
}