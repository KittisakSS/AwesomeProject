import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Image, Text, View } from "react-native";
export default function Section8() {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 15 }}>Price</Text>
        <Text style={{ color: "#e5634d", fontSize: 20 }}>$399.99</Text>
        <Text style={{ fontSize: 15 }}>AVG/Night</Text>
      </View>
      <View>
        <Button title="Book Now" color="#e5634d"/>
      </View>
    </View>
  );
}
