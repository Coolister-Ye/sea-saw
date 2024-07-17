import { View,Text,Image,StyleSheet } from "react-native";
import AlignedText from "./AlignedText";
import FreightRow from "./FreightRow";

type routeType = {
    route: string,
    duration: number
}

type validInfoType = {
    valid: string,
    id: string
}

type infoType = {
    routes: routeType[],
    validInfo: validInfoType,
    company: string,
    price: string
}

export default function FreightCard({data}: {data: infoType}) {
    
    const inquiryInfo = [
        {title: "VALID", content: data.validInfo.valid}, 
        {title: "ID", content: data.validInfo.id}
    ];

    return (
        <View className="max-w-3xl rounded-lg mx-4 w-full">
            <View className="flex flex-row justify-between items-center bg-zinc-300 px-3 py-2 rounded-t-lg divide-x divide-zinc-500">
                <AlignedText data={inquiryInfo} className="text-zinc-500"/>
                <Text className="text-p1 font-bold pl-2 text-zinc-500">More Info</Text>
            </View>
            <View className="bg-white p-3 rounded-b-lg">
                <Text className="font-bold text-base mb-3">{data.company}</Text>
                <FreightRow routes={data.routes}></FreightRow>
                <Text className="font-bold text-base text-right mt-4">¥{data.price}</Text>
            </View>
        </View>
    );
}