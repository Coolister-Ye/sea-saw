import { View, Text, Image } from 'react-native';

type routeType = {
    route: string,
    duration: number
}

export default function FreightRow({routes}: {routes: routeType[]}) {

    console.log("@@@", routes);
    return (
        <View className='space-y-2'>
            {
                routes.map((item: routeType, key: number) => { return (
                    <View key={key} className='flex flex-row items-center'>
                        <Image
                            className='w-5 h-5 rounded-full mr-2'
                            source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        />
                        <View className='flex flex-row flex-1 justify-between items-center'>
                            <Text className='font-bold text-base'>{item.route}</Text>
                            <Text className='text-xs'>{item.duration}d</Text>
                        </View>
                    </View>
                )})
            }
        </View>
    );
}