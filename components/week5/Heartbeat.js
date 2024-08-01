import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [num, setnum] = useState("0");

    const onPressButton = () => {
        console.log("+1 !!");
        let output = num+1;
        setnum(output); };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-around",
          marginTop: 10,
        }}  >
        <TouchableOpacity onPress={onPressButton}>
          <FontAwesome title="Heart" name="heart" size={50} color="orange" />
        </TouchableOpacity>
    <Text style={{ fontSize: 50 }}>{num}</Text>
      </View>
    </View>
  );
}
