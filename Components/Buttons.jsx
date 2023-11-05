import * as React from "react";
import { View, StyleSheet } from "react-native";
import {Button,Text} from  'react-native-paper';
import {pb} from '../Plugins/pocketbase'
import { useTheme,FAB } from 'react-native-paper';

export function ButtonsChoice({choices,press}) {
  
  const theme = useTheme();
  console.log("fdasfsfffff",choices);
  return (
    <View >
      <View style={style.row}>
          <View style={style.gridContainer}>
            <FAB contentStyle={{margin:5,height:100}} size="small" numberOfLines={5} labelStyle={{ flexShrink: 1 }} style={{margin:5}}  mode="contained" onPress={() =>press(0,choices.correct)} label={choices.choice[0]|| "null0" }>{choices.choice[0]|| "null0" }</FAB>
            <FAB contentStyle={{margin:5,height:100}} size="small" labelStyle={{ flexShrink: 1 }}  style={{margin:5}} mode="contained" onPress={() => press(1,choices.correct)} label={choices.choice[1] || "null1"}>{choices.choice[1] || "null1"}</FAB>
          </View>
      </View>
      <View style={style.row}>
          <View style={style.gridContainer}>
            <FAB contentStyle={{margin:5,height:100}} size="small" labelStyle={{ flexShrink: 1 }}  numberOfLines={1} style={{margin:5}} mode="contained" onPress={() => press(2,choices.correct)} label={choices.choice[2]  || "null2"}>{choices.choice[2]  || "null2"}</FAB>
            <FAB contentStyle={{margin:5,height:100}} size="small" labelStyle={{ flexShrink: 1 }}  style={{margin:5}} mode="contained" onPress={() =>press(3,choices.correct)} label={choices.choice[3] || "null3"}>{choices.choice[3] || "null3"}</FAB>
          </View>
      </View>
    </View>

    
  );
}

const style = StyleSheet.create({
  gridContainer: {
    flex: 2,
    marginHorizontal: "auto",
    width: 400,
  },
  row: {
    flexDirection: "row",
  },
});
