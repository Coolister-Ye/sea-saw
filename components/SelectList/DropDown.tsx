import { FlatList } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function Dropdown({ data, renderItem, keyExtractor, className = '' }) {

    return (
        <Animated.View
            className={className}
            exiting={FadeOut}
            entering={FadeIn}
        >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Animated.View>
    );
}