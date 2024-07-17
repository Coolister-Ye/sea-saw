import { View, Text, TextInput, Pressable, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Dropdown from './DropDown';


type ItemProps = {
    id: string,
    title: string,
    iconName?: keyof typeof AntDesign.glyphMap,
};

const Item = ({ id, title, iconName }: ItemProps) => (
    <View key={id} className='flex flex-row py-2 hover:bg-slate-100 rounded-md'>
        <AntDesign name={iconName} size={24} color='black' className='mr-2' />
        <Text className='text-base/6'>{title}</Text>
    </View>
);

export default function SelectList({
    header,
    placeholder,
    searchFunc,
    className = ''
}) {
    const [text, onChangeText] = useState("");
    const [searchText, onChangeSearchText] = useState<ItemProps[]>([]);
    const [isDropActive, setDropActive] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const handleViewPress = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    const handleClearText = () => {
        onChangeText("");
        onChangeSearchText([]);
    };

    return (
        <View className={'relative inline-block ' + className}>
            <Pressable className='bg-white p-4 flex flex-row items-center justify-between' onPress={handleViewPress}>
                <View className='flex-1'>
                    <Text className='text-xs'>{header}</Text>
                    <TextInput
                        className='outline-none text-base/6 placeholder:text-slate-400'
                        ref={inputRef}
                        placeholder={placeholder}
                        onChangeText={(text) => {
                            let searchResult = text !== '' ? searchFunc(text) : [];
                            onChangeText(text);
                            onChangeSearchText(searchResult);
                        }}
                        onFocus={(e) => setDropActive(true)}
                        onBlur={(e) => setDropActive(false)}
                        value={text}
                    />
                </View>
                {
                    text.length > 0 && (
                        <View className='p-1 rounded-full hover:bg-slate-300'>
                            <AntDesign
                                name="closecircleo"
                                size={15}
                                color="black"
                                onPress={handleClearText}
                            />
                        </View>
                    )
                }
            </Pressable>
            {
                searchText.length > 0 && isDropActive && (
                    <Dropdown
                        data={searchText}
                        renderItem={({ item }) => <Item title={item.title} id={item.id} iconName={item.iconName} />}
                        keyExtractor={(item: { id: any; }) => item.id}
                        className='absolute mt-2 z-5 shadow-lg w-96 rounded-md bg-white p-3' 
                    />
                )
            }
        </View>
    )
}

