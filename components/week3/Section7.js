import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View style={{ padding: 20, borderBottomWidth: 1 }}>
      {/* View ก้อนที่ 1  */}
      <Text style={{ fontSize: 20 , paddingLeft : 10,fontWeight: "bold"}}>Room Type</Text>
      <View style={{ flexDirection: "row", padding: 10}}>
      <Image
          style={{ width: 100, height: 100,borderRadius: 50 /4}}
          source={require("../../assets/week3/room-8.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20 , marginBottom : 20,fontWeight: "bold"}}>Standard Twin Room</Text>
          <Text style={{ color: "#e5634d" , fontSize : 20}}>$399.99</Text>
          <Text style={{ color: "#4a90a4" }}>Hurry Up! This is your last room!</Text>
        </View>
      </View>
    </View>
  );
}
