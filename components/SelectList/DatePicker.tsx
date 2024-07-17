// import { View, Text, TextInput, Pressable, FlatList, TouchableWithoutFeedback } from 'react-native';
// import { useRef, useState, useCallback } from 'react';
// import { AntDesign } from '@expo/vector-icons';
// import { DatePickerModal } from 'react-native-paper-dates';
// import React from "react";
// import { View, Text } from "react-native";
// import { Button } from 'react-native-paper';
// import { DatePickerModal } from 'react-native-paper-dates';
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { enGB, registerTranslation } from 'react-native-paper-dates'
// registerTranslation('en-GB', enGB)

import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';


export default function DatePicker({ }) {

    const [date, setDate] = useState(dayjs());
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
