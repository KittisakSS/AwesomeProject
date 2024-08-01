import React from "react";
import { Image, Text, View } from "react-native";

export default function Section3() {
  return (
    <View style={{ padding: 10 }}>
      {/* View ก้อนที่ 1  */}
      <View style={{ flexDirection: "row", padding: 20 ,borderBottomWidth: 1}}>
        <Text
          style={{
            width: 80,
            height: 80,
            borderRadius: 80 / 2,
            textAlign: "center",
            backgroundColor: "#e5634d",
            color: "white",
            fontSize: 25,
            textAlignVertical: "center",
            justifyContent: "center",
          }}
        >
          9.5
        </Text>
        <View style={{ paddingLeft: 10 ,textAlignVertical: "center",
            justifyContent: "center"}}>
          <Text style={{ fontSize: 27 , color: "#e5634d",}}>Excellent</Text>
          <Text style={{ color: "black" }}>See 801 reviews</Text>
        </View>
      </View>
    </View>
  );
}
