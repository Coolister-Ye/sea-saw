import {View, TextInput} from 'react-native';
import Example from './ComboBoxSimple';

export default function FreightSearch() {
    return (
        <View className='flex flex-row flex-wrap w-screen gap-4'>
            <View className='min-w-96 bg-white flex-1 flex flex-row justify-evenly gap-4'>
                <Example />
                <Example />
                {/* <TextInput className='bg-slate-800 flex-1' value='001'/>
                <TextInput className='bg-slate-800 flex-1' value='002'/> */}
            </View>
            <View className='min-w-96 bg-white flex-1 flex flex-row justify-evenly gap-4'>
                {/* <TextInput className='bg-slate-800 flex-1' value='003'/>
                <TextInput className='bg-slate-800 flex-1' value='004'/> */}
                <Example />
                <Example />
            </View>
        </View>
    )
}