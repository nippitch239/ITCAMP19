import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function ListBox({ id, name, score ,place}) {
  return (
    <ScrollView>
      <View style={style.boxMain}>
        <View
          style={{
            position: "absolute",
            transform: [{ translateX: -2 }, { translateY: -20 }],
          }}
        >
          <Text style={{ fontSize: 35 }}>{place}</Text>
        </View>

        <View style={style.textInside}>
          <Text>{`Name : ${name} Score : ${score}`}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
    boxMain: {
      width: 300,
      position: "relative",
      height: 55,
      marginTop: 25,
      backgroundColor: "#ffffff",
      flex: 0,
      flexDirection: "column",
      borderRadius: 9,
    },
    centerAuto: {
      flex: 1,
      alignSelf: "center",
      marginTop: 25,
    },
    textInside: {
      fontSize: 25,
      // fontFamily:,
      marginLeft: 25,
    },
  });

export default ListBox;