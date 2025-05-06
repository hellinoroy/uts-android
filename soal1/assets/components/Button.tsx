import { Text, Pressable } from "react-native";


export default function Button({text, isSelected, onSelected}: { text: string; isSelected: boolean; onSelected?: () => void ;}){
    return(
        <Pressable 
        className={`w-24 h-8 rounded flex justify-center ${isSelected ? "bg-custom-dark": "bg-custom-light"}`}
        onPress={onSelected}
        >
            <Text className="text-white text-center">{text}</Text>
        </Pressable>
    )
}