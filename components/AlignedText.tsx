import { View, Text } from "react-native";

type dataType = {
    title: string,
    content: string
}

type prop = {
    data: dataType[],
    className?: string
}

export default function AlignedText({data, className}: prop) {
    const defaultStyles = undefined
    return (
        <Text className={`${defaultStyles} ${className}`}>
            {
                data.map((item: dataType, index: number) => { return (
                    <View key={index} className="flex flex-row items-center">
                        <Text className="w-10 mr-2 text-p1/4 font-bold">{item.title}</Text>
                        <Text className="text-p1 font-base">{item.content}</Text>
                    </View>
                )})
            }
        </Text>  
    );
}