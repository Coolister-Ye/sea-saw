import { View, Text, Button, Pressable, SafeAreaView } from 'react-native';
import FreightCard from '@/components/FreightCard';
import { SelectList } from '@/components/SelectList';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from '@/components/SelectList/DatePicker';
import { PaperProvider } from 'react-native-paper';

export default function SeaScreen() {

    const info = {
        routes: [
            { route: 'Shekou - Singapore', duration: 10 },
            { route: 'Singapore - USA', duration: 11 }
        ],
        validInfo: {
            valid: '2024-07-01',
            id: '008899'
        },
        company: 'Maesk',
        price: '8088'
    }

    const searchPort = [
        { id: 1, title: "China", iconName: "closecircleo" },
        { id: 2, title: "USA", iconName: "closecircleo" },
        { id: 3, title: "Mexico", iconName: "closecircleo" },
        { id: 4, title: "HongKong", iconName: "closecircleo" },
        { id: 5, title: "Spain", iconName: "closecircleo" },
    ]

    return (
        // <SafeAreaView className="pt-10 h-screen bg-slate-200">
        //     <View className='flex flex-row justify-center items-center mb-5 z-10 mx-3 bg-white ring-1 ring-gray-300 rounded-2xl'>
        //         <View className='flex flex-row flex-1 items-center bg-white pl-3 rounded-2xl'>
        //             <SelectList className='w-1/4' header='FROM' placeholder='port' searchFunc={() => { return searchPort }} />
        //             <View className='h-8 bg-gray-300 w-px' />
        //             <SelectList className='w-1/4' header='TO' placeholder='port' searchFunc={() => { return searchPort }} />
        //             <View className='h-8 bg-gray-300 w-px' />
        //             <DatePicker className='w-1/4' header='DATE OF LOADING' placeholder='Date' />
        //             <View className='h-8 bg-gray-300 w-px' />
        //             <SelectList className='w-1/4' header='CONTAINER SIZE' placeholder='Size' searchFunc={() => { return searchPort }} />
        //         </View>
        //         <Pressable className='rounded-full bg-sky-900 p-3 mr-4' onPress={() => console.log()}>
        //             <Ionicons name="search" size={24} color="white" />
        //         </Pressable>
        //     </View>
        //     <View className='items-center px-3'>
        //         <FreightCard data={info}></FreightCard>
        //     </View>
        //     <DatePicker />
        // </SafeAreaView>
        <PaperProvider>
            <DatePicker />
        </PaperProvider>
    );
}