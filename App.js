import DateTimePicker from 'react-native-ui-datepicker';
import "./global.css";
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';


export default function DatePicker({ }) {

    const [date, setDate] = useState(undefined);
    return (
        <View className='flex-1 w-[300px] bg-white'>
          <DateTimePicker
            mode="single"
            locale="zh"
            date={date}
            onChange={(params) => setDate(params.date)}
            dayContainerStyle={style.dayContainerStyle}
            height={400}
          />
        </View>
      );

}

const style = StyleSheet.create({
    dayContainerStyle: {
        borderRadius: 100
    }
})