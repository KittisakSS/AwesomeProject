import React from "react";
import { Image, Text, View } from "react-native";

export default function Section4() {
  return (
    <View
      style={{
        padding: 1,
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
      }}
    >
      {/* View ก้อนที่ 3 */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20,fontWeight: "bold" }}>Hotel Description</Text>
        <Text style={{ color: "#444444" }}>
          218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor
          incididunt ut labore et dolore
        </Text>
      </View>
    </View>
  );
}
